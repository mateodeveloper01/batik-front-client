const Footer = () => {
  return (
    <div className="pt-32 max-md:pt-4">
      <div className="flex gap-5 max-md:flex-col ">
        <div className="flex justify-center p-5 gap-5">
          <div className="flex w-1/3 max-md:w-full flex-col">
            <h1>Categorias</h1>
            <span>Mujer</span>
            <span>Hombre</span>
            <span>Unisex</span>
            <span>Shoes</span>
            <span>Accesorios</span>
          </div>
          <div className=" max-md:w-full flex w-1/3 flex-col">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Store</span>
            <span>compare</span>
            <span>Cookies</span>
          </div>
        </div>
        <div className="flex w-2/3 max-md:w-full max-md:p-4 gap-5 justify-center">
          <div className="flex flex-col ">
            <h1>Nosotros</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A facere
              porro minus placeat libero vel ducimus at ipsum esse? Enim,
              laborum officiis voluptate at similique obcaecati quia ex.
              Voluptas, labore!
            </p>
          </div>
          <div className="flex flex-col ">
            <h1>Contacto</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              atque ullam modi quo eos tempora. Quia voluptate, totam laudantium
              quam voluptates vel sequi asperiores cupiditate at id minima
              provident.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between max-md:flex-col-reverse ">
        <div className="flex items-center gap-1 ">
          <h1 className="text-blue-700">RACOON</h1>
          <span>© Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="flex justify-end max-md:justify-center">
          <img className="w-4/5" src="img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
