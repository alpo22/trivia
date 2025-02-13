import { create } from "zustand";

export const useZustandStore = create((set, get) => ({
  getCurrentScore: () => {
    return get().quotes.reduce((acc, quote, index) => (quote.character === get().guesses[index] ? acc + 1 : acc), 0);
  },

  currentRound: 1,
  increaseRound: () => set((state) => ({ currentRound: state.currentRound + 1 })),

  quotes: [], // [ {character, quote}, ...]
  setQuotes: (quotes) => set({ quotes }),

  guesses: [], // [ character, ... ]
  setGuess: (guess) =>
    set((state) => {
      let newGuesses = [...state.guesses];
      newGuesses[state.currentRound - 1] = guess;
      return { ...state, guesses: newGuesses };
    }),
}));
