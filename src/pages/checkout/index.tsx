import { Button, Flex, Stack, HStack } from "@chakra-ui/react";
import CartCheckout from "~/components/checkout/CartCheckout";

import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { PropStateProducts, PropsItem } from "~/schemas/schemasProducts";
import { setProducts } from "~/redux/orderReducer";

const CartContainer = () => {
  const products = useSelector(
    (state: PropStateProducts) => state.cart.products
  );
  const dispatch = useDispatch();
  const totalPrice = () => {
    let total = 0;
    products.forEach(
      (item: PropsItem) => (total += item.quantity * item.price)
    );
    return total.toFixed(2);
  };

  const onSubmit =()=>{
    dispatch(setProducts(products))
  }

  return (
    <Flex pt={10} align={"center"} direction={"column"}>
      <Stack
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
        <div className="flex items-center justify-between font-semibold">
          <span>SUBTOTAL</span>
          <span className="text-xl">${totalPrice()}</span>
        </div>
      </Stack>
      <Flex justify={"end"} width="350px">
        <Button onClick={onSubmit} my={4} mr={0} colorScheme="teal">
          <Link href={"/checkout/shipping"}> Continuar</Link>
        </Button>
      </Flex>
    </Flex>
  );
};
CartContainer.layout = false;
export default CartContainer;
