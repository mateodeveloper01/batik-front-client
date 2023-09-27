import {
  Card,
  Text,
  Flex,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  StackDivider,
  Stack,
} from "@chakra-ui/react";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import axios from "axios";
import { env } from "~/env.mjs";
import ListCreditCard from "~/components/ListCreditCard";
import ListDebitCard from "~/components/ListDebitCard";

const InfoMp = () => {
  return (
    <Stack divider={<StackDivider />} spacing="6" pt={2}>
      <Flex gap={3} direction={"column"}>
        <Text fontSize={"sm"}>
          Utilizando la opcion de pagar a traves de Mercado Pago seras
          redirigido y podras pagar de las siguientes formas
        </Text>
        <Flex align={"center"} gap={2}>
          <CiCreditCard1 />
          <Text as="b">Targetas de credito</Text>
        </Flex>
        <ListCreditCard />
      </Flex>
      <Flex gap={3} direction={"column"}>
        <Flex align={"center"} gap={2}>
          <CiCreditCard1 />
          <Text as="b">Targetas de debito</Text>
        </Flex>
        <ListDebitCard />
      </Flex>
    </Stack>
  );
};

export default InfoMp;
