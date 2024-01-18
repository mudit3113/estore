import './_filled-favourites.scss'
import { useSelector, useDispatch } from 'react-redux'
import { removeFavouriteItem } from '../../../Redux/Favourite/favouriteSlice'
import { addCartItem } from '../../../Redux/Cart/cartSlice'

function FilledFavourites() {
  const favourites = useSelector((state) => state.fr)
  console.log('favourites', favourites)

  const dispatch = useDispatch()

  const removeFavoriteItem_wishlist = (itemId) => {
    dispatch(removeFavouriteItem(itemId))
  }

  const addToCart_wishlist = (item) => {
    dispatch(addCartItem(item))
    dispatch(removeFavouriteItem(item.id))
  }

  return (
    <div>
      <div className="row my-5 fc-main-div">
        <div className="col-8 p-4">
          {favourites.favouriteItems.map((item, key) => {
            return (
              <div>
                <div className="row cart-item-card">
                  <div className="col-4">
                    <img src={require('../../../assets/' + item.productimg)} />
                  </div>
                  <div className="col-8">
                    <div className="p-3 cart-item-details">
                      <span className="cart-item-name">
                        {' '}
                        {item.productname}{' '}
                      </span>
                      <div className="cart-item-price">
                        <span> Rs.{item.price} </span>
                      </div>
                      <div>
                        <i className="fa fa-star text-warning" />
                        <i className="fa fa-star text-warning" />
                        <i className="fa fa-star text-warning" />
                        <i className="fa fa-star text-warning" />
                        <i className="fa fa-star text-warning" />
                      </div>
                      <hr />
                      <div className="cart-edit-container">
                        <div
                          className="btn-group mx-3"
                          onClick={() => addToCart_wishlist(item)}
                        >
                          <div className="btn btn-warning cart-button">
                            <div className="cart-icon-container">
                              <i className="fa fa-shopping-cart" />
                            </div>
                            <div className="cart-text-container">
                              <p>Add to Cart </p>
                            </div>
                          </div>
                        </div>
                        <div
                          className="btn btn-outline-danger mx-4"
                          onClick={() => removeFavoriteItem_wishlist(item.id)}
                        >
                          <span>
                            {' '}
                            <i className="fa fa-trash mx-2" /> Remove from
                            Wishlist{' '}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FilledFavourites
