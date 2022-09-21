import { useEffect, useState } from "react";
import { Container, Navbar, Row, Col, Button, Form } from "../index";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleSearchArtist } from "../services/radioApi";
import data from "./apiData/data";
import { FaHeart } from "react-icons/fa";

function NavBar() {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  let dispatch = useDispatch();
  const allData = useSelector((state) => state.data.allData);
 
  const handleSearch = async () => {
    try {
      // const res = await handleSearchArtist(title);
      // const data = res.json();
      // if (data.data.length > 0 ) {
      //   dispatch({ type: "ALL_DATA", payload: data.dat });
      // }

      const a = allData.filter((item, index) => {
        return item.artist.name.includes(title);
      });
      if (a.length > 0 && title.length > 0) {
        dispatch({ type: "ALL_DATA", payload: a });
      } else {
        dispatch({ type: "ALL_DATA", payload: data });
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    handleSearch();
  }, [title]);

  return (
    <div>
      {" "}
      <Container>
        <Row className="mt-3 text-center">
          <Col className="col-12">
            {" "}
            <h5 onClick={() => navigate("/")}>WELCOME TO AUDIO PLAYER</h5>{" "}
            <span className="ms-auto ">
              <Button
                variant="danger"
                className="btn-sm mb-4"
                onClick={() => navigate("/fav")}
              >
                Favourites <FaHeart />
              </Button>{" "}
            </span>{" "}
          </Col>

          <Col className="col-12">
            <Form>
              <Form.Group>
                <Form.Control
                  type="search"
                  placeholder="    search"
                  className="search"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
            </Form>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default NavBar;
