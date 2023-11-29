import { useState } from "react";
import "./App.css";
import AddEmployeeForm from "./AddEmployeForm";
import database from "./data.json";

function App() {
  // console.log(data.users);
  const [isFormOpen, setFormOpen] = useState(false);
  const [data, setData] = useState(database);
  const [employee, setEmployee] = useState([data[0]]);

  const openForm = () => {
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
  };
  const handleFormSubmit = (formData) => {
    // Update the employees state with the submitted data
    setData((prevEmployees) => [...prevEmployees, formData]);
  };

  const handleClick = (id) => {
    let selectedUser = data.find((user) => user.id === id);
    setEmployee(() => selectedUser);
    // setEmployee(data[1])
  };

  const handleRemove = () => {
    setData((prevUsers) => prevUsers.filter((user) => user !== employee));
    setEmployee("");
  };
  return (
    <div>
      <div className="flex justify-between m-4">
        <h1 className="font-bold">Employee management</h1>
        <button onClick={openForm}>Add Employee</button>
        <AddEmployeeForm
          isOpen={isFormOpen}
          onClose={closeForm}
          onSubmit={handleFormSubmit}
        />
      </div>

      <div className="employees">
        <div className="employees__names">
          <span className="employees__names--title font-semibold text-lg">
            Employee List
          </span>
          <div className="employees__names--list" />
          {data.map((user, index) => (
            <div className="users cursor-pointer py-2" key={index}>
              {console.log("employee", employee)}
              <div className="use" onClick={() => handleClick(user.id)}>
                <p>{index + 1}) </p>
                <p className="name">
                  {user.firstName} - {user.lastName}
                </p>
              </div>
              <p
                onClick={handleRemove}
                className="cursor-pointer flex flex-col"
              >
                ❌
              </p>
            </div>
          ))}
        </div>
        <div className="employees__single">
          <div className="employees__single--title font-semibold text-lg">
            Employee Information
          </div>
          <div className="employees__single--info" />
          <div className=" flex flex-col justify-center items-center py-3">
            <img
              src={employee.imageUrl}
              className="w-36 h-36"
              alt={employee.firstName || "no user"}
            />
            <p>{employee.id}</p>
            <p className="name">
              {employee.firstName} - {employee.lastName}
            </p>
            <p>{employee.email}</p>
            <p>{employee.dob}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
