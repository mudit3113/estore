import "./_TopNav.scss";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

const TopNav = () => {
    const cartItemCount = useSelector(state => state.cr.totalItems)
    return (
        <>
            <div className="header bg-dark">
                <div className="row top-nav-row">
                    
                    <div className="brand my-1">
                        <div>
                            <Link to="/" > <i className='fa fa-arrow-left'></i> </Link>
                        </div>
                        <div>
                        <h1> eStore</h1>
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
                        <input className='form-control' />
                        <button> <i className='fa fa-search'></i></button>
                    </div>
                    <div className="login-container">
                        <i className="fa fa-user-circle user-icon" />
                        <h5> <a href="#"> Login </a>  / <a href="#"> Register </a></h5>
                    </div>
                    <div className="cart-wishlist">
                        <ul className='p-0'>
                            <li className="list-icon"> <i className="fa fa-heart"></i> </li>
                            <Link to="/cart">
                            <li className='list-icon'>
                                <i className='fa fa-shopping-cart' />
                                {
                                    cartItemCount !== 0 ?
                                        <div id='cart-item-count'>
                                            <p> {cartItemCount} </p>
                                        </div>
                                        : <></>
                                }
                            </li>
                            </Link>
                           
                        </ul>

                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNav;