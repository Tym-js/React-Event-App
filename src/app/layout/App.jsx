import React from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/nav/Navbar/NavBar.jsx";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <EventDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
