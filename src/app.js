import React from "react";
import NavBar from "./components/nav-bar/nav-bar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contacts from "./pages/contacts";
import {RoutesEnum} from "./constants";

export default function App() {
    return (
        <>
            <Router>
                <NavBar/>
                <Switch>
                    <Route path={RoutesEnum.ABOUT}>
                        <About/>
                    </Route>
                    <Route path={RoutesEnum.PROJECTS}>
                        <Projects/>
                    </Route>
                    <Route path={RoutesEnum.CONTACTS}>
                        <Contacts/>
                    </Route>
                    <Route path={RoutesEnum.HOME}>
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </>
    );
}
