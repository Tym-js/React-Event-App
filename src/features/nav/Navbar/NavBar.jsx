import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

class NavBar extends React.Component {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            <img src="assets/logo.png" alt="logo" />
            Re-vents
          </Menu.Item>
          <Menu.Item>Events</Menu.Item>
          <Menu.Item>
            <Button floated="right" positive inverted>
              Create Event
            </Button>
          </Menu.Item>
          <Menu.Item position="right">
            <Button basic inverted>
              Login
            </Button>
            <Button basic inverted>
              Sign up
            </Button>
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
