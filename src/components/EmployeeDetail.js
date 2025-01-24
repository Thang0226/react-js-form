import {useLocation} from "react-router-dom";

export default function EmployeeDetail() {
    const location = useLocation();
    const employee = location.state.employee;

    return (
        <div className="container mt-5">
            <h3>Employee Details</h3>
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.age}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}