import React, { useState } from "react";

function Room() {
  const [isLit, setLit] = useState(false);
  let [age, setAge] = useState(45);
  //   const state = useState(true);
  //   console.log("state =", state);
  //   function updatelight() {
  //     console.log("button is clicked");
  //     setLit(!isLit);
  //   }

  //   function increaseAge() {
  //     console.log("Increase Age button is clicked");
  //     setAge(++age);
  //   }

  return (
    <div>
      This is room {isLit ? "Lit" : "dark"}
      <br />
      Age: {age}
      <button
        onClick={() => {
          //   console.log("age increasing");
          setAge(++age);
        }}
      >
        Age is increasing
      </button>
      <br />
      <button
        onClick={() => {
          console.log("light is blinking");
          setLit(!isLit);
        }}
      >
        Toggle Light
      </button>
    </div>
  );
}

export default Room;
