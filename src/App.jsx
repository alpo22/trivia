import { useState } from "react";
import Nav from "./Nav";
import Heading from "./Heading";
import Quote from "./Quote";
import Rounds from "./Rounds";
import Input from "./Input";
import "./App.css";

/*
Identify who said the 5 simpsons quotes
	https://simpsons.fandom.com/wiki/Homer_Simpson#Quotes
	http://www.notable-quotes.com/s/simpsons_quotes_v.html
	https://thesimpsonsquoteapi.glitch.me/ (50 quotes)
	https://www.boredpanda.com/quotes-from-the-simpsons/
  https://www.dafont.com/simpsonfont.font?text=Trivia&psize=l
  https://www.thewordfinder.com/simpsons-font-generator/

  TODO:
  - at game-end
      show final score (with a 'woo-hoo' if got perfect', or a 'doh if got...?)
      later 'share' link
      later overall stats? (localstorage, how many played, % of time got 100%, % of correct overall)
  - show instructions if not in localStorage (a simple modal (for instructions), box with rounded corners, x in a bubble in top right)
  - make 'help' button work
  - make 'stats' button work
  - make 'share' button work (copy to clipboard, show toast)
  - fetch today's quotes and who said them

  Later:
  - could show most guessed incorrect answer
*/

export default function App() {
  const [currentRound, setCurrentRound] = useState(0);
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
      character: "Apu",
      guess: null,
    },
    {
      quote:
        "I thought I'd never hear the screams of pain or see the look of terror in a young man's eyes. Thank heaven for children!",
      character: "Abe (Grampa) Simpson",
      guess: null,
    },
    {
      quote:
        "I'm better than dirt. Well, most kinds of dirt, not that fancy store-bought dirt ... I can't compete with that stuff.",
      character: "Moe Szyslak",
      guess: null,
    },
  ]);

  function handleSubmit(selectedCharacter) {
    setGameData((oldState) => {
      oldState[currentRound].guess = selectedCharacter;
      return oldState;
    });

    setCurrentRound((oldState) => {
      return oldState + 1;
    });
  }

  return (
    <div className="app-wrapper">
      <Nav />
      <Heading />
      <div class="quote">
        <Quote text={gameData[currentRound].quote} />
      </div>
      <footer>
        <Rounds currentRound={currentRound} gameData={gameData} />
        <Input onSubmit={handleSubmit} />
      </footer>
    </div>
  );
}
