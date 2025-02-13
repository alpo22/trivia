import { useZustandStore } from "../../hooks/useZustandStore";
import CheckSvg from "./CheckSvg";
import Xsvg from "./Xsvg";
import "./Rounds.scss";

export default function Rounds() {
  const guesses = useZustandStore((state) => state.guesses);
  const quotes = useZustandStore((state) => state.quotes);
  const currentRound = useZustandStore((state) => state.currentRound);

  return (
    <ul className="rounds">
      {quotes.map((_, index) => {
        let cn = "";
        let Content = null;

        if (currentRound - 1 === index) {
          cn += `active `;
        }

        if (guesses[index] === undefined) {
          // do nothing
        } else if (guesses[index] === quotes[index].character) {
          cn += `green`;
          Content = <CheckSvg />;
        } else {
          cn += `red`;
          Content = <Xsvg />;
        }

        return (
          <li key={index} className={cn}>
            {Content}
          </li>
        );
      })}
    </ul>
  );
}
