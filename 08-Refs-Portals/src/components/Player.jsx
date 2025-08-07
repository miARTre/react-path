import { useState } from "react";

export default function Player() {
  
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleChangePlayerName(event) {
    setSubmitted(false)
    setEnteredPlayerName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName : "unknown entity"}</h2>
      <p>
        <input
          type="text"
          onChange={handleChangePlayerName}
          value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
