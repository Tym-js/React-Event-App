import React from "react"
import { connect } from "react-redux"
import { Grid } from "semantic-ui-react"
import EventDetailedChat from "./EventDetailedChat.jsx"
import EventDetailedHeader from "./EventDetailedHeader.jsx"
import EventDetailedSidebar from "./EventDetailedSidebar.jsx"
import EventDetailedInfo from "./EventDetailedInfo.jsx"

const EventDetailedPage = ({ event }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  )
}

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id

  let event = {}

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0]
  }

  return {
    event
  }
}

export default connect(mapStateToProps)(EventDetailedPage)
