import { Flex, Box, Container } from "@chakra-ui/react";
import BilingInfo from "~/components/checkout/payout/BilingInfo";
import CartCheckout from "~/components/checkout/CartCheckout";
import PayoutForm from "~/components/checkout/payout/PayoutForm";
import FormMp from "~/components/checkout/payout/form/FormMp";

export default function Payout() {
  return (
    <Flex justify={"center"} pt={10} gap={4}>
      <Box w={"40%"} px={4}>
        <BilingInfo />
        {/* <Container className=" flex w-full items-end justify-end "> */}
        {/* <FormMp /> */}
        {/* </Container> */}
        <PayoutForm />
      </Box>
      <Box w={"25%"}>
        <CartCheckout />
      </Box>
    </Flex>
  );
}
Payout.layout = false;
