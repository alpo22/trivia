import HelpSvg from "./HelpSvg";
import StatsSvg from "./StatsSvg";
import ShareSvg from "./ShareSvg";
import "./Nav.scss";

/*
<!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.-->
*/

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">
            <HelpSvg />
          </a>
        </li>
        <li>
          <a href="#">
            <StatsSvg />
          </a>
        </li>
        <li>
          <a href="#">
            <ShareSvg />
          </a>
        </li>
      </ul>
    </nav>
  );
}
