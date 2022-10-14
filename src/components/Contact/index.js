import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
function ContactForm({ setContactSelected }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required`);
        } else {
          setErrorMessage("");
        }
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
    setContactSelected(false);
  }
  const { name, email, message } = formState;
  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            onBlur={handleChange}
            defaultValue={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            onBlur={handleChange}
            defaultValue={email}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            rows="5"
            name="message"
            onBlur={handleChange}
            defaultValue={message}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
export default ContactForm;
