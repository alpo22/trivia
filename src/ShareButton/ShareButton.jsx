import Button from "../Button";
import { URL } from "../constants";
import { copyStringToClipboard } from "../utils";
import "./ShareButton.scss";

export default function ShareButton({ copyText }) {
  return (
    <div className="share-button">
      <Button
        onClick={async () => {
          await copyStringToClipboard(`${copyText} at ${URL}`);
          alert("Results copied to your clipboard.");
        }}
      >
        Share
      </Button>
    </div>
  );
}
