var React = require('react');
var Main = require('../app/components/Main');
var Home = require('../app/components/Home');
var Profile = require('../app/components/Profile');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
  <Route path='/' component={Main}>
    <Route path='profile/:username' component={Profile} />
    <IndexRoute component={Home} />
  </Route>
);
