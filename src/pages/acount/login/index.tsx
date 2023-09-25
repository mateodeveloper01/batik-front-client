import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { env } from "~/env.mjs";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setUser } from "~/redux/authReducer";
import {
  Button,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";
const schema = z.object({
  email: z.string().email("Email invalido"),
  password: z.string().min(6),
});

type fieldValues = z.infer<typeof schema>;

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<fieldValues>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: any) => {
    axios
      .post(`${env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/auth/login`, data, {
        withCredentials: true,
      })
      .then((res) => dispatch(setUser(res.data.data)));
  };
  const onError = (error: any) => console.log({ error });

  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center justify-center gap-5">
      <h1 className="text-center">Iniciar secion</h1>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="flex  w-1/4 flex-col items-center justify-center gap-5 [&>*]:w-full "
      >
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" {...register("email")} />
          <FormHelperText>{errors.email?.message}</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" {...register("password")} />
          <FormHelperText>{errors.password?.message}</FormHelperText>
        </FormControl>
        <Button colorScheme="teal" type="submit">
          Iniciar sesion
        </Button>
        <Button variant="link">
          <Link href={"/acount/register"}>
            Aun no estas registrado?
            <br />
            <label className="text-[#319795]">Registrarse aqui</label>
          </Link>
        </Button>
        <DevTool control={control} />
      </form>
    </div>
  );
};

export default Login;
