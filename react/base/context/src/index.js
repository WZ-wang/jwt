import React from "react"
import ReactDom from "react-dom"
import Counter from "./commponts/Counter"
import {Provider} from "react-redux"
import store from "./store"
import {BrowserRouter as Router} from "react-router-dom"
ReactDom.render(<Router><Provider store={store}><Counter></Counter></Provider></Router>,document.getElementById("app"))