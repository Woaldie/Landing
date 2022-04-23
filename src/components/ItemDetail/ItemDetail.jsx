import { useCartContext } from "../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import s from './ItemDetail.module.css'

export default function ItemDetail({image, name, price, id, description, stock}){

  const {addToCart} = useCartContext()
  // const [quantity, setQuantity] = useState (0);

  function handleOnAdd (q) {
    addToCart({image, name, price, id, description, stock}, q)
  }
  // console.log(quantity);
    return (
      <>
        <div className={s.containerDetail} key={id}>
          <img src={image} alt={name} className = {s.image} />
          <div>
            <h2>{name}</h2>
            <h3>${price}</h3>
            <p>{description}</p>
            <p>{stock}</p>
            <div >
              <ItemCount stock={5} onAdd = {handleOnAdd}/>  
            </div>
          </div>
        </div>
     </>   
    )
}