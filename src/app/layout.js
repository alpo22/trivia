export const metadata = {
  title: "AnecDOH!tes",
  description: "Simpsons daily quote game. Compete against your friends.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:url" content="https://www.anecdohtes.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AnecDOH!tes" />
        <meta property="og:description" content="Simpsons daily quote game. Compete against your friends." />
        <meta property="og:image" content="https://www.anecdohtes.com/assets/opengraph.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="anecdohtes.com" />
        <meta property="twitter:url" content="https://www.anecdohtes.com" />
        <meta name="twitter:title" content="AnecDOH!tes" />
        <meta name="twitter:description" content="Simpsons daily quote game. Compete against your friends." />
        <meta name="twitter:image" content="https://www.anecdohtes.com/assets/opengraph.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
