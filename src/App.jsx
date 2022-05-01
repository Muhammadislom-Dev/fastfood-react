import './App.css';
import Navbar from './components/Navbar/Navbar';
import SwiperBox from './components/Swiper/Swiper';
import Sidebar from './components/Sidebar/Sidebar'


function App() {
  return (
    <div className="App">
        <Navbar />
        <SwiperBox />
        <Sidebar />
    </div>
  );
}

export default App;
