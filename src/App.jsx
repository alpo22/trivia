import { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import Nav from "./Nav";
import Heading from "./Heading";
import Quote from "./Quote";
import Rounds from "./Rounds";
import Input from "./Input";
import InstructionsModal from "./InstructionsModal";
import ResultsModal from "./ResultsModal";
import StatsModal from "./StatsModal";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

/*
Font:

Identify who said the 5 simpsons quotes
	https://simpsons.fandom.com/wiki/Homer_Simpson#Quotes
	http://www.notable-quotes.com/s/simpsons_quotes_v.html
	https://thesimpsonsquoteapi.glitch.me/ (50 quotes)
	https://www.boredpanda.com/quotes-from-the-simpsons/
  https://www.dafont.com/simpsonfont.font?text=Trivia&psize=l
  https://www.thewordfinder.com/simpsons-font-generator/

  - make 'share' button work (copy to clipboard, show toast)
  - fetch today's quotes and who said them
  - can go back to previous step (to see why wrong)

  - stats modal content
  - slide next question in from right
  - could use better images with results, and add more text
  - when click 'share' on last screen, copy should change to 'copied'
  - can i get the simpsons ttf/otf font working instead of using images?
  - show how they did this time vs their overall (localstorage, how many played, % of time got 100%, % of correct overall)
  - could show most guessed incorrect answer
*/

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
      quote: "He card, read good.",
      character: "Homer Simpson",
      guess: null,
    },
    {
      quote: "Don't kid yourself, Jimmy. If a cow ever got the chance, he'd eat you and everyone you care about!",
      character: "Troy McClure",
      guess: null,
    },
    {
      quote: "Ah. The searing kiss of hot lead; how I missed you. I mean, I think I'm dying.",
      character: "Apu Nahasapeemapetilon",
      guess: null,
    },
    {
      quote:
        "I thought I'd never hear the screams of pain or see the look of terror in a young man's eyes. Thank heaven for children!",
      character: "Abraham (Grampa) Simpson",
      guess: null,
    },
    {
      quote:
        "I'm better than dirt. Well, most kinds of dirt, not that fancy store-bought dirt ... I can't compete with that stuff.",
      character: "Moe Szyslak",
      guess: null,
    },
  ]);

  // TODO: why is this necessary?  After make final choice, it wasn't re-rendering (and showing results)
  useEffect(() => {
    if (gameData.filter((round) => round.guess).length === gameData.length) {
      setIsResultsModalVisible(true);
    }
  }, [gameData]);

  function handleSubmit(selectedCharacter) {
    setGameData((oldState) => {
      const newState = [...oldState];
      newState[currentRound - 1].guess = selectedCharacter;
      return newState;
    });

    if (currentRound < 5) {
      setCurrentRound((oldState) => {
        return oldState + 1;
      });
    }
  }

  function handleCloseInstructionsModal() {
    setIsInstructionsModalVisible(false);
  }

  const score = gameData.filter((round) => round.guess === round.character).length;

  return (
    <div className="app-wrapper">
      <InstructionsModal isVisible={isInstructionsModalVisible} onClose={handleCloseInstructionsModal} />
      <Nav />
      <Heading />
      <div className="quote">
        <Quote text={gameData[currentRound - 1].quote} />
      </div>
      <footer>
        <Rounds currentRound={currentRound} gameData={gameData} />
        <Input onSubmit={handleSubmit} />
      </footer>
      <ResultsModal score={score} isVisible={isResultsModalVisible} onClose={() => {}} />
      <StatsModal
        isVisible={isStatsModalVisible}
        onClose={() => {
          setIsStatsModalVisible(false);
        }}
      />
    </div>
  );
}
