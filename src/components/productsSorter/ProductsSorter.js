import { useEffect } from 'react'
import { fetchSorter } from '../store/sorterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveSortOption } from '../store/sorterSlice'
import ProductsSorterItem from '../productsSorterItem/ProductsSorterItem'

import './ProductsSorter.scss'

const ProductsSorter = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchSorter())
        // eslint-disable-next-line
    }, [])

    const handleSortOption = (item) => {
        dispatch(setActiveSortOption(item))
    }

    const sortOptions = useSelector(state => state.sorter.sortOptions)

    const renderSorter = (arr) => {
        if(!arr) return 0

        if(!arr.length) return 0

        const options = arr.map(({value, label, id}) => 
            <ProductsSorterItem 
                key={id}
                id={id}
                value = {value}
                label = {label}
                handleSortOption = {handleSortOption}
            />
        )
        return <select name="sorter" id="sorter" > {options} </select>
    }

    const element = renderSorter(sortOptions)
    return (
        <div className="sorter-wrapper">
            {element}
        </div>
        
    )
}

export default ProductsSorter