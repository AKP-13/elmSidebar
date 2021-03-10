import { Switch, Route, Redirect } from "react-router-dom";
import {
    NavBar,
    DynamicComponent,
    TopBar,
    Overview,
    AddDataConnection,
    Settings,
} from "./Components";
import "./App.css";

import { arrayOfClients } from "./data/clients";

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

                    {/* CLIENT SHOP ROUTES */}
                    {arrayOfClients.map((item, idx) => {
                        return (
                            <Route
                                key={idx}
                                path={`/${item.toLowerCase()}`}
                                component={() => (
                                    <DynamicComponent name={item} />
                                )}
                            />
                        );
                    })}

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
