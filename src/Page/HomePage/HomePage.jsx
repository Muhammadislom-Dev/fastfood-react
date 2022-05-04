import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navbar/Navbar"
import SwiperFood from "../../components/Swiper/Swiper"
import Sidebar from "../../components/Sidebar/Sidebar"
import Home from "../Home/Home"


const Homepage = () =>{
    return(
        <div className="homepage">      
            <Navbar />
            <SwiperFood />
            <Sidebar />
            <Home />
            <Footer />      
        </div>
    )
}
export default Homepage