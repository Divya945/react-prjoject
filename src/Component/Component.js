import React from "react";
const headName = (props) => {
return (
  <div>
    <p>This is {props.name} component.. And the type is {props.type} {props.children}</p>
    <p></p>
  </div>
)
};

export default headName;