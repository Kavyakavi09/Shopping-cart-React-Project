import React from 'react'

function Card({ product: { brand, title, rating, originalPrice, discountPrice, sale, img, id, }, handleCart, cartItems,}) {
  {
    /* calculating offer */
  }
  let discount = originalPrice - discountPrice
  let offer = Math.floor((discount / originalPrice) * 100)

  return (
    <div className="col mb-5">
      <div className="card h-100">
        {/* <!-- Sale badge--> */}
        {sale ? (
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: ' 0.5rem', right: '0.5rem' }}
          >
            Sale
          </div>
        ) : (
          ''
        )}
        {/* <!-- Product image--> */}
        <img className="card-img-top img-fluid image" src={img} alt="..." />
        {/* <!-- Product details--> */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* <!-- Product name--> */}
            <h5 className="fw-bolder">{brand}</h5>
            <h6 className="card-title">{title}</h6>
            {/* <!-- Product reviews--> */}
            {rating ? (
              <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
                <div className="bi-star-fill"></div>
              </div>
            ) : null}
            {/* <!-- Product price--> */}
            {sale ? (
              <div>
                <span className="text-muted text-decoration-line-through">
                  ₹{originalPrice}
                </span>{' '}
                <span>
                  ₹{discountPrice}{' '}
                  <span style={{ color: 'red' }}>({offer}% OFF)</span>
                </span>
              </div>
            ) : (
              <span>₹{discountPrice}</span>
            )}
          </div>
        </div>
        {/* <!-- Product actions--> */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center d-grid">
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => handleCart({ title, discountPrice, id })}
              disabled={cartItems.some((obj) => obj.id === id)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
