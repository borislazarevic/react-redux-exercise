import React, { Component } from "react";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

class Persons extends Component {
  state = {
    persons: [],
  };

  personAddedHandler = () => {
    const textArray = [
      "Boris",
      "Natasa",
      "Ognjen",
      "Marko",
      "Nemanja",
      "Zeljka",
      "Srdjan",
    ];
    const randomNumber = Math.floor(Math.random() * textArray.length);
    const randomName = textArray[randomNumber];
    const newPerson = {
      id: Math.random(),
      name: randomName,
      age: Math.floor(Math.random() * 40),
    };
    this.setState(prevState => {
      return { persons: prevState.persons.concat(newPerson) };
    });
  };

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
        <AddPerson personAdded={this.personAddedHandler} />
        {this.state.persons.map(person => (
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

export default Persons;
