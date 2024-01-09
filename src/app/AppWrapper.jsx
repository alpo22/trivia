import App from "./App";
import { URL } from "./utils/constants";

// async function getQuotes() {
//   const res = await fetch(`${URL}/api/quotes`, { cache: "no-store" });

//   if (!res.ok) {
//     throw new Error("Failed to fetch quotes from API");
//   }

//   const data = await res.json();
//   return data.quotes;
// }

export default async function Home() {
  // const quotes = await getQuotes();
  const quotes = [
    { quote: "hi", character: "joe", guess: null },
    { quote: "hi2", character: "joe", guess: null },
    { quote: "hi3", character: "joe", guess: null },
    { quote: "hi4", character: "joe", guess: null },
    { quote: "hi5", character: "joe", guess: null },
  ];

  // return <App quotes={quotes} todaysDate={quotes[0].qdate} />;
  return <App quotes={quotes} todaysDate="2024-01-08" />;
}
