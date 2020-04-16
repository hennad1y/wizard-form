import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

import {Provider} from 'react-redux';
import store from './store';

import "materialize-css/dist/js/materialize";
import "materialize-css/dist/css/materialize.min.css";

const Root = () => (
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

ReactDOM.render(<Root/>, document.getElementById('root'));
