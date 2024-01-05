"use client";

import { useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Nav from "./components/Nav";
import Heading from "./components/Heading";
import Quote from "./components/Quote";
import Rounds from "./components/Rounds";
import Input from "./components/Input";
import InstructionsModal from "./components/InstructionsModal";
import ResultsModal from "./components/ResultsModal";
import StatsModal from "./components/StatsModal";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ quotes }) {
  const [isInstructionsModalVisible, setIsInstructionsModalVisible] = useLocalStorage(
    "isInstructionsModalVisible",
    true
  );
  const [isResultsModalVisible, setIsResultsModalVisible] = useState(false);
  const [isStatsModalVisible, setIsStatsModalVisible] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);

  const [gameData, setGameData] = useState(
    quotes.map((q) => ({ quote: q.quote, character: q.character, guess: null }))
  );

  function handleSubmit(selectedCharacter) {
    setGameData((oldState) => {
      const newState = [...oldState];
      newState[currentRound - 1].guess = selectedCharacter;
      return newState;
    });
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

  const score = gameData.filter((round) => round.guess === round.character).length;
  const numberOfGuesses = gameData.filter((round) => round.guess).length;

  return (
    <div className="app-wrapper">
      <InstructionsModal isVisible={isInstructionsModalVisible} onClose={handleCloseInstructionsModal} />
      <Nav />
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
      />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
