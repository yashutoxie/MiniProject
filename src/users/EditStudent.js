import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function EditStudent() {
  const location = useLocation();
  const studentFromLocation = location.state;
  
  // Initialize state with student data
  const [student, setStudent] = useState({
    name: studentFromLocation.name || "",
    rollno: studentFromLocation.rollno || "",
    dob: studentFromLocation.dob || "",
    gender: studentFromLocation.gender || "",
    address: studentFromLocation.address || "",
    email: studentFromLocation.email || "",
    status: studentFromLocation.status || ""
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Example: Perform API call to update student data
      const response = await fetch(`https://api.example.com/students/${student.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update student data');
      } 
      console.log('Student data updated successfully:', student);  
      alert('Student data updated successfully!');
    } catch (error) {
      console.error('Error updating student data:', error.message); 
      alert('Failed to update student data. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={student.name}
                onChange={handleInputChange}
              />
              <label htmlFor="rollno" className="form-label">
                Roll No
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your roll no"
                name="rollno"
                value={student.rollno}
                onChange={handleInputChange}
              />
              <label htmlFor="dob" className="form-label">
                Date of Birth
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your date of birth"
                name="dob"
                value={student.dob}
                onChange={handleInputChange}
              />
              <label htmlFor="gender" className="form-label">
                Gender
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your gender"
                name="gender"
                value={student.gender}
                onChange={handleInputChange}
              />
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your address"
                name="address"
                value={student.address}
                onChange={handleInputChange}
              />
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={student.email}
                onChange={handleInputChange}
              />
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your status"
                name="status"
                value={student.status}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
