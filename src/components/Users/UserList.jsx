import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class UserList extends Component {
  render() {
    return (
      <div>
        <h4>Users</h4>
        <h6>{this.props.users.length} users connected.</h6>
        <ul className="list-group">
        {
          this.props.users.map((user, i) => {
            return <li className="list-group-item" user={user} key={i}>
              {user.name}
            </li>
          })
        }
        </ul>
      </div>
    )
  }
}

export default UserList
