import "../App.css";
import {useState} from "react";
import {Formik} from "formik";

export default function ContactForm() {
    const REGEX = {
        email: /^[a-zA-Z0-9+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/,
    };
    const [form, setForm] = useState({});

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    }

    function handleSubmit() {
        alert("Add contact successfully!!!");
    }

    function handleValidate() {
        const errors = {};
        if (!form.name) {
            errors.name = "Required";
        }
        if (!form.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
        }
        if (!form.phone) {
            errors.phone = "Required";
        }
        return errors;
    }

    return (
        <div>
            <h1>Sign up</h1>
            <Formik initialValues={form}
                    validate={handleValidate}
                    onSubmit={handleSubmit}>
                {({ errors, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div
                            className={`custom-input ${errors.name && "custom-input-error"}`}
                        >
                            <label>Name </label>
                            <input
                                type="text"
                                name="name"
                                value={(form.name) || ""}
                                onChange={handleChange}
                            />
                            {errors.name && (
                                <p className="error">{errors.name}</p>
                            )}
                        </div>
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
                        <div className={`custom-input ${errors.phone && "custom-input-error"}`}>
                            <label>Phone </label>
                            <input
                                type="number"
                                name="phone"
                                value={form.phone || ""}
                                onChange={handleChange}
                            />
                            {errors.phone && (
                                <p className="error">{errors.phone}</p>
                            )}
                        </div>
                        <div className={`custom-input ${errors.message && "custom-input-error"}`}>
                            <label>Message </label>
                            <textarea
                                name="message"
                                value={form.message || ""}
                                onChange={handleChange}
                            />
                            {errors.message && (
                                <p className="error">{errors.message}</p>
                            )}
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
}