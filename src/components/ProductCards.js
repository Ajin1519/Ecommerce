export default function ProductCards(props){
    return(
        <div className="products--card">
             <img src={`${props.item.image}`} className="card--image" alt="Product " />
            <div className="card--stats">
            <p className="card--title">{props.item.title}</p>
            <p className="card--price"><span className="bold">Rs{props.item.amount}</span></p>
            <p className="card--rating">{props.item.rating}</p>
            
            <div className="products--bottom">
                <img src="heart.png" alt="favorite"/>
                <img src="shopping-cart.png" alt="cart"/>
            </div>
            </div>

        </div>
    );
}