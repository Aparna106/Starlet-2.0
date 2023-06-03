import React, { useState } from "react";
import "./Register.css";

//Business
const RegistrationForm1 = () => {
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
            <h2>Register Business</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Business Name:
                    <input
                        type="text"
                        name="homestayName"
                        value={formData.homestayName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Type of Business:
                    <textarea
                        name="typeBusiness"
                        value={formData.typeBusiness}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Address:
                    <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Description of products:
                    <textarea
                        name="descriptionProducts"
                        value={formData.descriptionProducts}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Timings:
                    <input
                        type="text"
                        name="timings"
                        value={formData.timings}
                        onChange={handleChange}
                        required
                    />
                </label>
         
                <label>
                    Contact Person:
                    <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
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

export default RegistrationForm1;
