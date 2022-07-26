import logo from "./logo.svg";
import "./App.css";
import PersonCard from "./components/PersonCard";
import { useState } from "react";

function App() {
  const [state, setState] = useState(20);

  // const person = {
  //   firstName: "Jane",
  //   lastName: "Doe",
  //   age: 35,
  //   hairColor: "Black",
  // };

  const peopleArr = [
    {
      firstName: "Jane",
      lastName: "Doe",
      age: 35,
      hairColor: "Black",
    },
    {
      firstName: "John",
      lastName: "Smith",
      age: 88,
      hairColor: "Silver",
    },
    {
      firstName: "Millard",
      lastName: "Fillmore",
      age: 50,
      hairColor: "Brown",
    },
    {
      firstName: "Maria",
      lastName: "Smith",
      age: 62,
      hairColor: "Purple",
    },
  ];

  return (
    <div className="App">
      <h1>Hello There Sunshine!</h1>

      {/* accessing Values from person object (one person)*/}
      {/* <PersonCard person={person} number={state} /> */}

      {/* accessing Values from multi person object in array peopleArr.map */}
      {peopleArr.map((person, index) => {
        return (
          <PersonCard
            key={index}
            firstName={person.firstName}
            lastName={person.lastName}
            age={person.age}
            hairColor={person.hairColor}
          />
        );
      })}
    </div>
  );
}

export default App;
