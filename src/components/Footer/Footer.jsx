import './Footer.css'
import { FaTelegram, FaInstagram, FaYoutube } from 'react-icons/fa';


const Footer = () =>{
    return(
        <div className="footer">
            <div className="container">
                <div className="footer-page">
                    <ul className="footer-list">
                        <a href="#" className="footer-link">SFood</a>
                        <li className="footer-item">
                            <a href="#" className="footer-links">Главная</a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-links">Филиалы</a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-links">О нас</a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-links">Контакты</a>
                        </li>
                    </ul>
                    <ul className="footer-list">
                        <p>Присоединяйтесь к нам</p>
                        <li className="footer-items">
                            <span>
                                <a href="#" className='footer-title'>
                                    <FaTelegram />
                                </a>
                            </span>
                            <span>
                                <a href="#" className='footer-title'>
                                    <FaInstagram />
                                </a>
                            </span>
                            <span>
                                <a href="#" className='footer-title'>
                                    <FaYoutube />
                                </a>
                            </span>
                        </li>
                    </ul>
                    <ul className="footer-list">
                        <p>Заказывайте по номеру</p>
                        <li className="footer-item">
                            <a href="#" className="footer-links">+998 90 169 35 27</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-box">
                    <h4>© 2021–2022, ООО «MuhammadislomDev», официальный сайт</h4>
                    <a href="https://t.me/Xojimuhammedov" className="footer__link">Developed by Muhammadislom </a>
                </div>
            </div>
        </div>
    )
}
export default Footer