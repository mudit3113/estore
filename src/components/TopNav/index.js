import './_TopNav.scss'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login'
import { gapi } from 'gapi-script'
import { useState } from 'react'

const TopNav = () => {
  const cartItemCount = useSelector((state) => state.cr.totalItems)
  const favouriteItemCount = useSelector((state) => state.fr.totalItems)
  const [userDetails, setUserDetails] = useState('')

  const successHandler = (res) => {
    setUserDetails(res.profileObj)
  }

  return (
    <>
      <div className="header bg-dark">
        <div className="row top-nav-row">
          <div className="brand my-1">
            <div>
              <Link to="/">
                {' '}
                <i className="fa fa-arrow-left"></i>{' '}
              </Link>
            </div>
            <div>
              <Link to="/">
                <h1 style={{ color: 'white' }}>mudKart</h1>
              </Link>
            </div>
          </div>
          <div className="inp-container p-0 my-4 w-50 h-25 bg-white">
            <div className="dropdown m-0 p-0">
              <select className="select-btn w-100 p-0 m-0">
                <option> Men</option>
                <option> Women</option>
                <option> Kids </option>
              </select>
            </div>
            <input className="form-control" />
            <button>
              {' '}
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div className="login-container">
            <i className="fa fa-user-circle user-icon" />

            <h5>
              {userDetails === '' ? (
                <GoogleLogin
                  clientId="24623020072-i3fpuh80nr1ut9v4msr7bvfhiumb3idu.apps.googleusercontent.com"
                  buttonText="Login"
                  cookiePolicy="single_host_origin"
                  onSuccess={successHandler}
                />
              ) : (
                <p> Hello {userDetails.name}</p>
              )}
            </h5>
          </div>
          <div className="cart-wishlist">
            <ul className="p-0">
              <Link to="/favourites">
                <li className="list-icon">
                  {' '}
                  <i className="fa fa-heart"></i>{' '}
                  {favouriteItemCount !== 0 ? (
                    <div id="favourite-item-count">
                      <p>{favouriteItemCount}</p>
                    </div>
                  ) : (
                    <></>
                  )}
                </li>
              </Link>
              <Link to="/cart">
                <li className="list-icon">
                  <i className="fa fa-shopping-cart" />
                  {cartItemCount !== 0 ? (
                    <div id="cart-item-count">
                      <p> {cartItemCount} </p>
                    </div>
                  ) : (
                    <></>
                  )}
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopNav
