import React, { useState } from "react";
import "../style/pages/Form.scss";
import { inputCheck } from "../helper/inputCheck";
import { inputValidator } from "../helper/inputValidator";
// import axios from "axios";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [errors, setError] = useState({});

  const handleChange = (e) => {
    inputCheck(e, setFormData, setError);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { isValid, newError } = inputValidator(formData);
    setError(newError);
    if (isValid) {
      try {
        // Call your API here (replace the URL with your actual endpoint)
        // const response = await axios.post("https://your-api-endpoint.com/submit",formData);
        // console.log("API Response:", response.data);
        alert("submited");
        setFormData({ userName: "", email: "", password: "" });
        setError({ userName: "", email: "", password: "" });
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };
  return (
    <section className="registration-events">
      <div className="container outer-container">
        <div className="message-section text-center">
          <p className="message-title">Send Me a Message</p>
          <p className="message-label">
            Get a Quote Immediately Upon Form Submission
          </p>
        </div>
        <form
          id="EventsForm"
          onSubmit={handleSubmit}
          className="event-profile-form"
          method="POST"
        >
          <div className="row flex-wrap">
            {/* Full Name  */}
            <div className="col-12 col-lg-6">
              <div className="form-group">
                <label
                  className="form-control-label mandetory"
                  htmlFor="registration-form-fname"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control input-text only-letters"
                  name="userName"
                  id="registration-form-fname"
                  placeholder="Enter Your Full Name"
                  value={formData.userName}
                  onChange={handleChange}
                />
                {errors.userName && (
                  <div className="invalid-error" id="form-fname-error">
                    {errors.userName}
                  </div>
                )}
              </div>
            </div>
            {/* Email */}
            <div className="col-12 col-lg-6">
              <div className="form-group">
                <label
                  className="form-control-label"
                  htmlFor="registration-form-email"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  className="form-control input-email"
                  name="email"
                  id="registration-form-email"
                  placeholder="Enter Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="invalid-error" id="form-email-error">
                    {errors.email}
                  </div>
                )}
              </div>
            </div>
            {/* Password */}
            <div className="col-12 col-lg-6">
              <div className="form-group">
                <label
                  className="form-control-label"
                  htmlFor="registration-form-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control input-password"
                  name="password"
                  id="registration-form-password"
                  placeholder="Enter Your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <div className="invalid-error" id="form-password-error">
                    {errors.password}
                  </div>
                )}
              </div>
            </div>
            <div className="btn-container col-12 d-flex justify-content-center">
              <button type="submit" className="event-form-submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default RegistrationForm;
