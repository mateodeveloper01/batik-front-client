import {
  Checkbox,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container>
      <Heading size={"xl"}>Datos de contacto</Heading>
      <FormControl pt={2}>
        <FormLabel>Email</FormLabel>
        <Input type="email" />
        <FormHelperText>{}</FormHelperText>
      </FormControl>
      <FormControl pt={2}>
        {/* <FormLabel>Email</FormLabel> */}
        <Checkbox colorScheme="teal" type="checkbox">
          Quiero recibir ofertas y novedades por email
        </Checkbox>
        <FormHelperText>{}</FormHelperText>
      </FormControl>
    </Container>
  );
};

export default Contact;
