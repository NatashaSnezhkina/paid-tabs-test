import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "./Header";

function Auth(WrappedComponent) {
  return function WithAuthComponent(props) {
    const [user, setUser] = useState("");

    const router = useRouter();
    useEffect(() => {
      const loggedUser = localStorage.getItem("user");
      setUser(loggedUser);

      if (!loggedUser) {
        router.push("/");
      }
    }, []);

    if (user) {
      return (
        <>
          <Header />
          <WrappedComponent {...props} />
        </>
      );
    }
  };
}

export default Auth;
