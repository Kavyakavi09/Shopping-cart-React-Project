import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Card from './components/card'
import Carousel from './components/carousel'
import CartItems from './components/cartitem'
import { useState } from 'react'

function App() {
  let products = [
    {
      id: 1,
      brand: 'nyx',
      title: 'Butter Lipstick',
      discountPrice: 155,
      view: true,
      img:
        'https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/872/original/open-uri20171224-4-193brnk?1514082418',
    },
    {
      id: 2,
      brand: 'clinique',
      title: "That's The Point Eyeliner",
      rating: true,
      originalPrice: 1099,
      discountPrice: 879,
      sale: true,
      img:
        'https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/946/original/open-uri20171224-4-18to599?1514082700',
    },
    {
      id: 3,
      brand: 'Revlon',
      title: 'Touch & Glow Moisturising Powder - Gold Matte',
      originalPrice: 515,
      discountPrice: 360,
      sale: true,
      img:
        'https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/381/original/data?1514063313',
    },
    {
      id: 4,
      brand: 'smashbox',
      title: 'Mini Full Exposure Palette',
      rating: true,
      discountPrice: 649,
      img:
        'https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/528/original/open-uri20171223-4-qdeca8?1514062151',
    },
    {
      id: 5,
      brand: 'lotus cosmetics usa',
      title: 'Creme to Powder Blush',
      originalPrice: 799,
      discountPrice: 719,
      sale: true,
      img:
        'https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/017/original/open-uri20180630-4-1r5paz3?1530390370',
    },
    {
      id: 6,
      brand: 'sante',
      title: 'Sante Nail Polish',
      discountPrice: 90,
      view: true,
      img:
        'https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/136/original/data?1514062267',
    },
    {
      id: 7,
      brand: 'Amplify Mascara Black Ink',
      title: 'Set of 5 Day and Night Liquid Lipsticks',
      rating: true,
      originalPrice: 849,
      discountPrice: 212,
      sale: true,
      img:
        'https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/649/original/open-uri20171223-4-10cz7j2?1514062288',
    },
    {
      id: 8,
      brand: 'clinique',
      title: 'Sun-Kissed Face Gelee',
      rating: true,
      discountPrice: 1209,
      img:
        'https://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/781/original/data?1514072335',
    },
  ]

  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)

  let handleCart = (item) => {
    setCartItems([...cartItems, item])
    setTotal(total + item.discountPrice)
  }

  let removeCart = (item) => {
    let itemIndex = cartItems.filter((obj) => obj.id !== item.id)
    setCartItems(itemIndex)
    setTotal(total - item.discountPrice)
  }

  return (
    <div className="">
      {/* Navigation starts*/}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            My Shopee
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-light" type="button">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-light text-dark ms-1 rounded-pill">
                  {cartItems.length}
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* Navigation ends*/}

      {/* <!-- Header starts--> */}
      <header className="pt-4">
        <div className="container-fluid mt-5">
          <Carousel></Carousel>
        </div>
      </header>
      {/* <!-- Header ends--> */}

      {/* Section starts*/}
      <section className="pt-4 pb-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row">
            <div className="col-lg-9 order-2 order-lg-1">
              <div className="row gx-4 row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 justify-content-center">
                {products.map((product) => {
                  return (
                    <Card
                      product={product}
                      key={product.id}
                      handleCart={handleCart}
                      cartItems={cartItems}
                    />
                  )
                })}
              </div>
            </div>
            <div className="col-lg-3 order-1 mb-3 order-lg-2">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h4>
                    My Cart{' '}
                    <span className="badge bg-primary rounded-pill">
                      {cartItems.length}
                    </span>
                  </h4>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 text-center">
                  <ol className="list-group list-group-numbered">
                    {cartItems.map((item) => {
                      return (
                        <CartItems
                          item={item}
                          removeCart={removeCart}
                          key={item.id}
                        ></CartItems>
                      )
                    })}
                  </ol>
                </div>
              </div>
              {cartItems.length > 0 ? (
                <div className="row">
                  <div className="col-lg-12 text-center mt-3">
                    <h3>Total=₹{total}</h3>
                  </div>
                </div>
              ) : (
                <h4 className="text-center pt-3 no-item">
                  No items in the cart
                </h4>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* Section ends*/}

      {/* <!-- Footer starts--> */}
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; My Shopee 2022
          </p>
        </div>
      </footer>
      {/* <!-- Footer ends--> */}
    </div>
  )
}

export default App
