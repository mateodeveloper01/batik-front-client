import { Heading, Stack, Box } from "@chakra-ui/react";
import CardPayout from "./PayoutCard";
import { useState } from "react";
import InfoMp from "./form/InfoMp";
import ButtonPayment from "./ButtonPayment";
import { PropStateOrder } from "~/schemas/schemasCheckout";
import { useSelector } from "react-redux";

const PayoutForm = () => {
  const [hidden, setHidden] = useState(0);
  const order = useSelector((state: PropStateOrder) => state.order.order);
  const { shippingMethod } = order.shipping;

  const payoutMethods = [
    // { id: 1, title: "Tarjeta de credito y debito", form: <FormCredit /> },
    { id: 2, title: "Pago por el local", form: <></>, value: "paymentStore" },
    {
      id: 3,
      title: "Transferencia / Deposito / Dinero mercadoPago",
      form: <>Se enviaran los datos de transferencia al confirmar la compra</>,
      value: "transfer",
    },
    {
      id: 4,
      title: "Mercado Pago",
      form: <InfoMp />,
      value: "mp",
    },
  ];
  return (
    <Stack spacing={3}>
      <Heading textTransform={"uppercase"} pt={8} pb={4} size={"lg"}>
        Medios de pago
      </Heading>
      {payoutMethods.map((options) => {
        const { id, title, form } = options;
        return (
          <Box
            key={id}
            className={`${hidden !== id && hidden !== 0 && "hidden"} ${
              shippingMethod == "envio" && id === 2 && "hidden"
            }`}
            onClick={() => {
              if (hidden == id) {
                setHidden(0);
              } else {
                setHidden(id);
              }
            }}
          >
            <CardPayout title={title} form={form} />
          </Box>
        );
      })}
      <div className=" flex w-full items-end justify-end ">
        {hidden !== 0 && (
          <ButtonPayment
            method={
              payoutMethods.filter((method) => method.id === hidden)[0].value
            }
          />
        )}
      </div>
    </Stack>
  );
};

export default PayoutForm;
