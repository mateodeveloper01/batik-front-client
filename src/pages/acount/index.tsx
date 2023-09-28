import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getItem } from "~/api/api";
import {
  Container,
  Flex,
  Heading,
  Text,
  Box,
  Card,
  Image,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { PropOrder } from "~/schemas/schemaOrder";
import { PropStateUser } from "~/schemas/schemasCheckout";

const Acount = () => {
  const { email, username } = useSelector((state:PropStateUser) => {
    return state.user.user;
  });
  const { data, isLoading } = useQuery<PropOrder[]>({
    queryKey: ["orders"],
    queryFn: () => getItem(`/orders/${email}`),
  });
  return (
    <Container maxW={"container.md"} pt={20}>
      <Flex>
        <Box w="50%">
          <Heading size={"md"}>Inforamcion del usuario</Heading>
          <Text fontSize={"xl"}>Email: {email}</Text>
          <Text fontSize={"xl"}>Nombre de usuario: {username}</Text>
        </Box>
        <Box w="50%">
          {!data || data.length === 0 ? (
            <Text></Text>
          ) : (
            <>
              <Heading size={"md"}>Pedidos</Heading>
              <Flex gap={3} direction={"column"} pt={3}>
                {data.map((order: PropOrder) => {
                  const { payer, paymentStatus, products, shipments, _id } =
                    order;
                  if (paymentStatus == "cancel") {
                    return <></>;
                  }
                  return (
                    <Card
                      css={"display:flex flex-direction:column"}
                      p={2}
                      key={_id}
                    >
                      <Stack divider={<StackDivider />} spacing="4">
                        <Text fontSize={"xl"}>
                          Comprador: {payer.first_name} {payer.last_name}
                        </Text>
                        <Box fontSize={"xl"}>
                          <Text>Productos:</Text>
                          {products.map((prod) => (
                            <Flex
                              key={prod.id}
                              justify={"center"}
                              gap={10}
                              align={"center"}
                            >
                              <Text>
                                {prod.quantity} x {prod.title}
                              </Text>
                              <Image w={"50px"} src={prod.picture_url} />
                            </Flex>
                          ))}
                        </Box>
                        <Box>
                          <Text fontSize={"xl"}>Direccion de envio:</Text>
                          <Text fontSize={"xl"}>
                            {shipments.city_name} {shipments.state_name}
                          </Text>
                          <Text fontSize={"xl"}>
                            Calle: {shipments.street_name} N{" "}
                            {shipments.street_number}
                          </Text>
                        </Box>
                        <Text fontSize={"xl"}>
                          Estado del pedido:{" "}
                          {paymentStatus == "success" && "Pago"}
                          {paymentStatus == "pending" && "Pendiente"}
                        </Text>
                        {paymentStatus == "success" && (
                          <Text fontSize={"xl"}>
                            Estado del envio: Pendiente
                          </Text>
                        )}
                      </Stack>
                    </Card>
                  );
                })}
              </Flex>
            </>
          )}
        </Box>
      </Flex>
    </Container>
  );
};

export default Acount;
