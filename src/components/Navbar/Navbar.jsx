import './Navbar.css'
import Bscard from '../Lib/Bscard'
import { Link } from 'react-router-dom'

const Navbar = () =>{

    const handleAddClass = (evt) =>{
        const links = document.querySelectorAll('.sidebar__link-active');
        links.forEach(link =>{
        link.classList.remove('sidebar__link-active')
        })
        evt.currentTarget.classList.add('sidebar__link-active')
        }

    return(
        <div className="navbar">
            <div className="container">
                <div className="navbar-left">
                    <Link className="navbar-links">
                      SFood
                    </Link>
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <Link onClick={handleAddClass}  className='navbar-link' to="/">
                               Главная
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link onClick={handleAddClass} className='navbar-link' to="/home">
                               Филиалы
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link onClick={handleAddClass} className='navbar-link' to="/about">
                               О нас
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link onClick={handleAddClass} className='navbar-link' to="/footer">
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