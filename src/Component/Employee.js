import React from 'react';
const employee = props => {
  return (
    <div>
      <p> {props.id} </p>
      <p> {props.name} </p>
      <p> {props.job} </p>
      <p> {props.salary} </p>
    </div>
  );
};

export default employee;
