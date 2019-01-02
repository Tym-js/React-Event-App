import React from "react"
import { Container } from "semantic-ui-react"
import { Route, Switch } from "react-router-dom"
import NavBar from "../../features/nav/Navbar/NavBar.jsx"
import EventDashboard from "../../features/event/EventDashboard/EventDashboard.jsx"
import EventForm from "../../features/event/EventForm/EventForm.jsx"
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage.jsx"
import SettingsDashboard from "../../features/user/SettingsDashboard/SettingsDashboard.jsx"
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage.jsx"
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard.jsx"
import HomePage from "../../features/home/HomePage/HomePage.jsx"

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/events" component={EventDashboard} />
                  <Route path="/event/:id" component={EventDetailedPage} />
                  <Route path="/manage/:id" component={EventForm} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route path="/createEvent" component={EventForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    )
  }
}

export default App
