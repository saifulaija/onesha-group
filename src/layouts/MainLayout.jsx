import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import TopNavbar from "../components/TopNavbar";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ScrollToTop />
      <Footer/>
    </>
  );
};

export default MainLayout;
