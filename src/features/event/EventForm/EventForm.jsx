import React from "react"
import { connect } from "react-redux"
import { reduxForm, Field } from "redux-form"
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate"
import cuid from "cuid"
import { createEvent, updateEvent } from "../eventActions.jsx"
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react"
import TextInput from "../../../app/common/form/TextInput.jsx"
import TextArea from "../../../app/common/form/TextArea.jsx"
import SelectInput from "../../../app/common/form/SelectInput.jsx"
import DateInput from "../../../app/common/form/DateInput.jsx"
import PlaceInput from "../../../app/common/form/PlaceInput.jsx"

const mapStateToProps = (state, ownProps) => {
  const eventId = ownProps.match.params.id
  let event = {}

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0]
  }
  return {
    initialValues: event
  }
}

const actions = {
  createEvent,
  updateEvent
}

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
]

const validate = combineValidators({
  title: isRequired({ message: "The event title is Required" }),
  category: isRequired({ message: "Please provide a category" }),
  description: composeValidators(
    isRequired({ message: "Please enter a description" }),
    hasLengthGreaterThan(4)({
      message: "Description needs to be at least 5 characters"
    })
  )(),
  city: isRequired("city"),
  venue: isRequired("venue")
})

class EventForm extends React.Component {
  onFormSubmit = value => {
    console.log(value)
    if (this.props.initialValues.id) {
      this.props.updateEvent(value)
      this.props.history.goBack()
    } else {
      const newEvent = {
        ...value,
        id: cuid(),
        hostPhotoURL: "/assets/user.png",
        hostedBy: "Bob"
      }
      this.props.createEvent(newEvent)
      this.props.history.push("/events")
    }
  }

  render() {
    const { invalid, pristine, submitting } = this.props
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Event Details" />
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="Give your event a name"
              />
              <Field
                name="category"
                type="text"
                options={category}
                component={SelectInput}
                placeholder="What is your event about"
              />
              <Field
                name="description"
                type="text"
                component={TextArea}
                rows={3}
                placeholder="Tell us about your event"
              />
              <Header sub color="teal" content="Event Location Details" />
              <Field
                name="city"
                type="text"
                component={PlaceInput}
                options={{ types: ["(cities)"] }}
                placeholder="Event City"
              />
              <Field
                name="venue"
                type="text"
                component={TextInput}
                placeholder="Event Venue"
              />
              <Field
                name="date"
                type="text"
                component={DateInput}
                dateFormat="YYYY-MM-DD HH:mm"
                timeFormat="HH:mm"
                showTimeSelect
                placeholder="Date and time of event"
              />
              <Button
                positive
                disabled={invalid || pristine || submitting}
                type="submit"
              >
                Submit
              </Button>
              <Button type="button" onClick={this.props.history.goBack}>
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(
  mapStateToProps,
  actions
)(
  reduxForm({ form: "eventForm", enableReinitialize: true, validate })(
    EventForm
  )
)
