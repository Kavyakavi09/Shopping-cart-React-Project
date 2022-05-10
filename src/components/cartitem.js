import React from 'react'

function cartItems({ item: { title, discountPrice, id }, removeCart }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{title}</div>₹{discountPrice}
      </div>
      <button
        type="button"
        className="btn-close bg-danger"
        aria-label="Close"
        onClick={() => removeCart({ title, discountPrice, id })}
      ></button>
    </li>
  )
}

export default cartItems
