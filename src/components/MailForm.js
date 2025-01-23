import "../App.css";
import {useState} from "react";
import {Formik} from "formik";

export default function MailForm() {
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

    const handleFile = (event) => {
        setForm({
            ...form,
            file: event.target.files[0],
            fileUploadMessage: "File has been uploaded"});
    }

    function handleSubmit() {
        alert("Sent successfully!!!");
    }

    function handleValidate() {
        const errors = {};
        if (!form.email) {
            errors.email = "Required";
        } else if (!REGEX.email.test(form.email)) {
            errors.email = "Invalid email address";
        }
        if (!form.title) {
            errors.title = "Required";
        }
        if (!form.message) {
            errors.message = "Required";
        }
        return errors;
    }

    return (
        <div>
            <h1>Mail Form</h1>
            <Formik initialValues={form}
                    validate={handleValidate}
                    onSubmit={handleSubmit}>
                {({ errors, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div
                            className={`custom-input ${errors.email && "custom-input-error"}`}
                        >
                            <label>To: </label>
                            <input
                                type="text"
                                name="email"
                                value={(form.email) || ""}
                                onChange={handleChange}
                            />
                            {errors.email && (
                                <p className="error">{errors.email}</p>
                            )}
                        </div>
                        <div className={`custom-input ${errors.title && "custom-input-error"}`}>
                            <label>Title: </label>
                            <input
                                type="text"
                                name="title"
                                value={form.title || ""}
                                onChange={handleChange}
                            />
                            {errors.title && (
                                <p className="error">{errors.title}</p>
                            )}
                        </div>
                        <div className={`custom-input ${errors.message && "custom-input-error"}`}>
                            <label>Message: </label>
                            <textarea
                                name="message"
                                value={form.message || ""}
                                onChange={handleChange}
                            />
                            {errors.message && (
                                <p className="error">{errors.message}</p>
                            )}
                        </div>
                        <div className={"custom-input"}>
                            <label>Attachment: </label>
                            <input
                                type="file"
                                name="file"
                                onChange={handleFile}
                            />
                            {form.fileUploadMessage && (<p className="message">{form.fileUploadMessage}</p>)}
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}