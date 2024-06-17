import ProductsList from '../productsList/ProductsList'
import ProductsFilter from '../productsFilter/ProductsFilter'
import ProductsCounter from '../productsCounter/ProductsCounter'
import ProductsSorter from '../productsSorter/ProductsSorter'
import './ContentField.scss'

const ContentField = () => {

    return (
        <div className="contentField">
            <ProductsFilter />
            <ProductsSorter />
            <ProductsCounter />
            <ProductsList />
        </div>
    )
}

export default ContentField