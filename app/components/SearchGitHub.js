var React = require('react');
var Router = require('react-router');

var SearchGitHub = React.createClass({
  mixins: [Router.History],

  handleSubmit: function() {
    var username = this.usernameRef.value;
    this.usernameRef.value = '';
    this.history.pushState(null, '/profile/' + username);
  },

  getRef: function(ref) {
    this.usernameRef = ref;
  },

  render: function() {
    return (
        <form className='navbar-form navbar-left' role='search' onSubmit={this.handleSubmit}>
          <div className='input-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Search GitHub'
              ref={this.getRef}
            />
            <span className='input-group-btn'>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </span>
          </div>
        </form>
    );
  }
});

module.exports = SearchGitHub;
