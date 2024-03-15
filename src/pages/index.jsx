import LoginForm from "@/components/LoginForm";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState("");
  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    setUser(loggedUser);
    if (loggedUser) {
      router.push("/posts");
    }
  }, []);
  return !user && <LoginForm />;
}
