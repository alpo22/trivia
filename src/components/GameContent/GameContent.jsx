import PropTypes from "prop-types";
import BannerMessage from "../BannerMessage";
import Nav from "../Nav";
import Heading from "../Heading";
import Quote from "../Quote";
import Rounds from "../Rounds";
import Input from "../Input";

export default function GameContent({
  quotes,
  gameData,
  currentRound,
  numberOfGuesses,
  handleSubmit,
  handleContinue,
  handleClickShowStats,
}) {
  if (!quotes || !gameData) {
    return "Loading...";
  }

  return (
    <>
      <BannerMessage />
      <Nav onClickShowStats={handleClickShowStats} />
      <Heading />
      <Quote
        character={gameData[currentRound - 1].character}
        guess={gameData[currentRound - 1].guess}
        text={gameData[currentRound - 1].quote}
      />
      <footer>
        <Rounds currentRound={currentRound} gameData={gameData} />
        <Input
          isDone={gameData.length === numberOfGuesses}
          isOnActiveRound={currentRound === numberOfGuesses + 1}
          onContinue={handleContinue}
          onSubmit={handleSubmit}
        />
      </footer>
    </>
  );
}

GameContent.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      character: PropTypes.string,
      qdate: PropTypes.string,
    })
  ),
  gameData: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      character: PropTypes.string,
      guess: PropTypes.string,
    })
  ),
  currentRound: PropTypes.number.isRequired,
  numberOfGuesses: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleContinue: PropTypes.func.isRequired,
  handleClickShowStats: PropTypes.func.isRequired,
};
