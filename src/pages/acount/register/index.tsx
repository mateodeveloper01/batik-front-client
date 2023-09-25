import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { env } from "~/env.mjs";
import Link from "next/link";
import {
  Button,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";
const schema = z.object({
  username: z.string().min(6),
  email: z.string().email("Email invalido"),
  password: z.string().min(6),
});

type fieldValues = z.infer<typeof schema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<fieldValues>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
    axios
      .post(
        `${env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/auth/register`,
        data,
        {
          headers: {
            Authorization: "bearer " + env.NEXT_PUBLIC_API_TOKEN,
          },
        }
      )
      .then((data) => console.log(data));
  };
  const onError = (error: any) => console.log({ error });

  return (
    <div className="flex min-h-[50vh] w-full flex-col items-center justify-center gap-5">
      <h1 className="text-center">Registrar</h1>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="flex  w-1/4 flex-col items-center justify-center gap-5 [&>*]:w-full "
      >
        {/* <TextField
          helperText={errors.password?.message}
          error={errors.password ? true : false}
          label="username"
          {...register("username")}
        />
        <TextField
          helperText={errors.email?.message}
          error={errors.email ? true : false}
          label="Email"
          {...register("email")}
        />
        <TextField
          helperText={errors.password?.message}
          error={errors.password ? true : false}
          label="Password"
          //   type="password"
          {...register("password")}
        /> */}
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" {...register("email")} />
          <FormHelperText>{errors.email?.message}</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>username</FormLabel>
          <Input type="text" {...register("username")} />
          <FormHelperText>{errors.username?.message}</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" {...register("password")} />
          <FormHelperText>{errors.password?.message}</FormHelperText>
        </FormControl>
        <Button colorScheme="teal" type="submit">
          Registrarse
        </Button>
        <Button variant="link">
          <Link href={"/acount/login"}>
            Ya estas registrado?
            <br /><label className="text-[#319795]">Inicia sesion aqui</label>
          </Link>
        </Button>
        <DevTool control={control} />
      </form>
    </div>
  );
};

export default Register;
