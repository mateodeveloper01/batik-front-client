import { Heading, Stack, Box, Button } from "@chakra-ui/react";
import CardPayout from "./PayoutCard";
import FormCredit from "./form/FormCredit";
import { useState } from "react";
import FormMp from "./form/FormMp";
import Link from "next/link";
import ButtonMp from "./ButtonMp";

const PayoutForm = () => {
  const [hidden, setHidden] = useState(0);
  const payoutMethods = [
    // { id: 1, title: "Tarjeta de credito y debito", form: <FormCredit /> },
    // { id: 2, title: "Rapipago o Pago facil", form: <FormCredit /> },
    // {
    //   id: 3,
    //   title: "Transferencia / Deposito / Dinero mercadoPago",
    //   form: <FormCredit />,
    // },
    {
      id: 4,
      title: "Mercado Pago",
      form: <FormMp />,
    },
  ];
  console.log(hidden);
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
            className={`${hidden !== id && hidden !== 0 && "hidden"}`}
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
        {hidden === 0 && (
          <Button m={4} colorScheme="gray" mr={0}>
            Terminar compra
          </Button>
        )}
        {hidden == 4 && (
          <ButtonMp/>
        )}
      </div>
    </Stack>
  );
};

export default PayoutForm;
