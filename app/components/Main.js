var React = require('react');
var SearchGitHub = require('./SearchGitHub');

var Main = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  render: function() {
    return (
      <div>
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar-collapse' aria-expanded='false'>
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
              </button>
              <a className='navbar-brand' href='#'>egghead: React Fundamentals</a>
            </div>
            <div className='collapse navbar-collapse' id='navbar-collapse'>
              <SearchGitHub />
            </div>
          </div>
        </nav>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = Main;
