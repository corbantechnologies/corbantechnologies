import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Corban Technologies</title>
        <meta
          name="description"
          content="Empowering lives through innovation: Technology tailored for your home, business, and growth."
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
