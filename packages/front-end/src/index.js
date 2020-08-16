import React from 'react'
import {render} from 'react-dom'
import {Provider} from "react-redux";
import {App} from "./app";
import {store} from "./store";
import Route from "react-router-dom/es/Route";

render(
    (
        <Provider store={store}>
            <Route path="/" component={App} />
        </Provider>
    ),
    document.getElementById('root')
)