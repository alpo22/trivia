import { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import BannerMessage from "./components/BannerMessage";
import Nav from "./components/Nav";
import Heading from "./components/Heading";
import AlreadyPlayedToday from "./components/AlreadyPlayedToday";
import Quote from "./components/Quote";
import Rounds from "./components/Rounds";
import Input from "./components/Input";
import InstructionsModal from "./components/InstructionsModal";
import ResultsModal from "./components/ResultsModal";
import StatsModal from "./components/StatsModal";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [quotes, setQuotes] = useState(null);
  const [todaysDate, setTodaysDate] = useState(null);
  const [isInstructionsModalVisible, setIsInstructionsModalVisible] = useLocalStorage(
    "isInstructionsModalVisible",
    true
  );
  const [scores, setScores] = useLocalStorage("scores", JSON.stringify([]));
  const [isResultsModalVisible, setIsResultsModalVisible] = useState(false);
  const [isStatsModalVisible, setIsStatsModalVisible] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  const [alreadyPlayedToday, setAlreadyPlayedToday] = useState(null);
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    async function getQuotes() {
      const res = await fetch(`/api/quotes`);

      if (!res.ok) {
        throw new Error("Failed to fetch quotes from API");
      }

      const data = await res.json();
      setQuotes(data.quotes);

      const _todaysDate = data.quotes[0].qdate;
      setTodaysDate(_todaysDate);
      setGameData(data.quotes.map((q) => ({ quote: q.quote, character: q.qcharacter, guess: null })));
      setAlreadyPlayedToday(JSON.parse(scores).filter((score) => score.date === _todaysDate).length > 0);
    }

    getQuotes();
  }, []);

  function handleSubmit(selectedCharacter) {
    setGameData((oldState) => {
      const newState = [...oldState];
      newState[currentRound - 1].guess = selectedCharacter;
      return newState;
    });

    function recordScoreToLocalStorage() {
      const currentScore = gameData.filter((round) => round.character === round.guess).length;
      const newScores = JSON.parse(scores).filter((score) => score.date !== todaysDate);
      newScores.push({ date: todaysDate, score: currentScore });
      setScores(JSON.stringify(newScores));
    }

    recordScoreToLocalStorage();
  }

  function handleContinue() {
    if (currentRound < gameData.length) {
      setCurrentRound((oldState) => {
        return oldState + 1;
      });
    } else {
      setIsResultsModalVisible(true);
    }
  }

  function handleCloseInstructionsModal() {
    setIsInstructionsModalVisible(false);
  }

  function handleClickShowStats() {
    setIsStatsModalVisible(true);
  }

  if (!quotes || !gameData || alreadyPlayedToday === null) {
    return "Loading...";
  }

  const score = gameData.filter((round) => round.guess === round.character).length;
  const numberOfGuesses = gameData.filter((round) => round.guess).length;

  return (
    <div className="app-wrapper">
      <InstructionsModal isVisible={isInstructionsModalVisible} onClose={handleCloseInstructionsModal} />
      <BannerMessage />
      <Nav onClickShowStats={handleClickShowStats} />
      <Heading />
      {alreadyPlayedToday ? (
        <AlreadyPlayedToday
          onClickViewMyStats={() => {
            setIsStatsModalVisible(true);
          }}
        />
      ) : (
        <>
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
      )}
      <ResultsModal
        isVisible={isResultsModalVisible}
        onClose={() => {
          setIsResultsModalVisible(false);
        }}
        onClickViewMyStats={() => {
          setIsResultsModalVisible(false);
          setIsStatsModalVisible(true);
        }}
        score={score}
      />
      <StatsModal
        isVisible={isStatsModalVisible}
        onClose={() => {
          setIsStatsModalVisible(false);
        }}
        scores={JSON.parse(scores)}
      />
    </div>
  );
}
