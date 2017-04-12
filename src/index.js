import React from 'react'
import ReactDOM from 'react-dom'
import Game from './components/game'
import './reset.css'
import './index.css'
import store from './store'
import {Provider} from 'react-redux'
ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);
