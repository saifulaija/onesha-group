import Hero from "../components/Hero";
import Thesis from "../components/Thesis";
import Market from "../components/Market";
import Positioning from "../components/Positioning";
import Economics from "../components/Economics";
import Execution from "../components/Execution";
import Risks from "../components/Risks";
import Infrastructure from "../components/Infrastructure";
import History from "../components/History";
import Services from "../components/Services";
import About from "../components/About";

const Home = () => {
  return (
    <>
      <Hero />
      <About/>
      <Thesis />
      <Market />
      <Services/>
      <Positioning />
      <History />
      <Economics />
      <Execution />
      <Risks />
      <Infrastructure />
    </>
  );
};

export default Home;
