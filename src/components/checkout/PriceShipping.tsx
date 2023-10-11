import {
  Box,
  Button,
  Checkbox,
  Flex,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShipping } from "~/redux/orderReducer";
import { PropStateOrder } from "~/schemas/schemasCheckout";

function PriceShipping({
  optionA,
  optionB,
}: {
  optionA: number;
  optionB: number;
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleCheckboxChange = (value: any) => {
    if (value === selectedOption) {
      setSelectedOption(null); // Deseleccionar si ya está seleccionado
    } else {
      setSelectedOption(value); // Seleccionar la nueva opción
    }
  };
  const order = useSelector((state: PropStateOrder) => state.order.order);
   
  const setPrice = () => {
    // console.log();
    dispatch(setShipping({...order.shipping,shippingPrice:selectedOption}));
    // console.log(selectedOption);
    router.push("/checkout/payout");
  };
  return (
    <Box>
      <VStack
        align="start"
        spacing={4}
        border={"1px"}
        p={4}
        rounded={"3xl"}
        mt={10}
      >
        <Checkbox
          size={"lg"}
          key={optionA}
          value={optionA}
          isChecked={selectedOption === optionA}
          onChange={() => handleCheckboxChange(optionA)}
        >
          <Text fontSize={"xl"}>
            Envio a domicilo (Correo argentino){" "}
            <Text fontWeight={"bold"}>${optionA}</Text>
          </Text>
        </Checkbox>
        <Checkbox
          key={optionB}
          value={optionB}
          isChecked={selectedOption === optionB}
          onChange={() => handleCheckboxChange(optionB)}
        >
          <Text fontSize={"xl"}>
            Retira por la Sucursal (Correo argentino){" "}
            <Text fontWeight={"bold"}>${optionB}</Text>
          </Text>
        </Checkbox>
      </VStack>
      {selectedOption ? (
        <Flex justify={"end"}>
          <Button onClick={setPrice} my={4} mr={0} colorScheme="teal">
            Confirmar
          </Button>
        </Flex>
      ) : (
        <Flex justify={"end"}>
          <Button my={4} mr={0} colorScheme="gray">
            Confirmar
          </Button>
        </Flex>
      )}
    </Box>
  );
}

export default PriceShipping;
