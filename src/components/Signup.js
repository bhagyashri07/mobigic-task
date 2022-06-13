import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'


const Signup = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/signUp", credentials).then((data) => {
      console.log(data.data);
      if (data.data.success === true) {
        localStorage.setItem("token", data.data.token)
        console.log(data.data.token);

        window.alert("Register Successfull")

        Swal.fire({
          position: "center",
          icon: 'success',
          title: 'Login Succseefull',
          showConfirmButton: false,
          timer: 1500
        })
        navigate("/login")
      }
    })

  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="my-3">
      <h1 className="text-dark font-weight-bolder border-bottom text-center">Create Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="my-3">
          <h3 htmlFor="name" className="form-label text-info">
            Name
          </h3>
          <input
            type="text"
            className="form-control border border-dark"
            value={credentials.name}
            onChange={handleChange}
            id="name"
            name="name"
          />
        </div>
        <div className="mb-3">
          <h3 htmlFor="exampleInputEmail1" className="form-label text-info">
            Email address
          </h3>
          <input
            type="email"
            className="form-control border border-dark"
            value={credentials.email}
            onChange={handleChange}
            id="exampleInputEmail1"
            name="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <h3 htmlFor="password" className="form-label text-info">
            Password
          </h3>
          <input
            type="password"
            className="form-control border border-dark"
            value={credentials.password}
            onChange={handleChange}
            id="password"
            name="password" minLength={5} required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default Signup;

