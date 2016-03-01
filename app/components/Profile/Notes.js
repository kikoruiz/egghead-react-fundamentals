var React = require('react');
var AddNote = require('./Notes/AddNote');
var NotesList = require('./Notes/NotesList');

var Notes = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
  },

  render: function() {
    return (
      <div>
        <h2>Notes</h2>
        <AddNote username={this.props.username} addNote={this.props.addNote} />
        <NotesList notes={this.props.notes} />
      </div>
    );
  }
});

module.exports = Notes;
