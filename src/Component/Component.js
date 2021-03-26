import React from "react";
const person = props => {
  return (
    <div>
      <p>
        This is {props.name} component. {props.children}
      </p>
    </div>
  );
};

export default person;
