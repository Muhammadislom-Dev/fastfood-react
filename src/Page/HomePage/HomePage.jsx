import { Switch, Route } from "react-router-dom"
import SwiperFood from "../../components/Swiper/Swiper"
import Sidebar from "../../components/Sidebar/Sidebar"
import HomeContent from '../../components/HomeContent/HomeContent'



const Homepage = () =>{
    return(
        <div className="homepage">      
            <SwiperFood />
            <Sidebar />
            <Switch> 
                <Route path="/:dishtype">
                    <HomeContent />
                </Route>
                <Route path="/" exact>
                   <HomeContent />
                </Route>
            </Switch>      
        </div>
    )
}
export default Homepage