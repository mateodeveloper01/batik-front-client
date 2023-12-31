import { Box, Card, StackDivider, Stack, Text } from "@chakra-ui/react";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { AiOutlineUser } from "react-icons/ai";

import { useSelector } from "react-redux";
import { PropStateOrder } from "~/schemas/schemasCheckout";

const BilingInfo = () => {
  const order = useSelector((state: PropStateOrder) => state.order.order);
  const email = useSelector((state: any) => state.user.user.email);

  if (order.shipping.shippingMethod == "envio") {
    const {
      street_name,
      street_number,
      zip_code,
      city,
      province,
      phone_number,
      phone_area_code,
    } = order.shipping;
    return (
      <Card borderWidth="1px" p={4}>
        <Stack divider={<StackDivider />} spacing={2}>
          <Box className="flex items-center gap-4">
            <HiOutlineMail className="text-2xl" />
            <Text>{email}</Text>
          </Box>

          <>
            <Box className="flex items-center gap-4">
              <LiaShippingFastSolid className="text-2xl" />
              <Box>
                <Text>{`${street_name} ${street_number}`}</Text>
                <Text>{`CP ${zip_code}`}</Text>
                <Text>{`${city}, ${province} +54${phone_area_code}${phone_number}`}</Text>
              </Box>
            </Box>
            <Box className="flex items-center gap-4">
              <IoLocationOutline className="text-2xl" />
              <Box>
                <p>Llega el viernes 08/09 y lunes 11/09</p>
                <p>$2530,46 - Correo argentino clasico - Envio a domicilio</p>
              </Box>
            </Box>
          </>
        </Stack>
      </Card>
    );
  }
  return (
    <Card borderWidth="1px" p={4}>
      <Stack divider={<StackDivider />} spacing={2}>
        <Box className="flex items-center gap-4">
          <AiOutlineUser className="text-2xl" />
          <Text>
            {order.shipping.name} {order.shipping.surname}
          </Text>
        </Box>
        <Box className="flex items-center gap-4">
          <HiOutlineMail className="text-2xl" />
          <Text>{email}</Text>
        </Box>
        <Box className="flex items-center gap-4">
          <LiaShippingFastSolid className="text-2xl" />
          <Text>Retira por el local</Text>
        </Box>
      </Stack>
    </Card>
  );
};

export default BilingInfo;
