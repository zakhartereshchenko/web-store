import { toggleCheckboxBrandFilter, toggleCheckboxStorageFilter } from "../store/filterSlice"
import { useDispatch } from "react-redux"

const ProductsFilterItem = ({id, name, label, isChecked, type}) => {
    const dispatch = useDispatch()

    const handleButtonToggleChecked = (id, type) => {
        if(type === "brand") dispatch(toggleCheckboxBrandFilter({id}))
        if(type === "storage") dispatch(toggleCheckboxStorageFilter({id}))
    }

    const checkedInput = isChecked 
    ? <input type="checkbox" name={name} id={id} onChange = {() => handleButtonToggleChecked(id, type)} defaultChecked/> 
    : <input type="checkbox" name={name} id={id} onChange = {() => handleButtonToggleChecked(id, type)}/>
    
    return (
        <div>
                {checkedInput}
                <label htmlFor={id}>{label}</label>
            </div>
    )
}

export default ProductsFilterItem