import React, { useState } from "react";

export default function Carousel({ logement }) {
  const [currentItem, setCurrentItem] = useState(0);

  const showNextItem = () => {
    setCurrentItem((prevItem) => (prevItem + 1) % logement.pictures.length);
  };

  const showPrevItem = () => {
    setCurrentItem(
      (prevItem) =>
        (prevItem - 1 + logement.pictures.length) % logement.pictures.length
    );
  };

  return (
    <div className="carousel-container">
      <button id="btn-prev" onClick={showPrevItem} className="carousel-button prev">
        <i className="fa-solid fa-angle-left"></i>
      </button>
      {logement.pictures.map((picture, index) => (
        <div
          key={index}
          className={`carousel-item ${index === currentItem ? "active" : ""}`}
          style={{ display: index === currentItem ? "block" : "none" }}
        >
          <img
            className="carousel-item-img"
            src={picture}
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
      <button id="btn-next" onClick={showNextItem} className="carousel-button next">
        <i className="fa-solid fa-angle-right"></i> 
      </button>
    </div>
  );
}
