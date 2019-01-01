import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import SettingsNav from "./SettingsNav.jsx";
import BasicPage from "./BasicPage.jsx";
import AboutPage from "./AbountPage.jsx";
import PhotosPage from "./PhotosPage.jsx";
import AccountPage from "./AccountPage.jsx";

const SettingsDashboard = () => (
  <Grid>
    <Grid.Column width={12}>
      <Switch>
        <Redirect exact from="/settings" to="/settings/basic" />
        <Route path="/settings/basic" component={BasicPage} />
        <Route path="/settings/about" component={AboutPage} />
        <Route path="/settings/photos" component={PhotosPage} />
        <Route path="/settings/account" component={AccountPage} />
      </Switch>
    </Grid.Column>
    <SettingsNav />
  </Grid>
);

export default SettingsDashboard;
