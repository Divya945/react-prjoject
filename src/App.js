import React, { Component } from 'react';
import './style.css';
import Person from './Component/Component';
import Employee from './Component/Employee';
function employeAttnd(emp) {
  return emp.empName + ' ' + emp.empJob;
}

function getEmpdetails(emp) {
  if (emp) {
    return <p>Hi, {employeAttnd(emp)}.. !</p>;
  } else {
    return <p>U R Outside Emp</p>;
  }
}
// function ImageComp(user){
//   return (
//     <div className= "ImageComp">
//       <div>  {comment.text}</div>
//       <div>
//         <img src = {user.author.avathorUrl} />
//     </div>
//       <div>  {user.author.name}</div>
//     </div>
//   );
// }
function Avatar(props) {
  return (
    <img
      className="Avatar"
      src={props.users.avathorUrl}
      alt={props.users.name}
    />
  );
}
function UserInfo(props) {
  return (
    <div>
      {' '}
      <Avatar users={props.users} />
      <p>{props.users.name}</p>
    </div>
  );
}
function ImageComp(props) {
  return (
    <div className="ImageComp">
      <UserInfo users={props.author} /> {comment.text}
    </div>
  );
}

const emp = {
  empName: 'InsideEmp',
  empJob: 'SF'
};
const comment = {
  text: ' r u enjoying react !!',
  author: {
    name: 'nameof Image',
    avathorUrl: 'https://placekitten.com/g/64/64'
  }
};
class App extends Component {
  state = {
    person: [{ name: 'First' }, { name: 'Second' }, { name: 'Third' }]
  };
  listOfEmp = {
    employee: [{ id: 101 }, { name: 'User1' }, { job: 'SF' }, { salary: 1000 }]
  };
  constructor(props) {
    super(props);
    this.empRegForm = this.empRegForm.bind(this);
  }
  empRegForm() {
    //e.preventDefault();
    console.log('empRegForm');
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.empRegForm}>Employee Register Form </button>
        <table className="tableStyle">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>JobTitle</th>
            <th>Salary</th>
          </tr>
          <tr>
            <td>
              {' '}
              <Employee id={this.listOfEmp.employee[0].id} />
            </td>
            <td>
              {' '}
              <Employee name={this.listOfEmp.employee[1].name} />
            </td>
            <td>
              <Employee job={this.listOfEmp.employee[2].job} />
            </td>
            <td>
              {' '}
              <Employee salary={this.listOfEmp.employee[3].salary} />
            </td>
          </tr>
        </table>
        <Person name={this.state.person[0].name} />
        <Person name={this.state.person[1].name}>"Im Middle one"</Person>
        <Person name={this.state.person[2].name} />
        <Person name="Forth" />
        <p> {employeAttnd(emp)}</p>
        <ImageComp author={comment.author} text={comment.text} />
      </div>
    );
  }
}
export default App;
