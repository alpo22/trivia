export const metadata = {
  title: "AnecDOHtes",
  description: "Simpsons quote game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
