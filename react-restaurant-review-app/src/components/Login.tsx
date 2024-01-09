import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({ userName: "", password: "" });

  function handleFormChange(event: any) {
    const { name, value } = event.target;
    setFormData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    console.log("Username:", formData.userName);
    console.log("Password:", formData.password);
  }
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
        <button>Submit</button>
      </form>
    </>
  );
}
