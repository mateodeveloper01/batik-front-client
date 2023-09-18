import { useState } from "react";
import { MdEast } from "react-icons/md";
import { MdWest } from "react-icons/md";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev: number) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev: number) => prev + 1);
  };

  return (
    <div className="slide  w-img relative overflow-hidden">
      <div
        className="mov flex h-full w-[300vw] "
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img
          className="h-full w-screen object-cover"
          src={"/img/slider3.jpg"}
          alt=""
        />
        <img
          className="h-full w-screen object-cover"
          src={"/img/slider.jpg"}
          alt=""
        />
        <img
          className="h-full w-screen object-cover"
          src={"/img/slider1.jpg"}
          alt=""
        />
      </div>
      <div className="absolute bottom-24 left-0 right-0 m-auto flex w-fit gap-2">
        <div
          onClick={prevSlide}
          className="border-green flex h-12 w-12 cursor-pointer items-center justify-center border"
        >
          <MdWest />
        </div>
        <div
          onClick={nextSlide}
          className="border-green flex h-12 w-12 cursor-pointer items-center justify-center border"
        >
          <MdEast />
        </div>
      </div>
    </div>
  );
};

export default Slider;
