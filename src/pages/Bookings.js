import { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceType: "",
    pickupLocation: "",
    dropoffLocation: "",
    travelDate: "",
    travelTime: "",
    passengers: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking request submitted. We will contact you shortly.");
  };

  return (
    <section className="booking-section">
      <div className="container">
        <div className="section-title text-center mb-5">
          <h2>Book Your Shuttle or Tour</h2>
          <p>
            Complete the form below and our team will confirm availability,
            pricing, and pickup details.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    placeholder="Full Name"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <select
                    name="serviceType"
                    className="form-control"
                    required
                    onChange={handleChange}
                  >
                    <option value="">Select Service</option>
                    <option>Airport Transfer</option>
                    <option>Cross-Border Shuttle</option>
                    <option>City / Corporate Transfer</option>
                    <option>Tours & Sightseeing</option>
                    <option>VIP & Nightlife</option>
                    <option>Custom Request</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="pickupLocation"
                    className="form-control"
                    placeholder="Pickup Location"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    name="dropoffLocation"
                    className="form-control"
                    placeholder="Drop-off Location"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <input
                    type="date"
                    name="travelDate"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <input
                    type="time"
                    name="travelTime"
                    className="form-control"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <input
                    type="number"
                    name="passengers"
                    className="form-control"
                    placeholder="Passengers"
                    min="1"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12 mb-4">
                  <textarea
                    name="notes"
                    className="form-control"
                    rows="4"
                    placeholder="Additional notes (VIP, child seat, luggage, special request)"
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-primary px-5">
                    Submit Booking Request
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
