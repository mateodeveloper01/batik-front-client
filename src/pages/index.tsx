import { Container } from "@chakra-ui/react";
import Categories from "~/components/Categories";
import Contact from "~/components/Contact";
import Slider from "~/components/Slider";
import TrendProducts from "~/components/TrendProducts";
import HomeDisaing from "~/components/home/HomeDisaing";
// import { getLayout } from "next";
const Home = () => {
  return (
    <>
      {/* <Slider /> */}
      <HomeDisaing />
      <TrendProducts type="featured" />
      {/* <Categories /> */}
      <TrendProducts type="trending" />
      {/* <Contact /> */}
    </>
  );
};

export default Home;
