import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";

function Header() {
  const loggedUser = localStorage.getItem("user");
  const router = useRouter();
  function logout() {
    localStorage.removeItem("user");
    router.push("/");
  }
  return (
    <div className={styles.header}>
      <p>Welcome {loggedUser}</p>
      <button onClick={logout} className={styles.signout}>
        Sign out
      </button>
    </div>
  );
}

export default Header;
