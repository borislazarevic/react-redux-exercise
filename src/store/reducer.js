const initialState = {
  persons: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PERSON":
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
      return {
        ...state,
        persons: state.persons.concat(newPerson),
      };

    case "DELETE_PERSON":
      return {
        ...state,
        persons: state.persons.filter(person => person.id !== action.personID),
      };
  }
  return state;
};

export default reducer;
