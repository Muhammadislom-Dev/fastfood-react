import HomeContent from "../../components/HomeContent/HomeContent"
import { Switch, Route } from "react-router-dom"


const Home = () =>{
    return(
        <div className="home">
            <div className="container">
                <Switch>
                
                <Route path="/:dishtype">
                    <HomeContent />
                </Route>
                <Route path="/" exact>
                   <HomeContent />
                </Route>
                  </Switch>
            </div>
        </div>
    )
}
export default Home