import {Route, Switch} from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetups from "./pages/NewMeetups";
import Favorites from "./pages/Favorites";

function App() {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact>
                    <AllMeetups/>
                </Route>
                <Route path={'/new-meetups'}>
                    <NewMeetups/>
                </Route>
                <Route path={'/favorites'}>
                    <Favorites/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;
