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
        <li>
          <StatsSvg />
        </li>
        <li>
          <ShareSvg />
        </li>
      </ul>
    </nav>
  );
}
