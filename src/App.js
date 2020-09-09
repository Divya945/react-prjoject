import React, { Component } from "react";
import "./style.css";
import HeadName from './Component/Component'

class App extends Component {
  render() { 
    return (
    <div className="App">
      <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>  
        <p>Start editing to see some magic happen :)</p>
      <p>Start editing to see some magic happen :)</p>
      <HeadName />
    </div>
    );
  }
}
export default App;
