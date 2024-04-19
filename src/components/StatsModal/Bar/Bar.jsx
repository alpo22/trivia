import "./Bar.scss";

export default function Bar({ label, max, score }) {
  const width = (score / max) * 100;

  return (
    <div className="bar-wrapper">
      <label>{label}:</label>
      <div className="bar" style={{ width: `${width}%` }}>
        {score}
      </div>
    </div>
  );
}
