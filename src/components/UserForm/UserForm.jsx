import React, { useState } from "react";
import './UserForm.css'
import { useNavigate } from "react-router-dom";

export const UserForm = () => {
    let navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const handleInputChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("sending data..." + data.name, data.email);
    setTimeout(() => {
        navigate('/')
    }, 1000);
  };
  return (
      <div className="container">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        onChange={handleInputChange}
        value={data.name}
        name="name"
      />
      <input
        type="email"
        placeholder="email"
        onChange={handleInputChange}
        name="email"
        value={data.email}
      />
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
};
