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
import { fieldValuesBilling, schemaBilling } from "~/schemas/schemasCheckout";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setBilling } from "~/redux/orderReducer";

const CompleteForm = () => {
  const router = useRouter();
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<fieldValuesBilling>({
    resolver: zodResolver(schemaBilling),
  });
  const onSubmit = (data: any) => {
    // console.log(data);
    dispatch(setBilling(data))
    router.push("/checkout/shipping/billing/payout");
  };
  const onError = (error: any) => {
    console.log({ error });
    router.push("/checkout/shipping/billing/payout");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Heading as={"h2"} size={"lg"} py={4}>
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
      <Heading mt={10} mb={4} as={"h3"} size={"md"}>
        Persona que pagara el pedido
      </Heading>
      <FormControl>
        <FormLabel>Nombre</FormLabel>
        <Input type="text" {...register("name")} />
        <FormHelperText>{errors.name?.message}</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Apellido</FormLabel>
        <Input type="text" {...register("surname")} />
        <FormHelperText>{errors.surname?.message}</FormHelperText>
      </FormControl>
      <ButtonGroup>
        <FormControl w={"40%"}>
          <FormLabel>Cod. Area</FormLabel>
          <Input type="number" {...register("phone_area_code")} />
          <FormHelperText>{errors.phone_area_code?.message}</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Telefono</FormLabel>
          <Input type="number" {...register("phone_num")} />
          <FormHelperText>{errors.phone_num?.message}</FormHelperText>
        </FormControl>
      </ButtonGroup>
      <Heading mt={10} mb={4} as={"h3"} size={"md"}>
        Domicilio de la persona que pagara el pedido
      </Heading>
      <FormControl>
        <FormLabel>Calle</FormLabel>
        <Input type="text" {...register("street_name")} />
        <FormHelperText>{errors.street_name?.message}</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Numero</FormLabel>
        <Input type="text" {...register("street_number")} />
        <FormHelperText>{errors.street_number?.message}</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel>Codigo Postal</FormLabel>
        <Input type="number" {...register("zip_code")} />
        <FormHelperText>{errors.zip_code?.message}</FormHelperText>
      </FormControl>
      <Flex justify={"end"}>
        <Button type="submit" my={4} mr={0} colorScheme="teal">
          Continuar
        </Button>
      </Flex>
      <DevTool control={control} />
    </form>
  );
};

export default CompleteForm;
