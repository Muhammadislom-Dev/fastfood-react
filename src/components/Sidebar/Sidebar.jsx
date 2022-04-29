import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () =>{
    return(
        <div className="sidebar">
            <div className="container">
                <div className="ul sidebar-list">
                    <li className="sidebar-item">
                        <Link className='sidebar-link'>
                          Lavash
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className='sidebar-link'>
                          Desert
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className='sidebar-link'>
                          Set
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className='sidebar-link'>
                          Xaggi
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className='sidebar-link'>
                          Burger
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className='sidebar-link'>
                           Pizza
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className='sidebar-link'>
                          Sendvich
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className='sidebar-link'>
                          Donar
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className='sidebar-link'>
                           Xot-Dog
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className='sidebar-link'>
                          Free
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className='sidebar-link'>
                          Drink
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className='sidebar-link'>
                          Salad
                        </Link>
                    </li>
                </div>
            </div>
        </div>
    )
}
export default Sidebar