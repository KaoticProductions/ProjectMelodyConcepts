import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components'
import appReducer from './reducers'


const finalCreateStore =
    (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)

const store = finalCreateStore(appReducer)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
)
