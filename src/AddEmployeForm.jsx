import React, { useState } from "react";
import "./App.css";

const AddEmployeeForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: new Date().toString(),
    firstName: "",
    lastName: "",
    imageUrl: "",
    email: "",
    contactNumber: "",
    salary: "",
    address: "",
    dob: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted Data:", formData);

    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      imageUrl: "",
      email: "",
      contactNumber: "",
      address: "",
      dob: "",
    });

    onClose();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={`popup ${isOpen ? "open" : ""}`}>
      <div className="popup-inner">
        <form className="addEmployee_create" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required=""
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required=""
            />
          </div>
          <input
            type="text"
            name="imageUrl"
            placeholder="Image URL (Optional)"
            value={formData.imageUrl}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required=""
          />
          <input
            type="number"
            name="contactNumber"
            placeholder="Contact"
            value={formData.contactNumber}
            onChange={handleChange}
            required=""
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required=""
          />
          <input
            type="date"
            name="dob"
            placeholder="Date of Birth"
            className="addEmployee_create--dob"
            value={formData.dob}
            onChange={handleChange}
            required=""
          />
          <input
            type="submit"
            className="addEmployee_create--submit"
            defaultValue="Submit"
          />
          <button className="close-button" onClick={onClose}>
            Close
          </button>
          <p>{formData.address}</p>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeForm;
