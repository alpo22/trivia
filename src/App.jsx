import { useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Nav from "./Nav";
import Heading from "./Heading";
import Quote from "./Quote";
import Rounds from "./Rounds";
import Input from "./Input";
import InstructionsModal from "./InstructionsModal";
import ResultsModal from "./ResultsModal";
import StatsModal from "./StatsModal";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [isInstructionsModalVisible, setIsInstructionsModalVisible] = useLocalStorage(
    "isInstructionsModalVisible",
    true
  );
  const [isResultsModalVisible, setIsResultsModalVisible] = useState(false);
  const [isStatsModalVisible, setIsStatsModalVisible] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  const [gameData, setGameData] = useState([
    {
      quote: "Ah. The searing kiss of hot lead; how I missed you. I mean, I think I'm dying.",
      character: "Apu Nahasapeemapetilon",
      guess: null,
    },
    // {
    //   quote: "He card, read good.",
    //   character: "Homer Simpson",
    //   guess: null,
    // },
    // {
    //   quote: "Don't kid yourself, Jimmy. If a cow ever got the chance, he'd eat you and everyone you care about!",
    //   character: "Troy McClure",
    //   guess: null,
    // },
    // {
    //   quote:
    //     "I thought I'd never hear the screams of pain or see the look of terror in a young man's eyes. Thank heaven for children!",
    //   character: "Abraham (Grampa) Simpson",
    //   guess: null,
    // },
    // {
    //   quote:
    //     "I'm better than dirt. Well, most kinds of dirt, not that fancy store-bought dirt ... I can't compete with that stuff.",
    //   character: "Moe Szyslak",
    //   guess: null,
    // },
  ]);

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
        score={score}
        isVisible={isResultsModalVisible}
        onClose={() => {
          setIsResultsModalVisible(false);
        }}
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
