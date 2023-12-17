import { useState } from "react";
import Select from "react-select";
import characters from "../characters";
import "./Input.scss";

export default function Input({ onSubmit }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = characters.map((character) => ({ value: character, label: character }));

  return (
    <form action="javascript: null">
      <Select
        className="react-select"
        menuPlacement="top"
        onChange={setSelectedOption}
        options={options}
        value={selectedOption}
      />
      <button
        onClick={() => {
          onSubmit(selectedOption.value);
          setSelectedOption(null);
        }}
      >
        Submit
      </button>
    </form>
  );
}
