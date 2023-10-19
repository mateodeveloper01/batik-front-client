import Swiper from "./Swiper";

const HomeDisaing = () => {
  // Array de imágenes

  return (
    <div className="flex justify-center  bg-[#fff3e9] max-md:my-5  max-md:pt-5">
      <div className="flex w-screen max-w-[1310px] justify-around max-md:flex-col-reverse  ">
        {/* <div className="flex"> */}
        <Swiper />
        {/* <Swiper /> */}
        {/* </div> */}
        <div className="flex flex-col justify-center items-center font-BebasNeue max-md:py-5">
          <p className=" text-8xl text-center max-md:text-6xl">tienda batik </p>
          <p className=" text-4xl max-md:text-4xl">Elegí tu look </p>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default HomeDisaing;
