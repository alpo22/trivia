import { useLocalStorage } from "@uidotdev/usehooks";
import HelpSvg from "./HelpSvg";
import StatsSvg from "./StatsSvg";
import ShareSvg from "./ShareSvg";
import "./Nav.scss";

/*
<!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
*/

export default function Nav() {
  const [, setIsInstructionsModalVisible] = useLocalStorage("isInstructionsModalVisible");

  async function copyMessageToClipboard() {
    let text = `Try Simpsons Quotes game at https://trivia-five-nu.vercel.app/`;

    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }

  return (
    <nav>
      <ul>
        <li
          onClick={() => {
            setIsInstructionsModalVisible(true);
          }}
        >
          <HelpSvg />
        </li>
        <li
          onClick={() => {
            alert("Have you ever heard of feature creep?");
          }}
        >
          <StatsSvg />
        </li>
        <li
          onClick={async () => {
            await copyMessageToClipboard();
            alert("Link copied to your clipboard.");
          }}
        >
          <ShareSvg />
        </li>
      </ul>
    </nav>
  );
}
