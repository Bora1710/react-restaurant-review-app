import { useState } from "react";
import { User } from "../../models/user";
import { post } from "../../utils/service";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

export default function Register() {
  const [formData, setFormData] = useState<User>({
    id: "",
    userName: "",
    password: "",
    role: 2,
  });
  const navigate = useNavigate();

  function handleFormChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    let response = await post<User, { id: string }>("register", formData);

    if (response) {
      navigate("/login");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
      <button className="submitButton">Register</button>;
    </form>
  );
}
