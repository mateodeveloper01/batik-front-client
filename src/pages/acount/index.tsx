import { useSelector } from "react-redux";

const acount = () => {
  const user = useSelector((state: any) => state.user.user);
  if (user) {
    const { email } = user?.data?.user;
    return <div>{<span>Email: {email}</span>}</div>;
  }
  return <></>;
};

export default acount;
