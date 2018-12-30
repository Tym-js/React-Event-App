import React from "react";
import EventListItem from "./EventListItem.jsx";

class EventList extends React.Component {
  render() {
    return (
      <div>
        <h1>EventList</h1>
        <EventListItem />
        <EventListItem />
        <EventListItem />
      </div>
    );
  }
}

export default EventList;
