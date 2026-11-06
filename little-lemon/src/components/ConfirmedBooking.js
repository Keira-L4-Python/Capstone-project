
import React from "react";
import { Link } from "react-router-dom";

function ConfirmedBooking({ bookingData }) {
  return (
    <div className="confirmed-booking">

      <div className="success-icon">✓</div>

      <h1>Booking Confirmed!</h1>

      <p>
        Thank you, {bookingData.firstName}!
        Your table reservation has been received.
      </p>

      <div className="booking-details">
        <h3>Your Reservation Details</h3>

        <p>
          <strong>Name:</strong>{" "}
          {bookingData.firstName} {bookingData.lastName}
        </p>

        <p>
          <strong>Date:</strong> {bookingData.date}
        </p>

        <p>
          <strong>Time:</strong> {bookingData.time}
        </p>

        <p>
          <strong>Guests:</strong> {bookingData.guests}
        </p>

        <p>
          <strong>Occasion:</strong>{" "}
          {bookingData.occasion || "Not specified"}
        </p>

        <p>
          <strong>Email:</strong> {bookingData.email}
        </p>
      </div>

      <Link to="/" className="button">
        Back to Home
      </Link>

    </div>
  );
}

export default ConfirmedBooking;
