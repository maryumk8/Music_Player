import { useSelector, useDispatch } from "react-redux";
import { Button } from "../index";
import Tab from "./apiData/tabs";
import { useEffect, useState } from "react";
import Hits from "./apiData/hits";
import Indie from "./apiData/indie";
import data from "./apiData/data";
import ClipLoader from "react-spinners/ClipLoader";
import { handleCategoryTabs, handleTracklist } from "../services/radioApi";

function Carousel() {
  let dispatch = useDispatch();
  const allCategories = useSelector((state) => state.data.allCategories);
  const allData = useSelector((state) => state.data.allData);

  let [loading, setLoading] = useState(false);

  const handleCategory = async () => {
    try {
      // const res=await handleCategoryTabs()
      // const data=res.json()
      // dispatch({ type: "ALL_CATEGORIES", payload: Tab });

      dispatch({ type: "ALL_CATEGORIES", payload: Tab });
    } catch (e) {
      console.log(e);
    }
  };

  const handleFilter = async (item) => {
    try {
      // const res=await handleTracklist(item.id)
      // const data=res.json()
      // dispatch({ type: "ALL_CATEGORIES", payload: data });

      if (item.title == "Hits") {
        dispatch({ type: "ALL_DATA", payload: Hits });

        console.log(Hits);
      } else if (item.title == "Indie") {
        dispatch({ type: "ALL_DATA", payload: Indie });
      } else {
        dispatch({ type: "ALL_DATA", payload: data });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    handleCategory();
  }, []);
  return (
    <div className="carosalDiv mt-4 ">
      <div className="carosal over">
        {allCategories.length > 0 ? (
          allCategories.map((item, index) => (
            <Button
              variant="outline-dark"
              className=" buton me-2 "
              key={index}
              onClick={() => handleFilter(item)}
            >
              {item.title}{" "}
            </Button>
          ))
        ) : (
          <h2>
            {" "}
            LOADING... <ClipLoader cloading={loading} size={50} />
          </h2>
        )}
      </div>
      <i className="arrow left "></i>

      <i className="arrow right"></i>
    </div>
  );
}

export default Carousel;
