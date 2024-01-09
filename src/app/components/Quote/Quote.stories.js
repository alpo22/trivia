import Quote from "./Quote";

export default {
  title: "Example/Quote",
  component: Quote,
};

const defaultArgs = {
  character: "Jasper Beardsly",
  guess: "",
  text: "Who shot who in the what now?",
};

export const NoGuess = {
  args: {
    ...defaultArgs,
  },
};

export const CorrectGuess = {
  args: {
    ...defaultArgs,
    guess: defaultArgs.character,
  },
};

export const IncorrectGuess = {
  args: {
    ...defaultArgs,
    guess: "Homer",
  },
};
