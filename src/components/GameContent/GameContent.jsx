import PropTypes from "prop-types";
import { useZustandStore } from "../../hooks/useZustandStore";
import BannerMessage from "../BannerMessage";
import Nav from "../Nav";
import Heading from "../Heading";
import Quote from "../Quote";
import Rounds from "../Rounds";
import Input from "../Input";

export default function GameContent({ handleSubmit, handleContinue, handleClickShowStats }) {
  const guesses = useZustandStore((state) => state.guesses);
  const quotes = useZustandStore((state) => state.quotes);
  const currentRound = useZustandStore((state) => state.currentRound);

  if (!quotes) {
    return "Loading...";
  }

  return (
    <div className="inner-content">
      <BannerMessage />
      <Nav onClickShowStats={handleClickShowStats} />
      <Heading />
      <Quote
        character={quotes[currentRound - 1].character}
        guess={guesses[currentRound - 1]}
        text={quotes[currentRound - 1].quote}
      />
      <footer>
        <Rounds />
        <Input
          isDone={quotes.length === guesses.length}
          isOnActiveRound={currentRound === guesses.length + 1}
          onContinue={handleContinue}
          onSubmit={handleSubmit}
        />
      </footer>
    </div>
  );
}

GameContent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleContinue: PropTypes.func.isRequired,
  handleClickShowStats: PropTypes.func.isRequired,
};
