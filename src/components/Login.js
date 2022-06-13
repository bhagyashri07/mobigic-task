import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Swal from 'sweetalert2'

const Login = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/signIn", credentials).then((data) => {
            console.log(data.data);
            if (data.data.success === true) {
                localStorage.setItem("token", data.data.authtoken)
                navigate("/")
                //window.alert("Login Successfull")
                Swal.fire({
                    position: "center",
                    icon: 'success',
                    title: 'Login Succseefull',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }).catch((err) => {
            console.log(err);
        })

    };

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    return (
        <div className="my-3">
            <h1 className="text-dark font-weight-bolder border-bottom text-center">Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="my-3">
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
                    <h3 htmlFor="exampleInputPassword1" className="form-label text-info">
                        Password
                    </h3>
                    <input
                        type="password"
                        className="form-control  border border-dark"
                        value={credentials.password}
                        onChange={handleChange}
                        id="exampleInputPassword1"
                        name="password"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
