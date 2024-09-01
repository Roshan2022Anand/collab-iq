import { Poppins,Roboto,Montserrat,Merriweather,Open_Sans } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["500", "700"] });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["400", "700"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata = {
  title: "Collaborative Learning Platform",
  description: "A platform for collaborative learning and peer interaction.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}