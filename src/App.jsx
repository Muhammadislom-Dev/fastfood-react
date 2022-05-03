import './App.css';
import Navbar from './components/Navbar/Navbar';
import SwiperBox from './components/Swiper/Swiper';
import Sidebar from './components/Sidebar/Sidebar'
import Home from './Page/Home/Home';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
        <Navbar />
        <SwiperBox />
        <Sidebar />
        <Home />
         <Footer />
    </div>
  );
}

export default App;
