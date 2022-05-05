import './App.css';
import Homepage from './Page/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar'
import {Route, Switch} from 'react-router-dom'
import Aboutpage from './Page/AboutPage/AboutPage';
import Footer from './components/Footer/Footer';
import Filialcard from './Page/Filialcard/Filialcard';
import Sublime from './Page/Sublime/Sublime';



function App() {
  return (
    <div className="App">
         <Navbar />
        <Switch>
           <Route path="/about" exact>
              <Aboutpage />
           </Route>
           <Route path="/home" exact>
               <Filialcard />
           </Route>
           <Route path="/filialcard" exact>
               <Sublime />
           </Route>
           <Route path="/footer" exact>
              //
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
