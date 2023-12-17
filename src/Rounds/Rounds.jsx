import CheckSvg from "./CheckSvg";
import Xsvg from "./Xsvg";
import "./Rounds.scss";

export default function Rounds({ currentRound, gameData }) {
  console.log("gameData.length", gameData.length);
  return (
    <ul className="rounds">
      {gameData.map((roundData, index) => {
        let cn;
        let Content = null;

        if (currentRound === index) {
          cn += ` active`;
        }

        if (roundData.guess === null) {
          // do nothing
        } else if (roundData.guess === roundData.character) {
          cn += ` green`;
          Content = <CheckSvg />;
        } else {
          cn += ` red`;
          Content = <Xsvg />;
        }

        return (
          <li key={gameData[index].quote} className={cn}>
            {Content}
          </li>
        );
      })}
    </ul>
  );
}
