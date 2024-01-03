import { useState } from "react";
import Select from "react-select";
import Button from "../Button";
import characters from "../characters";
import "./Input.scss";

export default function Input({ isOnCurrentRound, onContinue, onSubmit }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = characters.map((character) => ({ value: character, label: character }));

  if (isOnCurrentRound) {
    return (
      <form action="javascript: null">
        <Select
          className="react-select"
          menuPlacement="top"
          onChange={setSelectedOption}
          options={options}
          value={selectedOption}
        />
        <Button
          onClick={() => {
            onSubmit(selectedOption.value);
            setSelectedOption(null);
          }}
        >
          Submit
        </Button>
      </form>
    );
  }

  return (
    <div className="continue-button-wrapper">
      <Button onClick={onContinue}>Continue</Button>
    </div>
  );
}
