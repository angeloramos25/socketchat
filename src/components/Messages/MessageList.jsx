import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    return (
      <div className="well">
        {
          this.props.messages.map((message, i) => {
            return <Message message={message} key={i} />
          })
        }
      </div>
    )
  }
}

export default MessageList