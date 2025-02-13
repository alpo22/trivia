import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useZustandStore } from "./hooks/useZustandStore";
import { useShallow } from "zustand/react/shallow";
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
  const todaysDate = new Date().toISOString().split("T")[0];
  const [hasSeenInstructions, setHasSeenInstructions] = useLocalStorage("hasSeenInstructions", false);
  const [scores, setScores] = useLocalStorage("scores", JSON.stringify([]));
  const [alreadyPlayedToday, setAlreadyPlayedToday] = useState(null);
  const location = useLocation();

  const { quotes, setQuotes, setGuess, getCurrentScore, currentRound, increaseRound } = useZustandStore(
    useShallow((state) => ({
      quotes: state.quotes,
      setQuotes: state.setQuotes,
      setGuess: state.setGuess,
      getCurrentScore: state.getCurrentScore,
      currentRound: state.currentRound,
      increaseRound: state.increaseRound,
    }))
  );

  useEffect(() => {
    async function getQuotes() {
      const res = await fetch(`/api/quotes.php`);

      if (!res.ok) {
        throw new Error("Failed to fetch quotes from API");
      }

      const quotes = await res.json();
      setQuotes(quotes);

      setAlreadyPlayedToday(JSON.parse(scores).filter((score) => score.date === todaysDate).length > 0);
    }

    getQuotes();
  }, []);

  useEffect(() => {
    if (!hasSeenInstructions) {
      navigate("/");
    }
  }, [hasSeenInstructions]);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
      case "/game":
        if (alreadyPlayedToday) {
          navigate("/already-played");
        }
        break;
      case "/already-played":
        if (!alreadyPlayedToday) {
          navigate("/game");
        }
        break;
    }
  }, [location.pathname, navigate]);

  function handleSubmit(selectedCharacter) {
    setGuess(selectedCharacter);

    function recordScoreToLocalStorage() {
      const newScores = JSON.parse(scores).filter((score) => score.date !== todaysDate);
      newScores.push({ date: todaysDate, score: getCurrentScore() });
      setScores(JSON.stringify(newScores));
    }

    recordScoreToLocalStorage();
  }

  function handleContinue() {
    if (currentRound < quotes?.length) {
      increaseRound();
    } else {
      setAlreadyPlayedToday(true);
      navigate("/results");
    }
  }

  if (!quotes || alreadyPlayedToday === null) {
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
        <Route path="/results" element={<ResultsModal score={getCurrentScore()} />} />
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
