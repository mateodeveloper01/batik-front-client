import {
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  ButtonGroup,
  Select,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import provinceList from "~/global/provinceList";
import { DevTool } from "@hookform/devtools";
import { fieldValuesShipment, schemaShipment } from "~/schemas/schemasCheckout";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setShipping } from "~/redux/orderReducer";

const ShippingForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<fieldValuesShipment>({
    resolver: zodResolver(schemaShipment),
  });
  const dispatch = useDispatch()
  const onSubmit = (data: any) => {
 
    dispatch(setShipping(data))
    router.push('/checkout/shipping/billing')
  };
  const onError = (error: any) => {
    console.log({ error })
    // router.push('/checkout/shipping/billing')

  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Heading my={5} as={"h2"} size={"lg"}>
        Datos del destinatario
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
      <ButtonGroup w={"100%"}>
        <FormControl w={"40%"}>
          <FormLabel>Cod. Area</FormLabel>
          <Input type="number" {...register("phone_area_code")} />
          <FormHelperText>{errors.phone_area_code?.message}</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Telefono</FormLabel>
          <Input type="number" {...register("phone_number")} />
          <FormHelperText>{errors.phone_number?.message}</FormHelperText>
        </FormControl>
      </ButtonGroup>
      <Heading mt={10} mb={4} as={"h3"} size={"lg"}>
        Domicilio del destinatario
      </Heading>
      <FormControl>
        <FormLabel>Calle</FormLabel>
        <Input type="text" {...register("street_name")} />
        <FormHelperText>{errors.street_name?.message}</FormHelperText>
      </FormControl>
      <ButtonGroup w={"full"}>
        <FormControl>
          <FormLabel>Altura</FormLabel>
          <Input type="number" {...register("street_number")} />
          <FormHelperText>{errors.street_number?.message}</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Departamento (Opcional)</FormLabel>
          <Input type="text" {...register("department")} />
          <FormHelperText>{errors.department?.message}</FormHelperText>
        </FormControl>
      </ButtonGroup>
      <ButtonGroup w={"full"}>
        <FormControl>
          <FormLabel>Codigo Postal</FormLabel>
          <Input type="number" {...register("zip_code")} />
          <FormHelperText>{errors.zip_code?.message}</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Provincia</FormLabel>
          <Select placeholder={"---"} {...register("province")}>
            {provinceList.map((i: string) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </Select>
          <FormHelperText>{errors.province?.message}</FormHelperText>
        </FormControl>
      </ButtonGroup>
      <FormControl>
        <FormLabel>Ciudad</FormLabel>
        <Input type="text" {...register("city")} />
        <FormHelperText>{errors.city?.message}</FormHelperText>
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

export default ShippingForm;
