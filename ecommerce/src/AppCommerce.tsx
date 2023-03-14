import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./style.css";

const AppCommerce = () => {

  return (
    <Router>
      {" "}
      <div className="App ">
        <Navigation />
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/shop" Component={Shop} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppCommerce;
