import { Button, Flex, Box, Container, Checkbox, Text } from "@chakra-ui/react";
import CartCheckout from "~/components/checkout/CartCheckout";
// import Shipping from "~/components/checkout/Shipping";
import Link from "next/link";
import ShippingForm from "~/components/checkout/ShippingForm";

const Shipping = () => {

  return (
    <Flex justify={"center"}>
      <Box w={"40%"}>
        <Container>
          <ShippingForm />
        </Container>
      </Box>
      <Box w={"25%"}>
        <CartCheckout />
      </Box>
    </Flex>
  );
};
Shipping.layout = false;

export default Shipping;
