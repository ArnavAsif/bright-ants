import { Outlet, useLocation } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import LoadingPage from "../components/shared/LoadingPage";
import { useEffect, Suspense } from "react";

const MainPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense fallback={<LoadingPage />}>
      {/* Everything is hidden while a lazy-loaded route is loading */}
      <div className="bg-[#1A191C] scroll-smooth">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </Suspense>
  );
};

export default MainPage;
