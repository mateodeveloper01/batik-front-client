import {
  Heading,
  Card,
  Stack,
  Text,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Select,
} from "@chakra-ui/react";
const FormCredit = () => {
  return (
    <form className="pt-4">
      <FormControl>
        <Input type="email" placeholder="Numero de la targeta" />
        <FormHelperText>{}</FormHelperText>
      </FormControl>
      <Flex gap={2}>
        <FormControl>
          <Input type="email" placeholder="Titular de la targeta" />
          <FormHelperText>{}</FormHelperText>
        </FormControl>
        <FormControl>
          <Input type="email" placeholder="Vencimiento(MM/AA)" />
          <FormHelperText>{}</FormHelperText>
        </FormControl>
        <FormControl w={"40%"}>
          <Input type="email" placeholder="cvv" />
          <FormHelperText>{}</FormHelperText>
        </FormControl>
      </Flex>
      <FormControl>
        <Input type="email" placeholder="cuotas" />
        <FormHelperText>{}</FormHelperText>
      </FormControl>
      <Flex gap={2}>
        <FormControl w={"40%"}>
          <Select placeholder="DNI" />
          <FormHelperText>{}</FormHelperText>
        </FormControl>
        <FormControl>
          <Input type="email" placeholder="Documento del titular" />
          <FormHelperText>{}</FormHelperText>
        </FormControl>
      </Flex>
    </form>
  );
};
export default FormCredit