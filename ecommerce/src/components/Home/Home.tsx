import Brands from "./Brands/Brand";
import Landing from "./Landing/Landing";
import Reasons from "./Reasons/Reasons";
import PopularProducts from "./PopularProducts/PopularProducts";

const Home = () => {
  return (
    <div>
      {" "}
      <Landing />
      <Brands />
      <PopularProducts />
      <Reasons />
    </div>
  );
};

export default Home;
