import './App.css';
import './vendors/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import Add from "./components/Add";
import Edit from "./components/Edit";
import List from "./components/List";
import user from "./reducers/user.js";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({user})

const store = createStore(reducer,
                          window.__REDUX_DEVTOOLS_EXTENSION__
                          && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="container ps-2 pe-2">
                    <Route path={["/", "/list"]} exact={true}>
                        <List/>
                    </Route>
                    <Route path="/add" exact={true}>
                        <Add/>
                    </Route>
                    <Route path="/edit" exact={true}>
                        <Edit/>
                    </Route>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
