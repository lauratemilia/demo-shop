import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Putem da aliasuri cand importam.
import { BrowserRouter as Router} from 'react-router-dom';
import {Provider} from "react-redux"
import store from "./redux/store"
import { CookiesProvider } from 'react-cookie';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // Pentru a avea acces la Router in intreaga aplicatie, App devine copilul lui Router.
<CookiesProvider>
    <Provider store = {store}>
        <Router>
            <App />
        </Router>
    </Provider>
</CookiesProvider>

)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
