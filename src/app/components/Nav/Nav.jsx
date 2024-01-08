import { useLocalStorage } from "@uidotdev/usehooks";
import { URL } from "../../utils/constants";
import { copyStringToClipboard } from "../../utils/utils";
import HelpSvg from "./HelpSvg";
import StatsSvg from "./StatsSvg";
import ShareSvg from "./ShareSvg";
import "./Nav.scss";

export default function Nav() {
  const [, setIsInstructionsModalVisible] = useLocalStorage("isInstructionsModalVisible");

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
            await copyStringToClipboard(`Try Simpsons Quotes game at ${URL}`);
            alert("Link copied to your clipboard.");
          }}
        >
          <ShareSvg />
        </li>
      </ul>
    </nav>
  );
}
