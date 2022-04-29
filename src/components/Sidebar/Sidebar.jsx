import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () =>{
    return(
        <div className="sidebar">
            <div className="container">
                <ul className=" sidebar-list">
                    <li className="sidebar-item">
                        <Link className='sidebar-link'  to="/">
                          Lavash
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className='sidebar-link' to='/desert'>
                          Desert
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className='sidebar-link' to="/set">
                          Set
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className='sidebar-link' to="/cold-dishes">
                          Xaggi
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className='sidebar-link' to="/hot-dishes">
                          Burger
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className='sidebar-link' to='/pizza'>
                           Pizza
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className='sidebar-link' to="/desert">
                          Sendvich
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className='sidebar-link' to="/grill">
                          Donar
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className='sidebar-link' to="/soup">
                           Xot-Dog
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className='sidebar-link' to="/hot-dishes" >
                          Free
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className='sidebar-link' to="/grill">
                          Grill
                        </Link>
                    </li>
                    <li className="sidebar-item">
                        <Link className='sidebar-link' to="/soup">
                           Sauce
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar