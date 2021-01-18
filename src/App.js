import React, {Fragment, useEffect} from 'react';
import {BrowserRouter, Route, Switch, useRouteMatch, useHistory, useLocation} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Header} from "./components/Header/Header";
import {AlertState} from "./context/alert/alertState";
import {NoteState} from "./context/Notes/notesState";
import {Weather} from "./pages/Weather/Weather";
import {WeatherState} from "./context/weather/weatherState";
import {AuthState} from "./context/Auth/authState";
import {Auth} from "./pages/Auth/Auth";
import {Logout} from "./components/Logout/Logout";



function App() {

    return(
    <AuthState>
        <AlertState>
            <WeatherState>
                <NoteState>
                    <BrowserRouter>
                        <Header/>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/about" component={About}/>
                                <Route path="/weather" component={Weather}/>
                                <Route path="/auth" component={Auth}/>
                                <Route path="/logout" component={Logout}/>
                            </Switch>
                    </BrowserRouter>
                </NoteState>
            </WeatherState>
        </AlertState>
    </AuthState>
    );
}

export default App;
