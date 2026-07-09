import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import TopNavbar from "../components/TopNavbar";
import ScrollToTop from "../components/ScrollToTop";

import Cta from "../components/Cta";

const MainLayout = () => {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ScrollToTop />
      <Cta />
    </>
  );
};

export default MainLayout;
