import { Card, Text, Flex, Box } from "@chakra-ui/react";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import FormCredit from "./form/FormCredit";
import { useState } from "react";
interface Prop {
  title: string;
  form: JSX.Element;
}
const CardPayout = ({ title, form }: Prop) => {
  const [hidden, setHidden] = useState(false);
  return (
    <Card borderWidth={1}>
      <Flex
        py={4}
        px={6}
        alignItems={"center"}
        justify={"space-between"}
        className={`cursor-pointer hover:bg-slate-100 ${
          hidden ? "bg-slate-100" : ""
        }`}
        onClick={() => {
          setHidden(!hidden);
        }}
      >
        {hidden ? (
          <Flex justify={"flex-start"} gap={2} align={"baseline"}>
            <AiOutlineLeft />
            <Text justifyContent={"center"}>{title}</Text>
          </Flex>
        ) : (
          <>
            <Flex alignItems={"center"} gap={5}>
              <BsFillCreditCard2BackFill />
              <Text>{title} </Text>
            </Flex>
            <AiOutlineRight />
          </>
        )}
      </Flex>
      <Box py={4} px={6} className={` ${hidden ? "" : "hidden"}`}>
        {form}
      </Box>
    </Card>
  );
};

export default CardPayout;
