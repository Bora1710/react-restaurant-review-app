import { useState } from "react";
import styles from "./Login.module.css";
import restaurnatImage from "../../assets/images/019a0242b61b695b45ca70321ca186a0.jfif";
import { useNavigate } from "react-router-dom";
import { User } from "../../models/user";

export default function Login() {
  const [formData, setFormData] = useState({ userName: "", password: "" });
  const [userData, setUserData] = useState<User>({
    id: "",
    password: "",
    userName: "",
    role: 0,
  });
  const navigate = useNavigate();

  function handleFormChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.isSuccess) {
          setUserData(res.payLoad.user);
          navigate("/restaurants");
          localStorage.setItem("token", res.payLoad.token);
        }
      })
      .catch((error) => console.error("Error:", error));
  }

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.backgroundImage}
        src={restaurnatImage}
        alt="Restaurant-img"
      />
      <form onSubmit={handleSubmit}>
        <h2>Welcome !</h2>
        <h1>Log in to</h1>
        <h3>Restaurant review is simply</h3>
        <label htmlFor="userName">Username:</label>
        <input
          id="userName"
          type="text"
          value={formData.userName}
          name="userName"
          onChange={handleFormChange}
        ></input>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={handleFormChange}
          name="password"
        ></input>
        <button className="submitButton">Log In</button>
        <p className={styles.registerCheck}>
          Don't have an account?
          <a className={styles.link} onClick={handleRegisterClick}>
            Register
          </a>
        </p>
      </form>
    </div>
  );
}
