var React = require('react');
var User = require('./Profile/User');
var Repos = require('./Profile/Repos');
var Notes = require('./Profile/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var helpers = require('../utils/helpers');

var Profile = React.createClass({
  mixins: [ReactFireMixin],

  propTypes: {
    params: React.PropTypes.object
  },

  getInitialState: function() {
    return {
      repos: [],
      bio: {},
      notes: []
    };
  },

  init: function(username) {
    var childRef = this.ref.child(username);
    this.bindAsArray(childRef, 'notes');

    helpers
      .getGitHubInfo(username)
      .then(function(data) {
        this.setState({
          repos: data.repos,
          bio: data.bio
        });
      }.bind(this));
  },

  componentWillReceiveProps: function(nextProps) {
    this.unbind('notes');
    this.init(nextProps.params.username);
  },

  componentDidMount: function() {
    this.ref = new Firebase('https://react-fundamentals.firebaseio.com/');
    this.init(this.props.params.username);
  },

  componentWillUnmount: function() {
    this.unbind('notes');
  },

  handleAddNote: function(newNote) {
    this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);
  },

  render: function() {
    return (
      <div className='container-fluid'>
        <h1>Profile</h1>
        <div className='row'>
          <div className='col-md-4'>
            <User username={this.props.params.username} bio={this.state.bio} />
          </div>
          <div className='col-md-4'>
            <Repos username={this.props.params.username} repos={this.state.repos} />
          </div>
          <div className='col-md-4'>
            <Notes
              username={this.props.params.username}
              notes={this.state.notes}
              addNote={this.handleAddNote}
            />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Profile;
