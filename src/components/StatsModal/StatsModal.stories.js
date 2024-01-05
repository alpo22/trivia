import StatsModal from "./StatsModal";

export default {
  title: "Example/StatsModal",
  component: StatsModal,
};

const defaultArgs = {
  isVisible: true,
  onClose: () => {},
};

export const Standard = {
  args: {
    ...defaultArgs,
    score0: 1,
    score1: 3,
    score2: 7,
    score3: 8,
    score4: 4,
    score5: 2,
  },
};
