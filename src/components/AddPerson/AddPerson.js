import React from "react";

import classes from "./AddPerson.module.css";

const AddPerson = props => (
  <div className={classes.AddPerson}>
    <button className={classes.Button} onClick={props.personAdded}>
      Add Person
    </button>
  </div>
);

export default AddPerson;
