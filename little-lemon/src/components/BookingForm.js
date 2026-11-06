import React, { useState } from "react";

function BookingForm({
  availableTimes,
  dispatch,
  submitForm
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    time: "",
    guests: "2",
    occasion: ""
  });

  const [errors, setErrors] = useState({});

  const today = new Date().toLocaleDateString("en-CA");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));

    if (name === "date") {
      dispatch({
        type: "UPDATE_TIMES",
        date: value
      });
    }

    setErrors((previous) => ({
      ...previous,
      [name]: ""
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.date || formData.date < today) {
      newErrors.date = "Please select a valid date";
    }

    if (!formData.time) {
      newErrors.time = "Please select a time";
    }

    if (
      Number(formData.guests) < 1 ||
      Number(formData.guests) > 10
    ) {
      newErrors.guests = "Choose between 1 and 10 guests";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      submitForm(formData);
    }
  };

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      noValidate
    >
      <h2>Reserve Your Table</h2>

      <div className="form-grid">

        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && (
            <span className="error">{errors.firstName}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && (
            <span className="error">{errors.lastName}</span>
          )}
        </div>

        <div className="form-group full-width">
          <label htmlFor="email">Email Address *</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && (
            <span className="error">{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="date">Choose Date *</label>
          <input
            id="date"
            name="date"
            type="date"
            min={today}
            value={formData.date}
            onChange={handleChange}
            required
          />
          {errors.date && (
            <span className="error">{errors.date}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="time">Choose Time *</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="">Select a time</option>

            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && (
            <span className="error">{errors.time}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="guests">Number of Guests *</label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
              (number) => (
                <option key={number} value={number}>
                  {number} {number === 1 ? "Guest" : "Guests"}
                </option>
              )
            )}
          </select>
          {errors.guests && (
            <span className="error">{errors.guests}</span>
          )}
        </div>

        <div className="form-group full-width">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="">Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Engagement">Engagement</option>
            <option value="Other">Other</option>
          </select>
        </div>

      </div>

      <button type="submit" className="submit-button">
        Reserve a Table
      </button>

    </form>
  );
}

export default BookingForm;
