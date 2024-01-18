import './_empty-favourites.scss'
import { Link } from 'react-router-dom'

function EmptyFavourites() {
  return (
    <div>
      <div className="p-4 ec-main-div">
        <span className="my-5 ec-text">
          Wheee, You seem to have no items in the wishlist.
        </span>
        <hr />
        <Link to="/">
          <div className="btn btn-warning my-3">
            <span style={{ fontWeight: 900 }}>Continue shopping</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default EmptyFavourites
