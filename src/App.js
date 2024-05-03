import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./App.css";
// import Navbar from "./components/NavBar"
import Header from "./components/Header";
import Mainbody from "./components/Mainbody";
import Cards from "./components/Cards";
import Workwithus from "./components/Workwithus";
import  FooterWithLogo  from "./components/Footer_logo";
import Boost_your from "./components/Boost_your";
import Partner from "./components/Partner";
import Carousel from "./components/Carousel";
import Collab from "./components/Collab";
import Relation from "./components/Relation";
import Example from "./components/Stat";
import AccordionUsage from "./components/AccordionUsage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Mainbody />
      <Carousel />
      <Cards />
      <Collab />
      <Relation />
      <Example />
      <AccordionUsage />
      {/* <Workwithus />
      <Boost_your />
      <Partner /> */}
      <FooterWithLogo />
      <Footer />
    </div>
  );
}

export default App;
