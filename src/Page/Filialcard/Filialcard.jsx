import { Link } from "react-router-dom"
import './Filialcard.css'

const Filialcard = () =>{
return(
<div className="filialcard">
    <div className="container">
        <ul className="filialcard-list">
            <li className="filialcard-item">
                <Link className="filialcard-link" to="/filialcard">
                <div className="filialcard-left">
                    <p className="filialcard-name">MaxWay Magic City</p>
                    <p className="filialcard-text">Magic City,ул. Бабура, 174, Ташкент, Узбекистан</p>
                </div>
                <div className="filialcard-right">
                    <p className="filialcard-names">
                        Часы работы
                    </p>
                    <p className="filialcard-text">
                        10:00-03:00
                    </p>
                </div>
                </Link>
            </li>
        </ul>
    </div>
</div>
)
}
export default Filialcard