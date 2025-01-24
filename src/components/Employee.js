import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";

const employees = [
    {
        id: 1,
        name: "Hoa",
        age: 20
    },
    {
        id: 2,
        name: "Khánh",
        age: 25
    },
    {
        id: 3,
        name: "Tú",
        age: 22
    },
]

export default function Employee() {

    const navigate = useNavigate();
    const location = useLocation();
    const account = location.state.account;

    const handleView = (employee) => {
        navigate("/employees/detail", {state: { employee: employee }});
    }

    return (
        <div className="container mt-5">
            <h1>Hello user <span style={{color: "orange"}}>{account}</span>!</h1>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {employees.map((employee) => (
                    <tr>
                        <td>{employee.id}</td>
                        <td>{employee.name}</td>
                        <td>
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={() => handleView(employee)}
                            >
                                Details
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}