import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/Cart/CartProvider";

import "./style.css";

const AppCommerce = () => {

  return (
    <CartProvider>
    <Router>
      {" "}
      <div className="App ">
        <Navigation />
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/shop" Component={Shop} />
          <Route path="/cart" Component={Cart} />
        </Routes>
        <Footer />
      </div>
    </Router>
    </CartProvider>
  );
};

export default AppCommerce;
