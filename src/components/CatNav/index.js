import { useEffect } from 'react'
import categorySlice from '../../Redux/Category/categorySlice'
import './_CatNav.scss'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories } from '../../Redux/Category/action'
import { Link } from 'react-router-dom'
import Dropdown from '../commonComponents/dropdown'

const CatNav = () => {
  const categories = useSelector((state) => state.categoryReducer.categories)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  console.log(categories, 'categories')

  const parentCategories = categories
    .filter((category) => category.parentcategoryid === null)
    .map((category) => category.category)

  return (
    <>
      <div className="cat-nav-container">
        <ul className="list-container">
          <li className="list-items">
            <Link to="/">Home</Link>
          </li>
          <li className="list-items">
            <Dropdown list={[...parentCategories]} />
          </li>
        </ul>
      </div>
    </>
  )
}

export default CatNav
