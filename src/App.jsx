import './App.css';
import Homepage from './Page/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar'
import {Route, Switch} from 'react-router-dom'
import Aboutpage from './Page/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="App">
         <Navbar />
        <Switch>
           <Route path="/about">
              <Aboutpage />
           </Route>
           <Route path='/' >
              <Homepage />
           </Route>
        </Switch>
        <Footer />

    </div>
  );
}

export default App;
