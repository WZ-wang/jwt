import * as React from "react"
import * as ReactDom from "react-dom"
import Counter from "./components/Counter"
import store from "./store"
import {Provider} from "react-redux"

ReactDom.render(<Provider store = {store}>
    <Counter></Counter>
    </Provider>,document.getElementById("app"))