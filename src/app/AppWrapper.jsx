import App from "./App";
import { URL } from "./utils/constants";

async function getQuotes() {
  // const res = await fetch(`${URL}/api/quotes`, { cache: "no-store" });
  // const res = await fetch(`https://starwarsapi.com`, { cache: "no-store" }); // works
  const res = await fetch(`https://anecdohtes-preview.vercel.app/api/quotes`, { cache: "no-store" }); // doesnt work...

  if (!res.ok) {
    // throw new Error(res.statusText); //unauthorized
    throw new Error("Failed to fetch quotes from API");
  }

  const data = await res.json();
  return data.quotes;
}

export default async function Home() {
  const quotes = await getQuotes();
  return <App quotes={quotes} todaysDate={quotes[0].qdate} />;
}
