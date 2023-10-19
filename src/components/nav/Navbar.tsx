import Cart from "../Cart";
import Link from "next/link";
import { PropsCategories } from "~/schemas/schemasProducts";
import { getItem } from "~/api/api";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineUser } from "react-icons/ai";
import { Button, Flex, Image } from "@chakra-ui/react";
import NavBarButton from "./NavBarButton";
const Navbar = () => {
  const { data, isLoading } = useQuery<PropsCategories[]>({
    queryKey: ["categories"],
    queryFn: () => getItem("/categories"),
  });
  return (
    <div>
      <div className="flex flex-col items-center max-md:hidden">
        <div className="flex w-screen justify-center bg-slate-200 ">
          <p className="font-semibold">
            15%OFF en efectivo y 3 Cuotas S/Interés
          </p>
        </div>
        <div
          className={`flex w-screen max-w-[1310px]  items-center justify-between `}
        >
          <div className="flex-grow basis-0"></div>
          <div className="py-2 text-3xl font-semibold ">
            <Link href="/">
              <Image src="/batik-logo.jpg" alt="batik logo" h={"80px"} />
            </Link>
          </div>
          <div className="flex flex-grow basis-0 justify-end">
            <Link
              href="/acount"
              className="rounded-md px-2 pt-2 hover:bg-gray-200"
            >
              <AiOutlineUser className="text-3xl text-black" />
            </Link>
            <Cart />
          </div>
        </div>
        <div className="flex w-screen max-w-[1310px] justify-center gap-4 py-4">
          {data?.map((item: PropsCategories) => (
            <Button key={item._id} variant="link">
              <Link href={`/products/${item.title}`} className="capitalize">
                {item.title}
              </Link>
            </Button>
          ))}
        </div>
      </div>
      <Flex
        display={{ md: "none", base: "flex" }}
        justify={"space-between"}
        alignItems={"center"}
        w={"100vw"}
        px={2}
      >
        <div className="flex-grow basis-0">
          <NavBarButton />
        </div>
        <div>
          <div className=" text-3xl font-semibold">
            <Link href="/">
              <Image src="/batik-logo.jpg" alt="batik logo" h={"60px"} />
            </Link>
          </div>
        </div>
        <div className="flex flex-grow basis-0 justify-end">
          <Cart />
        </div>
      </Flex>
    </div>
  );
};

export default Navbar;
{
  /* <Button variant="link">
        <Link href="/">Home</Link>
      </Button>
      <Button variant="link">
        <Link href="/">About</Link>
      </Button>
      <Button variant="link">
        <Link href="/">Contact</Link>
      </Button>
      <Button variant="link">
        <Link href="/">Stores</Link>
      </Button> */
}
{
  /* <Button>
          <BsSearch className="text-2xl text-black" />
        </Button> */
}
{
  /* <div className="flex justify-center ">
<div
  className={`flex w-screen max-w-[1310px] flex-col items-center px-4 max-md:hidden `}
>
  <div></div>
  <div className="py-2 text-3xl font-semibold ">
    <Link href="/">
      <Image src="/batik-logo.jpg" alt="batik logo" h={"80px"} />
    </Link>
  </div>
  <div className="item-cent flex flex-grow basis-0 items-center justify-end gap-5">
    {/* <div className="flex items-center gap-3 text-2xl"> */
}
{
  /* <Button> */
}
//     <Link href="/acount" className="rounded-md p-2 hover:bg-gray-200">
//       <AiOutlineUser className="text-3xl text-black" />
//     </Link>
//     {/* </Button> */}
//     <Cart />
//     {/* </div> */}
//   </div>
//   <div
//     className={`flex  w-screen max-w-[1310px] items-center px-4 max-md:hidden `}
//   >
//     <div className="flex flex-grow basis-0 gap-5">
//       <div className="flex gap-5">
//         {data?.map((item: PropsCategories) => (
//           <Button key={item._id} variant="link">
//             <Link href={`/products/${item.title}`} className="capitalize">
//               {item.title}
//             </Link>
//           </Button>
//         ))}
//         <Button variant="link">
//           <Link href={`/products`}>Todos los productos</Link>
//         </Button>
//       </div>
//     </div>
//   </div>
// </div> */}
