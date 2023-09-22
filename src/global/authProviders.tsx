import { useState, type ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // const [validating, setValidating] = useState(true);
  const router = useRouter();
  const PROTECTED_ROUTES = ["/acount", "/checkout"];
  const user = useSelector((state: any) => state.user.user);
  const validateRoutes = (user: {} | null) => {
    if (!user && PROTECTED_ROUTES.includes(router.pathname)) {
      router.push("/acount/login");
    }
    if (!!user && router.pathname === "/acount/login") {
      router.push("/acount");
    }
    if (!!user && router.pathname === "/acount/register") {
      router.push("/acount");
    }
    // setTimeout(() => {
    //   setValidating(false);
    // }, 50);
  };

  useEffect(() => {
    validateRoutes(user);
  });

  return <>{children}</>;
};
