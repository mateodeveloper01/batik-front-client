import {
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  ButtonGroup,
  Select,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  fieldValuesIdentification,
  schemaIdentification,
} from "~/schemas/schemasCheckout";
import { useRouter } from "next/router";
import { setBilling } from "~/redux/orderReducer";
import { useDispatch } from "react-redux";

const IdentificationForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<fieldValuesIdentification>({
    resolver: zodResolver(schemaIdentification),
  });
  const onSubmit = (data: any) => {
    dispatch(setBilling(data));
    router.push("/checkout/shipping/billing/payout");
  };
  const onError = (error: any) => {
    console.log({ error });
    // router.push("/checkout/shipping/billing/payout");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Heading mt={10} mb={4} as={"h3"} size={"lg"}>
        Datos de facturacion
      </Heading>
      <ButtonGroup w={"100%"}>
        <FormControl w={"40%"}>
          <FormLabel>DNI o CUIL</FormLabel>
          <Select placeholder="---" {...register("identification_type")}>
            <option value={"DNI"}>DNI</option>
            <option value={"CUIL"}>CUIL</option>
          </Select>
          <FormHelperText>{errors.identification_type?.message}</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Numero de identification</FormLabel>
          <Input type="number" {...register("identification_num")} />
          <FormHelperText>{errors.identification_num?.message}</FormHelperText>
        </FormControl>
      </ButtonGroup>
      <Flex justify={"end"}>
        <Button type="submit" my={4} mr={0} colorScheme="teal">
          Continuar
        </Button>
      </Flex>
      <DevTool control={control} />
    </form>
  );
};

export default IdentificationForm;
