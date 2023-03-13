import Brands from "./components/Brands/Brand";
import Landing from "./components/Landing/Landing";
import Navigation from "./components/Navigation/Navigation";
import PopularProducts from "./components/PopularProducts/PopularProducts";
import './style.css'

const AppCommerce = () => {
  return (
    <div className="App">
      <Navigation />
      <Landing />
      <Brands />
      <PopularProducts />
    </div>
  );
}

export default AppCommerce;
