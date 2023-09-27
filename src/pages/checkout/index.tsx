import { Flex, Box, Container } from "@chakra-ui/react";
import CartCheckout from "~/components/checkout/CartCheckout";
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
