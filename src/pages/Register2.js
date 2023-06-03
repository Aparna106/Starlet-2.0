import React, { useState } from "react";
import "./Register.css";

//guides
const RegistrationForm2 = () => {
    const [formData, setFormData] = useState({
        homestayName: "",
        address: "",
        description: "",
        capacity: "",
        price: "",
        contactPerson: "",
        contactEmail: "",
        contactPhone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        console.log(formData);
        // Reset form data
        setFormData({
            homestayName: "",
            address: "",
            description: "",
            capacity: "",
            price: "",
            contactPerson: "",
            contactEmail: "",
            contactPhone: "",
        });
    };

    return (
        <div className="registration-form">
            <h2>Register as Guides</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Guides Name:
                    <input
                        type="text"
                        name="guideName"
                        value={formData.guideName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Guiding region:
                    <textarea
                        type="text"
                        name="guidingRegion"
                        value={formData.guidingRegion}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Years of experience:
                    <textarea
                        type="text"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Gender:
                    <input
                        type="text"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Expected Salary:
                    <input
                        type="number"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Contact Email:
                    <input
                        type="email"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Contact Phone:
                    <input
                        type="tel"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Identification of Qualification:
                    <input
                        type="text"
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Idenification:
                    <input
                        type="file"
                        name="identification"
                        value={formData.identification}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RegistrationForm2;
