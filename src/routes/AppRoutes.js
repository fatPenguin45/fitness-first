import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutScreen from "../screens/AboutScreen";
import HomeScreen from "../screens/HomeScreen";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomeScreen/>
                </Route>
                <Route path="/about">
                    <AboutScreen/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default AppRoutes;