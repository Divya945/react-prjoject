import React, { Component } from "react";
import "./style.css";
import Person from "./Component/Component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>JobTitle</th>
            <th>Salary</th>
          </tr>
        </table>
        <Person name="First" />
        <Person name="Second">"Im Middle one"</Person>
        <Person name="Third" />
      </div>
    );
  }
}
export default App;
