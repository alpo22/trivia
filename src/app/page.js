import App from "./App";

async function getQuotes() {
  const res = await fetch("http://localhost:3000/api/quotes", { cache: "no-store" });

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
