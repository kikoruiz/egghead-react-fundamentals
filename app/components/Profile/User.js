var React = require('react');

var User = React.createClass({
  propTypes: {
    username: React.PropTypes.string,
    bio: React.PropTypes.object
  },

  render: function() {
    var bio = this.props.bio;

    return (
      <div>
        <h2>User</h2>
        <ul className='list-group'>
          {bio.avatar_url &&
            <li className='list-group-item thumbnail'>
              <img src={bio.avatar_url} />
            </li>
          }
          {bio.name &&
            <li className='list-group-item'>
              <strong>Name:</strong> {bio.name}
            </li>
          }
          {bio.login &&
            <li className='list-group-item'>
              <strong>Username:</strong> {bio.login}
            </li>
          }
          {bio.email &&
            <li className='list-group-item'>
              <strong>Email:</strong> {bio.email}
            </li>
          }
          {bio.location &&
            <li className='list-group-item'>
              <strong>Location:</strong> {bio.location}
            </li>
          }
          {bio.company &&
            <li className='list-group-item'>
              <strong>Company:</strong> {bio.company}
            </li>
          }
          {(bio.followers !== undefined) &&
            <li className='list-group-item'>
              <strong>Followers:</strong> {bio.followers}
            </li>
          }
          {(bio.following !== undefined) &&
            <li className='list-group-item'>
              <strong>Following:</strong> {bio.following}
            </li>
          }
          {(bio.public_repos !== undefined) &&
            <li className='list-group-item'>
              <strong>Public repos:</strong> {bio.public_repos}
            </li>
          }
          {bio.blog &&
            <li className='list-group-item'>
              <strong>Blog:</strong> {bio.blog}
            </li>
          }
        </ul>
      </div>);
  }
});

module.exports = User;
