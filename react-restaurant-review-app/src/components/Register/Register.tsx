import { useState } from "react";
import { User } from "../../models/user";

export default function Register() {
  const [formData, setFormData] = useState<User>({
    id: "",
    userName: "",
    password: "",
    role: 0,
  });

  function handleFormChange() {}

  function handleSubmit() {}

  return (
    <>
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
        <button className="submitButton">Register</button>;
      </form>
    </>
  );
}
