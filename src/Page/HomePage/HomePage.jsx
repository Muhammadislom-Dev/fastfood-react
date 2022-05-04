import Footer from "../../components/Footer/Footer"
import SwiperFood from "../../components/Swiper/Swiper"
import Sidebar from "../../components/Sidebar/Sidebar"
import Home from "../Home/Home"


const Homepage = () =>{
    return(
        <div className="homepage">      
            <SwiperFood />
            <Sidebar />
            <Home />
            <Footer />      
        </div>
    )
}
export default Homepage