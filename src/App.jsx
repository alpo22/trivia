import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";
import GameContent from "./components/GameContent";
import AlreadyPlayedToday from "./components/AlreadyPlayedToday";
import InstructionsModal from "./components/InstructionsModal";
import Intro from "./components/Intro";
import ResultsModal from "./components/ResultsModal";
import StatsModal from "./components/StatsModal";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function AppContent() {
  const navigate = useNavigate();
  const [quotes, setQuotes] = useState(null);
  const [todaysDate, setTodaysDate] = useState(null);
  const [hasSeenInstructions, setHasSeenInstructions] = useLocalStorage("hasSeenInstructions", false);
  const [scores, setScores] = useLocalStorage("scores", JSON.stringify([]));
  const [currentRound, setCurrentRound] = useState(1);
  const [alreadyPlayedToday, setAlreadyPlayedToday] = useState(null);
  const [gameData, setGameData] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function getQuotes() {
      const res = await fetch(`/api/quotes.php`);

      if (!res.ok) {
        throw new Error("Failed to fetch quotes from API");
      }

      const quotes = await res.json();
      setQuotes(quotes);

      const _todaysDate = quotes[0].qdate;
      setTodaysDate(_todaysDate);
      setGameData(quotes.map((q) => ({ quote: q.quote, character: q.character, guess: null })));
      setAlreadyPlayedToday(JSON.parse(scores).filter((score) => score.date === _todaysDate).length > 0);
    }

    getQuotes();
  }, []);

  useEffect(() => {
    if (!hasSeenInstructions) {
      navigate("/");
    }
  }, [hasSeenInstructions]);

  useEffect(() => {
    if (alreadyPlayedToday && location.pathname == "/") {
      navigate("/already-played");
    }
  }, [location, alreadyPlayedToday]);

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
    if (currentRound < gameData?.length) {
      setCurrentRound((oldState) => oldState + 1);
    } else {
      navigate("/results");
    }
  }

  const score = gameData?.filter((round) => round.guess === round.character).length || 0;
  const numberOfGuesses = gameData?.filter((round) => round.guess).length || 0;

  if (!quotes || !gameData || alreadyPlayedToday === null) {
    return "Loading...";
  }

  return (
    <div className="app-wrapper">
      <Routes>
        <Route
          path="/"
          element={
            <InstructionsModal
              onClose={() => {
                setHasSeenInstructions(true);
                navigate("/intro");
              }}
            />
          }
        />
        <Route
          path="/intro"
          element={
            <Intro
              afterAnimation={() => {
                navigate("/game");
              }}
            />
          }
        />
        <Route
          path="/game"
          element={
            <GameContent
              quotes={quotes}
              gameData={gameData}
              currentRound={currentRound}
              numberOfGuesses={numberOfGuesses}
              handleSubmit={handleSubmit}
              handleContinue={handleContinue}
              handleClickShowStats={() => navigate("/stats")}
            />
          }
        />

        <Route
          path="/already-played"
          element={<AlreadyPlayedToday handleClickShowStats={() => navigate("/stats")} />}
        />
        <Route path="/results" element={<ResultsModal score={score} />} />
        <Route path="/stats" element={<StatsModal scores={JSON.parse(scores)} />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
