import './Foodcard.css'

const Foodcard = ({id,img,title,price,available
,onClick}) =>{
return(
<div className="foodcard">
    <div className="container">
        <ul className="foods-list" key={id}>
            <li className="foods-item">
                <img src={img} alt="" className="foods-img" />
            </li>
            <li className="foods-item">
                <h3 className="foods-title">
                    {title}
                </h3>
            </li>
            <li className="foods-item">
                <p className="foods-text">
                    Информация: лаваш мясной classic, картофель-фри, пеп
                </p>
            </li>
            <li className="foods-item">
                <span>
                    {price} сум
                </span>

            </li>
        </ul>
    </div>
</div>
)
}
export default Foodcard