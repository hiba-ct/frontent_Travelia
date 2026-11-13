import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AllDestinationsPage from "./pages/AllDestinationsPage.jsx";
import DestinationPage from "./pages/DestinationPage.jsx";
import TourDetailsPage from "./pages/TourDetailsPage.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<AllDestinationsPage />} />
          <Route path="/destination/:slug" element={<DestinationPage />} />
          <Route path="/tour/:slug" element={<TourDetailsPage />} />
        </Routes>
      
    </>
  );
}