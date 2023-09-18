import { useRef } from "react";
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
} from "@chakra-ui/react";
import Link from "next/link";
import axios from "axios";
import { env } from "~/env.mjs";
import { useSelector } from "react-redux";

import { PropStateOrder, PropStateUser } from "~/schemas/schemasCheckout";
const ButtonMp = () => {
  const finalRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const order = useSelector((state: PropStateOrder) => state.order.order);
  const email = useSelector(
    (state: PropStateUser) => state.user.user.data.data.email
  );
  const data = { ...order, user: { email } };
  return (
    <>
      <Button
        m={4}
        colorScheme="teal"
        mr={0}
        onClick={() => {
          console.log(data);
          
          axios
            .post(
              `${env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/mp/create-order`,
              data,
              { withCredentials: true }
            )
            .then((res) => {
              onOpen();
              window.open(res.data.url, "_blank");
            });
        }}
      >
        Terminar compra
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mercado Pago</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Si ya realisate el pago, as click aqui para ver el estado de tu
              pedido
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="pink" mr={3} onClick={() => {}}>
              <Link href={"/acount"}> Ver Estado del pedido</Link>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ButtonMp;
