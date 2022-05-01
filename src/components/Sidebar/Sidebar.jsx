import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () =>{
    return(
        <div className="sidebar">
            <div className="container">
                <ul className=" sidebar-list">
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link'  to="/" exact>
                          Lavash
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link' to='/desert'>
                          Desert
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link' to="/set">
                          Set
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link' to="/cold-dishes">
                          Xaggi
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link' to="/hot-dishes">
                          Burger
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link' to='/pizza'>
                           Pizza
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link' to="/desert">
                          Sendvich
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link' to="/grill">
                          Donar
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link' to="/soup">
                           Xot-Dog
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link' to="/hot-dishes" >
                          Free
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link' to="/grill">
                          Grill
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link' to="/soup">
                           Sauce
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar