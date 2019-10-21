import React, {Component} from "react";
import "./App.css";

import ChattingContainer from "./ChattingContainer";
import Login from "./Login";

class App extends Component {

  state = {
      "from": null
  };

  setUserName = (from) => {

      this.setState({from});

  };

  render () {

      return (
          <div className="App">
              {
                  !(this.state.from || localStorage.getItem("from"))
                      ? <Login setUserName={this.setUserName}/>
                      : <ChattingContainer from={this.state.from}/>
              }
          </div>
      );

  }

}
export default App;

