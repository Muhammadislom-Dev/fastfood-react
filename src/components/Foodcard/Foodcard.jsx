import './Foodcard.css'

const Foodcard = ({img, title, price, available, onClick}) =>{
    return(
        <div className="foodcard">
            <div className="container">
            <ul className='foodcard__list'>
                <li className='foodcard__item' onClick={onClick}>
                <img className='foodcard__img' src={img} 
                    alt="food pic"
                    width="150"
                    height="150" 
                />
                <p className='foodcard__title'>{title}</p>
                <p className='foodcard__price'> {price} $ </p>
                <p className='foodcard__available'> {available}  Bowls available </p>
                </li>
        </ul>
            </div>
        </div>
    )
}
export default Foodcard