import React from 'react'

function Carousel() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>{' '}
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true/mediafiles/ecomm/misc/1650092878_faces-home-banner-web-1.png"
            className="d-block w-100"
            alt="..."
          ></img>
        </div>
        <div className="carousel-item">
          <img
            src="https://images-static.nykaa.com/uploads/a60fdc13-54b4-4cf4-b0b9-e2e48513e589.jpg?tr=w-1200,cm-pad_resize"
            className="d-block w-100"
            alt="..."
          ></img>
        </div>
        <div className="carousel-item">
          <img
            src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true,f-gif/mediafiles/ecomm/misc/1650014552_gv-web-banner-1298x418-2.gif"
            className="d-block w-100"
            alt="..."
          ></img>
        </div>
        <div className="carousel-item">
          <img
            src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true/mediafiles/ecomm/misc/1650090664_nyb-takeover-red-hot-sale-main-banner_1298_418-1.jpg"
            className="d-block w-100"
            alt="..."
          ></img>
        </div>
        <div className="carousel-item">
          <img
            src="https://images-static.nykaa.com/uploads/df144cc9-f0b9-4d5d-b561-d66f5a0699c7.gif?tr=w-1200,cm-pad_resize"
            className="d-block w-100"
            alt="..."
          ></img>
        </div>
        <div className="carousel-item">
          <img
            src="https://media6.ppl-media.com/tr:w-1280,c-at_max,pr-true/mediafiles/ecomm/misc/1651819960__-fc-web-main-banner-1298x418.png"
            className="d-block w-100"
            alt="..."
          ></img>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel
