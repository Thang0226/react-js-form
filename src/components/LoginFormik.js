import {useState} from 'react';
import "../App.css";
import {Formik} from "formik";
import {useNavigate} from "react-router-dom";

export default function LoginFormik() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/,
        password: /^[a-zA-Z0-9!@#$%^&*)(+=._-]{6,}$/
    };
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit() {
        alert("Login in successfully!");
        navigate("/employees", {state: {account: form.email}});
    }

    function handleValidate() {
        const errors = {};

        if (!form.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
        } else if (!(form.email === "admin@gmail.com")) {
            errors.email = "Wrong email address";
        }

        if (!form.password) {
            errors.password = "Required";
        } else if (!REGEX.password.test(form.password)) {
            errors.password = "Invalid password";
        } else if (!(form.password === "letmein")) {
            errors.password = "Wrong password";
        }

        return errors;
    }

    return (
        <div>
            <h1>Login Form</h1>
            <Formik initialValues={form}
                    validate={handleValidate}
                    onSubmit={handleSubmit}>
                {({ errors, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div
                            className={`custom-input ${errors.email && "custom-input-error"}`}
                        >
                            <label>Email </label>
                            <input
                                type="email"
                                name="email"
                                value={(form.email) || ""}
                                onChange={handleChange}
                            />
                            {errors.email && (
                                <p className="error">{errors.email}</p>
                            )}
                        </div>
                        <div className={`custom-input ${errors.password && "custom-input-error"}`}>
                            <label>Password </label>
                            <input
                                type="password"
                                name="password"
                                value={form.password || ""}
                                onChange={handleChange}
                            />
                            {errors.password && (
                                <p className="error">{errors.password}</p>
                            )}
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}