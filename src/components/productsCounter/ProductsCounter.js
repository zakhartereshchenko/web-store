import { useSelector } from "react-redux"


const ProductsCounter = () => {

    
    const amountOfItems = useSelector(state => state.store.amountOfItems)

    return (
        <>
            <h3>{amountOfItems} {amountOfItems > 1 ? 'elements' : 'element'}</h3>
        </>
    )
}

export default ProductsCounter