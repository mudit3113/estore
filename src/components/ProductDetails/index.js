import { useLocation } from 'react-router-dom'
import './_product-details.scss'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../../Redux/Cart/cartSlice'

const ProductDetails = () => {
  const location = useLocation()
  console.log(location)
  const dispatch = useDispatch()
  const addToCart_productDetail = () => {
    dispatch(addCartItem(location.state))
  }

  return (
    <div>
      <div className="row container my-5 product-details-container">
        <div className="col-5 product-img-container">
          <img src={require('../../assets/' + location.state.productimg)} />
        </div>
        <div className="col-7 product-info">
          <span id="product-name"> {location.state.productname}</span>
          <div className="rating-container">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="product-price">
            MRP: <span className="price"> {location.state.price} </span>
            <div style={{ fontSize: '0.8em' }}> Inclusive of all taxes.</div>
          </div>
          <div className="my-3 product-description">
            <span> {location.state.description}</span>
          </div>
          <div className="my-5 flex-container">
            <div
              className="btn btn-warning cart-button"
              onClick={addToCart_productDetail}
            >
              <div className="cart-icon-container">
                <i className="fa fa-shopping-cart" />
              </div>
              <div className="cart-text-container">
                <p>Add to Cart </p>
              </div>
            </div>
            <div
              className="btn btn-warning cart-button"
              onClick={addToCart_productDetail}
            >
              <div className="cart-icon-container">
                <i className="fa fa-heart" />
              </div>
              <div className="cart-text-container">
                <p>Add to Wishlist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
