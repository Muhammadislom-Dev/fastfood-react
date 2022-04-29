import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () =>{
    return(
        <div className="sidebar">
            <div className="container">
                <ul className=" sidebar-list">
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link'>
                          Lavash
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link'>
                          Desert
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link'>
                          Set
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link'>
                          Xaggi
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link'>
                          Burger
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link'>
                           Pizza
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link'>
                          Sendvich
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link'>
                          Donar
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link'>
                           Xot-Dog
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link'>
                          Free
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link'>
                          Grill
                        </NavLink>
                    </li>
                    <li className="sidebar-item">
                        <NavLink className='sidebar-link'>
                           Sauce
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar