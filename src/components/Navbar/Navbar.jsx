import './Navbar.css'
import Bscard from '../Lib/Bscard'
import { Link } from 'react-router-dom'

const Navbar = () =>{

    return(
        <div className="navbar">
            <div className="container">
                <div className="navbar-left">
                    <Link className="navbar-links">
                      SFood
                    </Link>
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <Link className='navbar-link'>
                               Главная
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link className='navbar-link'>
                               Филиалы
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link className='navbar-link'>
                               О нас
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link className='navbar-link'>
                               Контакты
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <button className="navbar-logo">
                        <Bscard />
                    </button>
                    <button className="navbar-btn">Войти</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar