import React from "react"
import { connect } from "react-redux"
import { Grid } from "semantic-ui-react"
import EventList from "../EventList/EventList.jsx"
import { deleteEvent } from "../eventActions.jsx"

const actions = {
  deleteEvent
}

class EventDashboard extends React.Component {
  handleDelete = eventId => () => {
    this.props.deleteEvent(eventId)
  }

  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            deleteEvent={this.handleDelete}
            events={this.props.events}
          />
        </Grid.Column>
        <Grid.Column width={6} />
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  events: state.events
})

export default connect(
  mapStateToProps,
  actions
)(EventDashboard)
