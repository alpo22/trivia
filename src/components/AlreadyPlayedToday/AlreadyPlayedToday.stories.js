import AlreadyPlayedToday from "./AlreadyPlayedToday";

export default {
  title: "Example/AlreadyPlayedToday",
  component: AlreadyPlayedToday,
};

const defaultArgs = {
  onClickViewMyStats: () => {},
};

export const Standard = {
  args: {
    ...defaultArgs,
  },
};
