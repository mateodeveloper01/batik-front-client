import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart, totalPrice } from "../redux/cartReducer";
import { PropStateProducts, type PropsItem } from "~/schemas/schemasProducts";
import Link from "next/link";
import { BiShoppingBag } from "react-icons/bi";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Card,
  Flex,
  Image,
} from "@chakra-ui/react";
const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const products = useSelector(
    (state: PropStateProducts) => state.cart.products
  );
  const dispatch = useDispatch();

  return (
    <>
      <div
        onClick={onOpen}
        className="relative cursor-pointer rounded-md p-2 hover:bg-gray-200"
      >
        <BiShoppingBag className="text-2xl" />
        <span className="cart ">{products.length}</span>
      </div>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Productos en el carrito</DrawerHeader>
          <DrawerBody>
            {products?.map(
              ({ price, id, title, img, description, quantity }: PropsItem) => (
                <Card key={id}>
                  <Flex
                    p={2}
                    gap={4}
                    align={"center"}
                    justify={"space-between"}
                  >
                    <Image
                      className="h-[100px] w-[80px] cursor-pointer object-cover"
                      src={img}
                      alt={title}
                    />
                    <div>
                      <h1>{title}</h1>
                      <p>{description.substring(0, 50)}</p>
                      <div className="color-celeste">
                        {quantity} x ${price}
                      </div>
                    </div>
                    <RiDeleteBin6Line
                      onClick={() => dispatch(removeItem(id))}
                      className="cursor-pointer text-2xl text-red-600"
                    />
                  </Flex>
                </Card>
              )
            )}
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Link href={"/checkout"}>
              <Button colorScheme="pink" variant="solid">
                Terminar compra
              </Button>
            </Link>
            {/* <Button colorScheme="pink">Terminar Compra</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {/* <Drawer isOpen={isOpen} onClose={onClose}>
        <Link className="flex w-full justify-center" href={"/checkout"}>
          <Button w={"full"} colorScheme="pink" variant="solid">
            Terminar compra
          </Button>
        </Link>

        <Button
          colorScheme="red"
          variant={"ghost"}
          onClick={() => dispatch(resetCart(""))}
        >
          Reiniciar carrito
        </Button>
      </Drawer> */}
    </>
  );
};

export default Cart;
