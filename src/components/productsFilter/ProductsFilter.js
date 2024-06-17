import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFilters } from '../store/filterSlice'
import ProductsFilterItem from '../productsFilterItem/ProductsFilterItem'
import './ProductsFilter.scss'

const ProductsFilter = () => {
    const [priceRange, setPriceRange] = useState([0, 2000])
    
    const handleChangePriceRange = (event) => {
        // console.log(event.target.value)
    }

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchFilters())
        // eslint-disable-next-line
    }, [])

    const brands = useSelector(state => state.filters.brands)
    const storages = useSelector(state => state.filters.storages)

    const renderFilter = array => {
        if(!array) return 0

        if(!array.length) return 0

        const filters = array.map(({id, name, label, isChecked, type}) => 
            <ProductsFilterItem 
                key = {id}
                id = {id}
                name = {name}
                label = {label}
                isChecked = {isChecked}
                type = {type}
            />
        )
        return <form> {filters} </form>
    }


    
    const brandFiltersElements = renderFilter(brands)
    const storageSizeFiltersElements = renderFilter(storages)
    return (
        <div className="filters">
            <h2>Filters</h2>
            <div className='sections'>
                <div className="brand section">
                    <h3>Brand</h3>
                    {brandFiltersElements}
                </div>
                <div className="storage section">
                    <h3>Storage</h3>
                    {storageSizeFiltersElements}
                </div>
                <div className="price">
                    <h3>Price</h3>
                    <form>
                        <div>
                            <input type="range" name="price" id="price" min="0" max="2000" value = {priceRange} onChange = {handleChangePriceRange} step = "10" />
                        </div>
                        
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default ProductsFilter