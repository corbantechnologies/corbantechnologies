import { Roboto } from 'next/font/google'
import Navbar from "./components/custom/Navbar";
import "./globals.css";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <title>Corban Technologies</title>
        <meta
          name="description"
          content="Empowering lives through innovation: Technology tailored for your home, business, and growth."
        />
      </head>
      <body>
        <Navbar/>
        <div className=''>
        {children}
        </div>
      </body>
    </html>
  );
}
