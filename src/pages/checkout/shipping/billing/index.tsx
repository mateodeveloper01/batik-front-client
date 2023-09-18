import React from "react";
import { Button, Flex, Box, Container, Checkbox, Text } from "@chakra-ui/react";
import CartCheckout from "~/components/checkout/CartCheckout";
import { useState } from "react";
import CompleteForm from "~/components/checkout/billing/CompleteForm";
import IdentificationForm from "~/components/checkout/billing/IdentificationForm";
const Billing = () => {
  const [open, setOpen] = useState(false);

  return (
    <Flex justify={"center"}>
      <Box w={"40%"}>
        <Container>
          <Checkbox onChange={() => setOpen(!open)} py={10}>
            <Text fontSize={"xl"}>
              Mis datos de facturacion y entrega son los mismos
            </Text>
          </Checkbox>
          {!open ? <CompleteForm /> : <IdentificationForm />}
        </Container>
      </Box>
      <Box w={"25%"}>
        <CartCheckout />
      </Box>
    </Flex>
  );
};
Billing.layout = false;
export default Billing;
