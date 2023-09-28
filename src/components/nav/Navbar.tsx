import Cart from "../Cart";
import Link from "next/link";
import { PropsCategories } from "~/schemas/schemasProducts";
import { getItem } from "~/api/api";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineUser } from "react-icons/ai";
import { Button, Flex } from "@chakra-ui/react";
import NavBarButton from "./NavBarButton";
const Navbar = () => {
  const { data, isLoading } = useQuery<PropsCategories[]>({
    queryKey: ["categories"],
    queryFn: () => getItem("/categories"),
  });
  return (
    <>
      <div className={`h-[80px] flex items-center px-4 max-md:hidden `}>
        <div className="flex flex-grow basis-0 gap-5">
          <div className="flex gap-5">
            {data?.map((item: PropsCategories) => (
              <Button key={item._id} variant="link">
                <Link href={`/products/${item.title}`} className="capitalize">
                  {item.title}
                </Link>
              </Button>
            ))}
            <Button variant="link">
              <Link href={`/products`}>Todos los productos</Link>
            </Button>
          </div>
        </div>
        <div className="">
          <div className=" text-3xl font-semibold">
            <Link href="/">Batik Moda</Link>
          </div>
        </div>
        <div className="item-cent flex flex-grow basis-0 items-center justify-end gap-5">
          <div className="flex items-center gap-3 text-2xl">
            <Button>
              <Link href="/acount">
                <AiOutlineUser className="text-2xl text-black" />
              </Link>
            </Button>

            <Cart />
          </div>
        </div>
      </div>
      <Flex display={{ md: "none",base:'flex' }} justify={"space-between"} p={2}>
        <NavBarButton />
        <div>
          <div className=" text-3xl font-semibold">
            <Link href="/">Batik Moda</Link>
          </div>
        </div>
        <Cart />
      </Flex>
    </>
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
