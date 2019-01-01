import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import "./index.css"
import "semantic-ui-css/semantic.min.css"
import App from "./app/layout/App.jsx"

const rootEl = document.getElementById("root")

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootEl
)
