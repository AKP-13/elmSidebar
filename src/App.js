import { Switch, Route, Redirect } from "react-router-dom";
import {
    NavBar,
    TopBar,
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
            <div id="content">
                <TopBar />
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/overview" />
                    </Route>
                    <Route path="/overview" component={Overview} />
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
        </div>
    );
}

export default App;
