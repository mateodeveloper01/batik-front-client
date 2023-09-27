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

import { PropStateOrder } from "~/schemas/schemasCheckout";
const ButtonPayment = ({ method }: { method: string }) => {
  const finalRef = useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const order = useSelector((state: PropStateOrder) => state.order.order);
  const { shippingMethod } = order.shipping;

  const email = useSelector((state: any) => state.user.user.email);
  const data = { ...order, user: { email }, paymentMethod: method };
  return (
    <>
      <Button
        m={4}
        colorScheme="teal"
        mr={0}
        onClick={() => {
          axios
            .post(
              `${env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/mp/create-order`,
              data,
              { withCredentials: true }
            )
            .then((res) => {
              onOpen();
              res.data.url && window.open(res.data.url, "_blank");
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
            {method === "mp" && shippingMethod == "envio" && (
              <Text>
                Si ya realisate el pago, as click aqui para ver el estado de tu
                pedido
              </Text>
            )}
            {method === "mp" && shippingMethod == "retiro" && (
              <Text>
                Si ya realisate el pago, te esperamos en el local para retirar
                el pedido
              </Text>
            )}
            {method === "transfer" && shippingMethod == "envio" && (
              <Text>
                Te enviamos a tu correo los datos de transferecia, tienes un
                lapso de 24 horas
              </Text>
            )}
            {method === "transfer" && shippingMethod == "retiro" && (
              <Text>
                Te enviamos a tu correo los datos de transferecia, tienes un
                lapso de 24 horas
              </Text>
            )}
            {method === "paymentStore" && shippingMethod == "retiro" && (
              <Text>Tu pedido fue reservado , te esperamos en el local</Text>
            )}
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

export default ButtonPayment;
