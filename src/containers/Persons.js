import React, { Component } from "react";
import { connect } from "react-redux";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
  personDeletedHandler = personId => {
    this.setState(prevState => {
      return {
        persons: prevState.persons.filter(person => person.id !== personId),
      };
    });
  };

  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.AddPerson} />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.personDeletedHandler(person.id)}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
