import { useState } from "react";
import styles from "./Login.module.css";
import restaurnatImage from "../../assets/images/019a0242b61b695b45ca70321ca186a0.jfif";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({ userName: "", password: "" });
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();

  function handleFormChange(event: any) {
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
      .then((json) => {
        setUserData(json);
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
        <button className={styles.submitButton}>Submit</button>
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
