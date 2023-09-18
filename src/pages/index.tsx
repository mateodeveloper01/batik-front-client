import Categories from "~/components/Categories";
import Contact from "~/components/Contact";
import Slider from "~/components/Slider";
import TrendProducts from "~/components/TrendProducts";
// import { getLayout } from "next";
const Home = () => {
  return (
    <div className="max-w-screen min-w-screen">
      <Slider />
      <TrendProducts type="featured" />
      <Categories />
      <TrendProducts type="trending" />
      <Contact />
    </div>
  );
};

export default Home;
