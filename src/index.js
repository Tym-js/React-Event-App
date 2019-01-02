import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import ScrollToTop from "./app/common/ScrollToTop.jsx"
import "./index.css"
import "semantic-ui-css/semantic.min.css"
import App from "./app/layout/App.jsx"
import store from "./app/stores/store.jsx"

const rootEl = document.getElementById("root")

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </Provider>,
  rootEl
)
