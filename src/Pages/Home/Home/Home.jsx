import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Fetured from "../Fetured/Fetured";
import Popularmenu from "../PopularMenu/Popularmenu";
import Testiimonials from "../Testimonials/Testiimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Popularmenu></Popularmenu>
      <CallUs></CallUs>
      <Fetured></Fetured>
      <Testiimonials></Testiimonials>
    </div>
  );
};

export default Home;