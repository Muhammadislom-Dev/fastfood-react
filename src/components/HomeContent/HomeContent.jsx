import './HomeContent.css'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import foods from '../../assets/data/food'

import Foodcard from '../Foodcard/Foodcard'
import {Context} from '../../context/orderFoods'

const HomeContent = () =>{
    const  {dishtype} = useParams();
    const { orderFoods, setOrderFoods} = useContext(Context)
    return(
        <div className="homecontent">
            <div className="container">
            {
                     foods.filter((food)=>{ 
                         if(dishtype){
                             return food.type===dishtype;
                         }
                         return food.type === "hot-dishes"
                     }).map((food)=>(
                         <Foodcard img={food.img} key={food.id}
                         title={food.title} price={food.price} 
                         available={food.available}  
                          onClick={(e) => 
                            {
                                const foundFood = foods.find(
                                  (ovqat) => ovqat.id === food.id
                                );
                                foundFood.count = foundFood.count ? 
                                foundFood.count + 1 : 1;
                                const uniqueArr = [
                                  ...new Set([...orderFoods,foundFood])
                                ]
                                setOrderFoods(uniqueArr)
                            } } 
                            /> 
                     ))
                 }
            </div>
        </div>
    )
}
export default HomeContent