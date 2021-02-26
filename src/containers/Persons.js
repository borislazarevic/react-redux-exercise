import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.AddPerson} />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.DeletePerson(person.id)}
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
    AddPerson: () => dispatch({ type: "ADD_PERSON" }),
    DeletePerson: id => dispatch({ type: "DELETE_PERSON", personID: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
