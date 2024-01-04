import Button from "../Button";
import "./ShareButton.scss";

export default function ShareButton({ copyText }) {
  async function copyResultsToClipboard() {
    let text = `${copyText} at https://trivia-five-nu.vercel.app/`;

    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }

  return (
    <div className="share-button">
      <Button
        onClick={async () => {
          await copyResultsToClipboard();
          alert("Results copied to clipboard");
        }}
      >
        Share
      </Button>
    </div>
  );
}
