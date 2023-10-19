import { useEffect, useState } from "react";

const Swiper = () => {
  const images = [
    "/home/1.png",
    "/home/2.png",
    "/home/4.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    // Esta función cambiará automáticamente la imagen cada 3 segundos (ajusta el tiempo según tus preferencias)
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    // Limpia el intervalo cuando el componente se desmonta para evitar fugas de memoria
    return () => clearInterval(intervalId);
  }, [currentIndex, images]);

  return (
    <div className="relative ">
    <img
      src={images[currentIndex]}
      alt={`Imagen ${currentIndex + 1}`}
      className="w-[400px] ovo"
    />
  </div>
  );
};

export default Swiper;
