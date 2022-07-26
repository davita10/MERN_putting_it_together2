// importing the useState hook (function)
import { useState } from "react";

const PersonCard = (props) => {
  // destructuring
  const { person } = props;

  //   getters and setters
  const [state, setState] = useState(20);
  //   'creates a piece of State' w (initial value)
  // useState hook (function) helps us to change state

  return (
    <div className="border">
      <h1>First Name: {person.firstName}</h1>
      <h1>Last Name: {person.lastName}</h1>
      <h2>Age: {state}</h2>
      <h2>Hair Color: {person.hairColor}</h2>
      <button onClick={() => setState(state + 1)}>
        Birthday Button for {person.firstName}
      </button>
    </div>
  );
};

export default PersonCard;
// sends PersonCard to be rendered in App.js import
