import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

import {Provider} from 'react-redux';
import store from './store';

const Root = () => <React.StrictMode><Provider store={store}><App/></Provider></React.StrictMode>;

ReactDOM.render(<Root/>, document.getElementById('root'));
