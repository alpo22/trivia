import ResultsModal from "./ResultsModal";

export default {
  title: "Example/ResultsModal",
  component: ResultsModal,
};

const defaultArgs = {
  isVisible: true,
  onClose: () => {},
};

export const Zero = {
  args: {
    ...defaultArgs,
    score: 0,
  },
};

export const One = {
  args: {
    ...defaultArgs,
    score: 1,
  },
};

export const Two = {
  args: {
    ...defaultArgs,
    score: 2,
  },
};

export const Three = {
  args: {
    ...defaultArgs,
    score: 3,
  },
};

export const Four = {
  args: {
    ...defaultArgs,
    score: 4,
  },
};

export const Five = {
  args: {
    ...defaultArgs,
    score: 5,
  },
};
