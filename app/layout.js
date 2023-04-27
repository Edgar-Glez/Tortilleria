import "../styles/globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Tortilleria Valle Verde",
  description: "Tortilleria Valle Verde de Ensenada",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
