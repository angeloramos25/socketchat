import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Message extends Component {
  render() {
    const {message} = this.props;
    var formattedTime = this.formatTime(message.timeStamp);
    return (
      <div className="message">
        <span className="badge badge-dark">{message.user}</span>
        {message.text} - {formattedTime}
      </div>
    )
  }
  formatTime(timeStamp) {
    var date = new Date(timeStamp);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (hours < 10) {
      hours = '0' + hours;
    }

    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }
     return hours + ':' + minutes + ':' + seconds;
  }
}

export default Message
