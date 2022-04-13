import Item from '../Item/Item'

const ItemList = ({prods}) =>{
    return (
        <div className='ItemList'>
            {prods.map((prod) => (
                <Item key = {prod.id} prod = {prod} />
            ))}
        </div>
    )
}
export default ItemList;