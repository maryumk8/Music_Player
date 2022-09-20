import { Container, Row, Col, Card, Button } from "../index";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import data from "./apiData/data";
import Modal from "react-bootstrap/Modal";
import { FaPlay, FaRegHeart, FaHeart } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-h5-audio-player/lib/styles.css";
import ClipLoader from "react-spinners/ClipLoader";
import ReactAudioPlayer from "react-audio-player";

function Artist() {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let dispatch = useDispatch();
  const allData = useSelector((state) => state.data.allData);
  const favs = useSelector((state) => state.data.favs);
  const audio = useSelector((state) => state.data.audio);

  const [hover, setHover] = useState(false);
  const [hoverItem, setHoverItem] = useState({});

  let [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const handleHover = (item) => {
    setHoverItem(item);
    setHover(true);
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      //   const res = await handleFilter();
      //   const data2 = await res.json();
      dispatch({ type: "ALL_DATA", payload: data });
    } catch (e) {
      console.log(e);
    }
  };

  const handleFav = (item) => {
    try {
      const found = favs.filter((iteam, index) => {
        return item.id == iteam.id;
      });
      if (found.length > 0) {
        toast.error("cant add duplicate");
      } else {
        dispatch({ type: "FAVS", payload: item });
        toast.success("added to favourites");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handlePlay = (item) => {
    dispatch({ type: "AUDIO", payload: item.preview });

    handleShow();
  };

  useEffect(() => {
    handleSearch();
  }, []);

  console.log(allData);
  return (
    <div>
      <ToastContainer />
      <Container>
        <Row>
          {allData.length > 0 ? (
            allData.map((item, index) => (
              <Col md={2} className="mb-2 text-center mt-4 " key={index}>
                <Card
                  className="cardArtist"
                  onMouseOver={() => handleHover(item)}
                  onMouseOut={() => setHover(false)}
                >
                  <Card.Img
                    src={item.artist.picture}
                    className="img-responsive rounded-circle"
                    alt="not found"
                    height={160}
                  />
                  <Card.Title>{item.artist.name}</Card.Title>

                  {hover && hoverItem.id == item.id ? (
                    <div>
                      {" "}
                      <i>
                        {" "}
                        <FaPlay onClick={() => handlePlay(item)} />
                      </i>
                      <i className="ms-2 heart">
                        <FaRegHeart onClick={() => handleFav(item)} />
                      </i>
                    </div>
                  ) : (
                    <i></i>
                  )}
                </Card>
              </Col>
            ))
          ) : (
            <h2>
              {" "}
              LOADING...
              <ClipLoader cloading={loading} size={50} />
            </h2>
          )}
        </Row>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>AUDIO PLAYER</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <ReactAudioPlayer src={audio} autoPlay controls />
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}

export default Artist;
