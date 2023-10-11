// import { Link } from "react-router-dom";

import Link from "next/link";

const Categories = () => {
  return (
    <div className="parent w-img h-[70vh] max-md:h-[40vh] px-2 my-10 max-md:py-12">
      <div className="div2 ">
        <img className="img-category" src="./img/category6.jpg" alt="" />
        <button className="button-category">
          <Link className="link" href="/products/1">
            Pantalones
          </Link>
        </button>
      </div>
      <div className="div3 ">
        <img className="img-category" src="./img/category4.jpg" alt="" />
        <button className="button-category">
          <Link className="link" href="/products/1">
            Skate
          </Link>
        </button>
      </div>
      <div className="div4 ">
        <img className="img-category" src="./img/category7.jpg" alt="" />
        <button className="button-category">
          <Link className="link" href="/products/1">
            Hombre
          </Link>
        </button>
      </div>
      <div className="div5 ">
        <img className="img-category" src="./img/category5.jpg" alt="" />
        <button className="button-category">
          <Link className="link" href="/products/1">
            remeras
          </Link>
        </button>
      </div>
      <div className="div6 ">
        <img className="img-category" src="./img/category1.jpg" alt="" />
        <button className="button-category">
          <Link className="link" href="/products/1">
            nueva temporada
          </Link>
        </button>
      </div>
      <div className="div7 ">
        <img className="img-category" src="./img/category3.jpg" alt="" />
        <button className="button-category">
          <Link className="link" href="/products/1">
            Sale
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Categories;
