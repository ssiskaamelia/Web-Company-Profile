import React from "react";
import "./Gallery.css";
import { useTheme } from "../context/themeContext";

import agency1 from "../img/agency1.jpg";
import agency2 from "../img/agency2.jpg";
import agency3 from "../img/agency3.jpg";
import agency4 from "../img/agency4.jpg";

const GallerySection = () => {
  let data = [
    {
      id: 1,
      imgSrc: agency4,
    },
    {
      id: 2,
      imgSrc: agency2,
    },
    {
      id: 3,
      imgSrc: agency3,
    },
    {
      id: 4,
      imgSrc: agency1,
    },
  ];

  return (
    <>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index}>
              <img src={item.imgSrc} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GallerySection;
