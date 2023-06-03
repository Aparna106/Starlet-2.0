import React, { useState } from 'react';
import './Register.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    homestayName: '',
    address: '',
    description: '',
    capacity: '',
    price: '',
    contactPerson: '',
    contactEmail: '',
    contactPhone: '',
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
      homestayName: '',
      address: '',
      description: '',
      capacity: '',
      price: '',
      contactPerson: '',
      contactEmail: '',
      contactPhone: '',
    });
  };

  return (
    <div className="registration-form">
      <h2>Register Homestay</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Homestay Name:
          <input
            type="text"
            name="homestayName"
            value={formData.homestayName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Address:
          <textarea name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <label>
          Capacity:
          <input
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
