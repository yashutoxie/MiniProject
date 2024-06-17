
import React, { useState } from 'react'
import './StudentForm.css'
const StudentForm = () => {
    const [studentData, setstudentData] = useState(
        {
            rollno: '',
            name: '',
            dob: '',
            gender: '', 
            address: '',
            email: '',
            status: ''
        }
    )
    const handleChange = (e) => {
        const { name, value } = e.target;
        setstudentData({
            ...studentData,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/saveStudent',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(studentData)
                }
            )
            if (response.ok) {
                alert("success posting data")
                const studentData = await response.json();
                console.log(studentData);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='main-container'>
            <h1>Student Registration Form</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Roll No</label>
                    <input type='number' value={studentData.rollno} name='rollno' onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label>Student Name</label>
                    <input type='text' value={studentData.name} name='name' onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label>Date of Birth</label>
                    <input type='number' value={studentData.dob} name='dob' onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label>Gender</label>
                    <input type='text' value={studentData.gender} name='gender' onChange={handleChange} />
                </div> 
                <div className='form-group'>
                    <label>Address</label>
                    <input type='text' value={studentData.address} name='address' onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input type='email' value={studentData.email} name='email' onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label>Status</label>
                    <input type='text' value={studentData.status} name='status' onChange={handleChange} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default StudentForm;