import React from "react";

const ContactForm = () => {

  return (
    <form
        action="https://formspree.io/mqldbnpx"
        method="POST"
        onSubmit={this}
        >
        <label>
            Name:
            <input
                type="text"
                name="name"
            />
        </label>
        <label>
            Email:
            <input
                type="text"
                name="email"
            />
        </label>
        <label>
            Message:
            <input
                type="text"
                name="message"
            />
        </label>
        <button type='submit'>Submit</button>
    </form>
  );
};

export default ContactForm;
