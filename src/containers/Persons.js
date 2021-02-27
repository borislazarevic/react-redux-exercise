import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import * as ActionTypes from "../constants/constants";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.addPerson} />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.deletePerson(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    persons: state.persons,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPerson: () => dispatch({ type: ActionTypes.ADD_PERSON }),
    deletePerson: id =>
      dispatch({ type: ActionTypes.DELETE_PERSON, personID: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
