import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MessageForm extends Component {
  render() {
    return (
      <div>
        <h4>Messages</h4>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" className="form-control" ref="text" placeholder="Enter a message" />
        </form>
      </div>
    )
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.emit('messageAdded', {
      timeStamp: Date.now(),
      text: this.refs.text.value.trim(),
      user: this.props.user.name
    });
    this.refs.text.value = '';
  }
}

export default MessageForm
