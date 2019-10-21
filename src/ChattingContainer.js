import React, {Component} from "react";
import Conversation from "./Conversation";
import TextArea from "./TextArea";
import Header from "./Header";

class ChattingContainer extends Component {

  state = {
      "messages": []
  };

  connection = new WebSocket("wss://wssproxy.herokuapp.com");

  componentDidMount () {

      this.connection.onmessage = (message) => {

          const msgData = JSON.parse(message.data);
          this.setState({"messages": [
              ...msgData,
              ...this.state.messages // Add all messages to state
          ]});

      };

  }

  sendMessage = (message) => {

      const data = {"from": this.props.from, message}; /* JavaScript object*/
      this.connection.send(JSON.stringify(data)); // JS obj becomes a string

  };

  render () {

      return (
     <>
       <Header setUserName={this.setUserName}/>
       <TextArea sendMessage={this.sendMessage}/>
       <Conversation messages={this.state.messages}/>
     </>
      );

  }

}

export default ChattingContainer;
