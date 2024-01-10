export const metadata = {
  title: "AnecDOH!tes",
  description: "Simpsons quote game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
