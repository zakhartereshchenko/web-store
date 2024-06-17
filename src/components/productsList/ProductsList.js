
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPhones, setAmountOfItems } from '../store/storeSlice'
import ProductsListItem from '../productsListItem/ProductsListItem'
import './ProductsList.scss'

const ProductsList = () => {

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchPhones())
        // eslint-disable-next-line
    }, [])
    

    const phones = useSelector(state => state.store.items)
    
    const brandFilter = useSelector(state => state.filters.brands)
    const storageFilter = useSelector(state => state.filters.storages)

    const activeSortOption = useSelector(state => state.sorter.activeSortOption)

    const filterArrayByBrand = (array, filter) => {
        const checkedFilters = filter.filter(filter => filter.isChecked === true)
        const brands = checkedFilters.length
            ? checkedFilters.map(item => item.name)
            : filter.map(item => item.name)

        const temp = []
        for(let item of array){
            if(brands.includes(item.name.toLowerCase())){
                temp.push(item)
            }
        }
        return temp
    }
    const filterArrayByStorage = (array, filter) => {
        const checkedFilters = filter.filter(filter => filter.isChecked === true)
        const storages = checkedFilters.length
            ? checkedFilters.map(item => item.name)
            : filter.map(item => item.name)

        const temp = []
        for(let item of array){
            if(storages.includes(item.memory)){
                temp.push(item)
            }
        }
        return temp
    }

    const sortList = (list) => {
        if(!list.length) return 0

        if(activeSortOption === "priceLow") {
            list.sort(function(a,b){
                return a.price - b.price
            })
        }
            
        if(activeSortOption === "priceHigh"){
            list.sort(function(a,b){
                return b.price - a.price
            })
        }
        return list
    }

    const renderList = array => {
        if(!array.length) return 0

        const list = array.map(({id, ...props}) => 
            <ProductsListItem 
                key = {id}
                id = {id}
                {...props}
            />
        )
        return <ul style={{listStyle: 'none'}}> {list} </ul>
    }
    

    const filtredListOfPhonesByBrandAndStorage = filterArrayByBrand(filterArrayByStorage(phones, storageFilter), brandFilter)
    const sortedList = sortList(filtredListOfPhonesByBrandAndStorage)
    const elements = renderList(sortedList)
    useEffect(()=>{
        dispatch(setAmountOfItems(sortedList.length))
    }, [sortedList])
    
    return (
        <>
            {elements || <h2>No phones according to your request</h2>}
        </>
    )
}

export default ProductsList