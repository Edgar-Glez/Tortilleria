import "../styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./footer/footer";

export const metadata = {
  title: "Tortilleria Valle Verde",
  description: "Tortilleria Valle Verde de Ensenada",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F6EFD5]">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
