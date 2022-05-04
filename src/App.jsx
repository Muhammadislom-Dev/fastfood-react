import './App.css';
import Homepage from './Page/HomePage/HomePage';
import Navbar from './components/Navbar/Navbar'
import {Route, Switch} from 'react-router-dom'
import Aboutpage from './Page/AboutPage/AboutPage';


function App() {
  return (
    <div className="App">
         <Navbar />
        <Switch>
           <Route path='/' exact>
              <Homepage />
           </Route>
           <Route path="/about">
              <Aboutpage />
           </Route>
        </Switch>
    </div>
  );
}

export default App;
