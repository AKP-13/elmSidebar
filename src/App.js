import { Switch, Route } from "react-router-dom";
import {
    NavBar,
    Overview,
    Asda,
    BP,
    Morrisons,
    Tesco,
    Sainsburys,
    Waitrose,
    AddDataConnection,
    Settings,
} from "./Components";
import "./App.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route exact path="/overview" component={Overview} />
                <Route path="/asda" component={Asda} />
                <Route path="/bp" component={BP} />
                <Route path="/morrisons" component={Morrisons} />
                <Route path="/tesco" component={Tesco} />
                <Route path="/sainsburys" component={Sainsburys} />
                <Route path="/waitrose" component={Waitrose} />
                <Route
                    path="/addDataConnection"
                    component={AddDataConnection}
                />
                <Route path="/settings" component={Settings} />
            </Switch>
        </div>
    );
}

export default App;
