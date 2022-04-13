const Item = ({prod}) => {
    return(
        <div className="Item">
            <div className="Item-ID">ID: {prod.id} </div>
            <div className="Item-info">
                <div className="Item-title">Name: {prod.name} </div>
                <div className="Item-price">Price: {prod.price} </div>
                <div className="Item-stockl">Stock: {prod.stock} </div>
                <div className="Item-description">Description: {prod.description} </div>
            </div>
        </div>
    );
};

export default Item;