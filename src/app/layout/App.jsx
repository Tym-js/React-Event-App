import React from "react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Re-vents</h2>
        <EventDashboard />
      </div>
    );
  }
}

export default App;
