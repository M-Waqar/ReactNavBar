import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
          <small className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Message</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Message"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
