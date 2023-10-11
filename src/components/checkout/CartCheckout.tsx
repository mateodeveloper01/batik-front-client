import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { PropStateProducts, type PropsItem } from "~/schemas/schemasProducts";
import { Stack, HStack } from "@chakra-ui/react";
import { PropStateOrder } from "~/schemas/schemasCheckout";
interface Prop {
  fixed?: Boolean;
}

const CartCheckout = ({ fixed = true }: Prop) => {
  const { shipping } = useSelector(
    (state: PropStateOrder) => state.order.order
  );
  const products = useSelector(
    (state: PropStateProducts) => state.cart.products
  );
  const totalPrice = () => {
    let total = 0;
    products.forEach(
      (item: PropsItem) => (total += item.quantity * item.price)
    );
    return total.toFixed(2);
  };
  return (
    <Stack
      // css={"position: fixed"}
      className={`${fixed ? "fixed" : ""}`}
      spacing="8"
      borderWidth="1px"
      rounded="lg"
      padding="8"
      width="350px"
    >
      <h1>Productos en el carrito</h1>
      {products?.map(
        ({ price, id, title, img, description, quantity }: PropsItem) => (
          <HStack key={id} className="flex items-center gap-5">
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
          </HStack>
        )
      )}
      {shipping ? (
        shipping.shippingMethod == "envio" ? (
          <div className="flex flex-col">
            <div className="flex items-center justify-between ">
              <span className="font-semibold">SUBTOTAL</span>
              <span className="text-xl">${totalPrice()}</span>
            </div>
            {shipping.shippingPrice && (
              <>
                <div className="flex items-center justify-between ">
                  <span className="font-semibold">ENVIO</span>
                  <span className="text-xl">${shipping.shippingPrice}</span>
                </div>
                <div className="flex items-center justify-between pt-5 font-semibold">
                  <span className="text-2xl">TOTAL</span>
                  <span className=" text-2xl">
                    ${Number(shipping.shippingPrice) + Number(totalPrice())}
                  </span>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-between font-semibold">
            <span>SUBTOTAL</span>
            <span className="text-xl">${totalPrice()}</span>
          </div>
        )
      ) : (
        <div className="flex items-center justify-between ">
          <span className="font-semibold">SUBTOTAL</span>
          <span className="text-xl">${totalPrice()}</span>
        </div>
      )}
    </Stack>
  );
};

export default CartCheckout;
