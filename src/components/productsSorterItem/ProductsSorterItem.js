const ProductsSorterItem = ({value, label, handleSortOption, id}) => {

    return (
        <option id={id} value={value} onClick = {(e)=>handleSortOption(e.target.id)} >{label}</option>
    )
}

export default ProductsSorterItem