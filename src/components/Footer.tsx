import { useQuery } from "@tanstack/react-query";
import ListCreditCard from "./ListCreditCard";
import { PropsCategories } from "~/schemas/schemasProducts";
import { getItem } from "~/api/api";
import { Text } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  const { data, isLoading } = useQuery<PropsCategories[]>({
    queryKey: ["categories"],
    queryFn: () => getItem("/categories"),
  });
  return (
    <div className="flex justify-center">
      <div className="w-screen max-w-[1310px] px-10 pb-20 pt-32 max-md:px-2 max-md:pt-4">
        <div className="flex h-max gap-5 max-md:flex-col">
          <div className=" flex w-1/3  gap-5 max-md:w-1/2">
            <div className="flex  flex-col max-md:w-full max-md:p-4">
              <h1>Categorias</h1>
              {isLoading ? (
                <></>
              ) : (
                data.map((item) => (
                  <Link href={`/products/${item.title}`}>
                    <Text textTransform="capitalize">{item.title}</Text>
                  </Link>
                ))
              )}
            </div>
            {/* <div className=" flex  flex-col max-md:w-full">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Store</span>
            <span>compare</span>
            <span>Cookies</span>
          </div> */}
          </div>
          <div className="flex w-2/3 justify-center  gap-5 max-md:w-full max-md:p-4">
            <div className="flex h-32 flex-col ">
              <h1>Nosotros</h1>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                facere porro minus placeat libero vel ducimus at ipsum esse?
                Enim, laborum officiis voluptate at similique obcaecati quia ex.
                Voluptas, labore!
              </p>
            </div>
            <div className="flex flex-col ">
              <h1>Contacto</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                libero atque ullam modi quo eos tempora. Quia voluptate, totam
                laudantium quam voluptates vel sequi asperiores cupiditate at id
                minima provident.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-10 max-md:flex-col-reverse ">
          <div className="flex items-center gap-4 ">
            <h1 className="text-blue-700">BATIK</h1>
            <span>© Copyright 2023. All Rights Reserved</span>
          </div>
          <div className="flex items-center justify-end max-md:justify-center max-md:pb-10">
            {/* <img className="w-4/5" src="img/payment.png" alt="" /> */}
            <div className="max-md:hidden">
              <ListCreditCard w={9} h={7} />
            </div>
            <div className="md:hidden">
              <ListCreditCard w={5} h={4} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
