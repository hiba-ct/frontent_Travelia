import Header from "./common/Header.jsx";
import Footer from "./home/Footer.jsx";

export default function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">{children}</main>
      <Footer />
    </div>
  );
}