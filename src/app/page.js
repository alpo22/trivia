import App from "./App";
import { URL } from "./utils/constants";

async function getQuotes() {
  const res = await fetch(`${URL}/api/quotes`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.quotes;
}

export default async function Home() {
  const quotes = await getQuotes();

  return <App quotes={quotes} todaysDate={quotes[0].qdate} />;
}
