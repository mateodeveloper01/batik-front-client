import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, resetCart, totalPrice } from "../redux/cartReducer";
import { type PropsItem } from "~/schemas/schemasProducts";
import Link from "next/link";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const price = useSelector((state) => totalPrice(state.cart.products));

  return (
    <div className="z-99 absolute right-5 top-20 flex flex-col gap-4 bg-white p-5 shadow-lg">
      <h1>Productos en el carrito</h1>
      {products?.map(
        ({ price, id, title, img, description, quantity }: PropsItem) => (
          <div key={id} className="flex items-center gap-5">
            <img
              className="h-[100px] w-[80px] cursor-pointer object-cover"
              src={img}
              alt=""
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
              className="cursor-pointer text-red-600"
            />
          </div>
        )
      )}
      <div className="flex items-center justify-between font-semibold">
        <span>SUBTOTAL</span>
        <span className="text-xl">${price}</span>
      </div>

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
    </div>
  );
};

export default Cart;
