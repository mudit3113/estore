import EmptyFavourites from './EmptyFavourites'
import FilledFavourites from './FilledFavourites'
import { useSelector } from 'react-redux'

const Favourites = () => {
  const favourites = useSelector((state) => state.fr)

  return (
    <>
      {favourites.favouriteItems.length === 0 ? (
        <EmptyFavourites />
      ) : (
        <FilledFavourites />
      )}
    </>
  )
}

export default Favourites
