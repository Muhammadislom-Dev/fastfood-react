import './FoodCard.css'

const FoodCard = ({img, title, price, available, onClick}) =>{
    return(
        <div className="foodcard">
            <div className="container">
                <div className="foodcard-page">
                    <ul className='foodcard-list'>
                        <li className='foodcard-item' onClick={onClick}>
                        <img className='foodcard-img' src={img} 
                        alt="food pic"
                        width="150"
                        height="150" 
                        />
                        <p className='foodcard-title'>{title}</p>
                        <p className='foodcard-price'> {price} $ </p>
                        <p className='foodcard-available'> {available}  Bowls available </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default FoodCard