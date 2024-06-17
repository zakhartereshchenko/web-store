import './ProductsListItem.scss'

const ProductsListItem = ({id, name, model, memory, price, image}) => {
    const altText = `${name} ${model} ${memory}gb`
    return (
        <li className='list-item'>
            <div className='card'>
                <img 
                    src={image} 
                    alt={altText} 
                    />
                <h3>{name} {model} {memory}gb</h3>
                <span>{price}$</span>
                <input type="button" value = "Add to Bag" />
            </div>
        </li>
    )
}

export default ProductsListItem