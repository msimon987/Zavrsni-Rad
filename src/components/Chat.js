import Messages from './Messages';
import React from 'react';
import Input from "./Input";
import "./Chat.css";

function randomColor() {
 return '#' + Math.floor(Math.random() * 0xFFFFFA).toString(16);
}

function getDate() {
  const today = new Date();
  const date = " (" + today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear() + ' ' + today.getHours() + ":" + today.getMinutes() + ")" + ' ';
  return date
}

class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.drone = new window.Scaledrone("Jix6dCZZ3mP2TLjW", {
      data: this.state.member
    });
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = {...this.state.member};
      member.id = this.drone.clientId;
      this.setState({member});
    });
 // ---
    const room = this.drone.subscribe("observable-room");
 // ---
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({member, text: data, time:getDate()});
      this.setState({messages});
    });
  }

  state = {
    messages: [],
    member: {
      username: this.props.username,
      color: randomColor()
    }
  }
  onSendMessage = (message) => {
    // quick fix for sending empty message
    if (message.length===0) return;
    this.drone.publish({
      room: "observable-room",
      message
    });
  }

  render(){
    return (
      <div className='Chat'>
        
      <Messages
        messages={this.state.messages}
        currentMember={this.state.member}
        time={this.state.time}
      />
      <Input onSendMessage={this.onSendMessage}/>
    </div>
    );
  }
  


}

export default Chat;
