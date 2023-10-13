import Swiper from "./Swiper";

const HomeDisaing = () => {
  // Array de imágenes

  return (
    <div className="flex justify-center pt-10">
      <div className="flex w-screen max-w-[1310px] justify-around max-md:flex-col-reverse ">
        <Swiper />
        <div className="flex justify-center">
          <p>titulo batik </p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default HomeDisaing;
