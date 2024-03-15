import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/LoginForm.module.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  function signIn(event) {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!username | !password) {
      setError("Please fill in both username and password");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      if (username === "Liam" && password === "123123") {
        localStorage.setItem("user", username);
        router.push("/posts");
      } else {
        setError("Username or password is incorrect");
      }
      setLoading(false);
    }, 2000);
  }

  console.log(loading, !username, !password);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Sign in to PaidTabs</h1>
      <form onSubmit={signIn} className={styles.container} method="POST">
        <label className={styles.inputGroup} htmlFor="username">
          Username or Email
          <input
            id="username"
            name="username"
            type="text"
            className={`${styles.input} ${error && styles.error}`}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder={
              error ? "Please fill in username" : "Username or Email"
            }
            required
            minLength="2"
          ></input>
        </label>

        <label htmlFor="password" className={styles.inputGroup}>
          Password
          <input
            name="password"
            id="password"
            type="password"
            className={`${styles.input} ${error && styles.error}`}
            value={password}
            placeholder={error ? "Please fill in password" : "Password"}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="2"
          ></input>
        </label>

        {error && <p className={styles.error}>{error}</p>}

        <button
          type="submit"
          className={styles.button}
          disabled={loading | !username | !password}
        >
          {loading && <div className={styles.spinner} />}
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
export default LoginForm;
