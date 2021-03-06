import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {

  //set state of calculation as an object with a title and content
  const [calculation, setCalculation] = useState({
    title: "",
    content: ""
  });

  //whenever the user changes the text in the input
  function handleChange(event) {
    //deconstructing object into individual components
    const { name, value } = event.target;

    setCalculation(prevCalculation => {
      return {
        ...prevCalculation,
        [name]: value //take the value of the changed input and return it with previous calculations
      };
    });
  }

  function handleKeyPress (event) {
    if(event.key === 'Enter'){
      props.onAdd(calculation);

      setCalculation({
        title: "",
      });

      event.preventDefault();
    }
  }

  //when the user submits the calculation 
  function submitCalculation(event) {
    //function from App.jsx
    props.onAdd(calculation);
    //after the user finished adding the calculation reset the text to empty
    setCalculation({
      title: "",
    });
    //prevent the form from redirecting
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-calculation">
          <input
            onKeyPress={handleKeyPress}
            name="title"
            onChange={handleChange}
            value={calculation.title}
            placeholder="Input Calculation Ex. (2 + 2)"
          />
          <Fab onClick={submitCalculation}>
            =
          </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
