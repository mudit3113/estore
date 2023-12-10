import './_side-nav.scss';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import accordionCatSlice from "../../Redux/Accordion/accordionSlice"
import categorySlice from '../../Redux/Category/categorySlice';
import { getCategories } from '../../Redux/Category/action';
import { filterProducts,filterByPrice } from '../../Redux/Product/productSlice';

const SideNav = () => {

    const fetchedProductData = useSelector(state => state.pr);
    const accordionData = useSelector(state => state.categoryReducer.categories);

    const [products, setProducts] = useState();
    const [minPriceLimit, setMinPriceLimit] = useState(100);
    const [maxPriceLimit, setMaxPriceLimit] = useState(3000);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [])

    useEffect(() => {
        setProducts(fetchedProductData.products)
    }, [fetchedProductData.status])

    const filterData = (selectedCategory) => {

        const payload = { selectedCategory, products };
        dispatch(filterProducts(payload))
    }

    const setPriceLimit = (e,stateFlag) => {
        if(stateFlag === "min"){
            setMinPriceLimit(e.target.value);
        }else if(stateFlag === "max"){
            setMaxPriceLimit(e.target.value)
        }
    }

    const applyPriceFilter = () => {
        const payload = {products,minPriceLimit,maxPriceLimit};
        dispatch(filterByPrice(payload))
    }

    return (
        <div className='side-nav'>
            <div className='section-title'>
                <h3>Category</h3>
            </div>
            <div className='accordion my-3'>
                {
                    accordionData.map((accordionCategory, key) => {
                        if (accordionCategory.parentcategoryid === null) {
                            return (
                                <div className='accordion-item individual-category'>
                                    <div className='accordion-header'>
                                        <button className='accordion-button' data-bs-target={"#collapse" + key} data-bs-toggle="collapse">
                                            <div className='category-title'>
                                                <a href='#'>{accordionCategory.category}</a>
                                            </div>
                                        </button>
                                    </div>
                                    <div className='accordion-collapse collapse show' id={"collapse" + key}>
                                        <div className='accordion-body'>
                                            <ul>
                                                {
                                                    accordionData.map((subCategory) => {
                                                        if (accordionCategory.id === subCategory.parentcategoryid) {
                                                            return (
                                                                <li className='sub-items'>
                                                                    <a href='#' onClick={() => filterData(subCategory)}>{subCategory.category}</a>
                                                                </li>

                                                            )

                                                        }
                                                    })
                                                }

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            )

                        }

                    })
                }

            </div>
            <div className='price-filter-container'>
                <div className='section-title'>
                    <h3>Filter by price</h3>
                </div>
                <div>
                    <label>Min : {minPriceLimit} </label>
                    <input
                        className='form-range'
                        type="range"
                        min={100}
                        max={3000}
                        step={100}
                        onChange={(e) => {setPriceLimit(e,"min")}}
                    />
                </div>
                <div>
                    <label>Max :{maxPriceLimit} </label>
                    <input
                        className='form-range'
                        type="range"
                        min={100}
                        max={3000}
                        step={100}
                        onChange={(e) => {setPriceLimit(e,"max")}}

                    />
                </div>
                <button className='btn btn-outline-dark my-3' onClick={applyPriceFilter}> Apply Filter </button>
            </div>


        </div>
    )
}

export default SideNav;