import './Navbar.css'
import Bscard from '../Lib/Bscard'
import { Link } from 'react-router-dom'
import { RiDeleteBinLine } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";

import Modal from '../Modal/Modal'

import { Context } from '../../context/orderFoods'
import { useContext, useState } from 'react'

const Navbar = () =>{
    let [count, setCount] = useState(1);
    const {orderFoods,setOrderFoods} = useContext(Context);
    const [loginModal,setLoginModal] = useState(false)
    const [korzinkaModal, setKorzinkaModal]=useState(false);
    const [deleteKorzinkaModal,setDeleteKorzinkaModal]=useState(false);

    
    const handleAddClass = (evt) =>{
        const links = document.querySelectorAll('.navbar__link-active');
        links.forEach(link =>{
        link.classList.remove('navbar__link-active')
        })
        evt.currentTarget.classList.add('navbar__link-active')
        }

        function incrementCount() {
            count = count + 1;
            setCount(count);
            }
            function decrementCount() {
            if(count<=0){ 
                count=1
             } count=count - 1; 
             setCount(count); 
            } 
        
            function openKorzinkaModal(){
                setKorzinkaModal(!korzinkaModal);
         }
            function openDeleteKorzinkaModal(){ 
             setDeleteKorzinkaModal(!deleteKorzinkaModal)
            }
        
            function openLoginModal(){
                setLoginModal(!loginModal);
            }
            const [registerModal,setRegisterModal] = useState(false);
            function openRegisterModal(){
                setRegisterModal(!registerModal)
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
                            <Link onClick={handleAddClass}  className='navbar-link' to="/about">
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
                    <button className="navbar-logo"  onClick={()=>openKorzinkaModal()}>
                        <Bscard />
                        {orderFoods.length > 0 && (
                        <p>{orderFoods.map((food)=>
                        (<span className='navbar-span'>{food.count}</span>))}</p>)}
                    </button>
                    <button className="navbar-btn">Войти</button>
                </div>
            </div>

            <Modal className="modal" show={korzinkaModal}  >
            <button className="close-btn" onClick={()=>setKorzinkaModal()}>
                <IoCloseOutline />
            </button>
            <div className="modal-box">
                {orderFoods.length > 0 &&(
                <ul className="modal-list">
                    {orderFoods.map((food)=>(
                    <li className="modal-item">
                        <img className="modal-img" src={food.img} />
                        <p className="modal-title">
                            {food.title}
                        </p>
                        <div className="modal-blok">
                            <button className="modal-minus" onClick={decrementCount}>
                                -
                            </button>
                            <span className="modal-count">
                                {food.count}
                            </span>
                            <button className="modal-plus" onClick={incrementCount}>
                                +
                            </button>
                        </div>
                        <p className="modal-price">
                            {(food.price * food.count).toFixed(1)} сум
                        </p>
                        <button className="modal-btn" onClick={()=>{
                            setOrderFoods(orderFoods.filter
                            (ovqat => ovqat.id !== food.id))
                            }}>
                            <RiDeleteBinLine />
                        </button>
                    </li>
                    ))}
                </ul>
                )}
            </div>
        </Modal>
        </div>

        
    )
}

export default Navbar