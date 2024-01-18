import './_products.scss'
import { useSelector, useDispatch } from 'react-redux'
import productSlice from '../../Redux/Product/productSlice'
import { useEffect } from 'react'
import { getProducts } from '../../Redux/Product/productAction'
import { addCartItem } from '../../Redux/Cart/cartSlice'
import {
  addFavouriteItem,
  removeFavouriteItem,
} from '../../Redux/Favourite/favouriteSlice'
import { Link } from 'react-router-dom'

const Products = () => {
  const productData = useSelector((state) => state.pr.products)
  const cart = useSelector((state) => state.cr)
  const favouriteItems = useSelector((state) => state.fr.favouriteItems)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const addToCart = (itemData) => {
    const payload = { ...itemData, quantity: 1 }
    dispatch(addCartItem(payload))
  }

  const toggleFavorite = (itemData) => {
    if (favouriteItems.some((item) => item.id === itemData.id)) {
      dispatch(removeFavouriteItem(itemData.id))
    } else {
      const payload = { ...itemData, quantity: 1 }
      dispatch(addFavouriteItem(payload))
    }
  }

  return (
    <div className="products-container">
      {productData.map((product, key) => {
        const isFavorite = favouriteItems.some((item) => item.id === product.id)
        console.log('isFav', isFavorite)

        return (
          <div className="mx-5 p-3 product-card">
            <Link to="/productDetails" state={product}>
              <div className="product-image-container">
                <img src={require('../../assets/' + product.productimg)} />
              </div>
            </Link>
            <div className="product-info">
              <h5>
                <Link to="/productDetails" state={product}>
                  {product.productname}{' '}
                </Link>
              </h5>
              <p className="product-price"> Rs.{product.price} </p>
              <div className="product-rating">
                <i className="fa fa-star"> </i>
                <i className="fa fa-star"> </i>
                <i className="fa fa-star"> </i>
                <i className="fa fa-star"> </i>
                <i className="fa fa-star"> </i>
              </div>
            </div>
            <div className="my-3">
              <div
                className="item-button green-background"
                onClick={() => {
                  addToCart(product)
                }}
              >
                <div className="item-icon-container">
                  <i className="fa fa-shopping-cart" />
                </div>
                <div className="item-text-container">
                  <p>Add to Cart</p>
                </div>
              </div>
              <div
                className={`item-button ${
                  isFavorite ? 'orange-background' : 'green-background'
                }`}
                onClick={() => {
                  toggleFavorite(product)
                }}
              >
                <div className="item-icon-container">
                  <i className="fa fa-heart" />
                </div>
                <div className="item-text-container">
                  <p style={{ color: isFavorite ? 'black' : 'white' }}>
                    {isFavorite ? 'Remove from Wishlist' : 'Add to Wishlist'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Products
