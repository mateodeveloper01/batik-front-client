import { BiLogoFacebookSquare } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
const Contact = () => {
  return (
    <div className="bg-contact flex h-20 items-center justify-around text-white">
      <div className="flex items-center gap-4">
        <span>Para estar en contacto con nosotros y resivir novedades</span>
        <div className="border-none ">
          <input
            type="text"
            className="rounded-l p-2"
            placeholder=" Escriba su E-mail..."
          />
          <button className="rounded-r bg-black p-2 ">Enviar</button>
        </div>
      </div>
      <div className="flex gap-2 text-2xl">
        <BiLogoFacebookSquare  />
        <AiOutlineInstagram />
        <FaTwitterSquare />
        <AiOutlineGoogle />
        <BsPinterest />
      </div>
    </div>
  );
};

export default Contact;
