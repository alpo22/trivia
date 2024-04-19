import StatsModal from "./StatsModal";

export default {
  title: "Example/StatsModal",
  component: StatsModal,
};

const defaultArgs = {
  isVisible: true,
  onClose: () => {},
  scores: [
    { date: "2024-01-08", score: 3 },
    { date: "2024-01-09", score: 4 },
    { date: "2024-01-10", score: 4 },
    { date: "2024-01-12", score: 1 },
    { date: "2024-01-13", score: 2 },
    { date: "2024-01-15", score: 5 },
    { date: "2024-01-16", score: 5 },
    { date: "2024-01-17", score: 4 },
    { date: "2024-01-18", score: 3 },
    { date: "2024-01-19", score: 4 },
    { date: "2024-01-20", score: 5 },
  ],
};

export const Standard = {
  args: {
    ...defaultArgs,
  },
};
