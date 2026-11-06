
import React, { useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "../api";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";

const initializeTimes = () => {
  return fetchAPI(new Date());
};

function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    return fetchAPI(new Date(action.date + "T12:00:00"));
  }

  return state;
}

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const [confirmed, setConfirmed] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  const submitForm = (formData) => {
    const success = submitAPI(formData);

    if (success) {
      setBookingData(formData);
      setConfirmed(true);
    }
  };

  return (
    <main className="booking-page">

      <section className="booking-banner">
        <h1>Table Reservations</h1>
        <p>
          Experience the best of Mediterranean cuisine
          at Little Lemon.
        </p>
      </section>

      <section className="booking-content">

        {confirmed ? (
          <ConfirmedBooking bookingData={bookingData} />
        ) : (
          <BookingForm
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
          />
        )}

      </section>

    </main>
  );
}

export default BookingPage;
