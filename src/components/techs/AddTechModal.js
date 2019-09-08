import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onFirstNameChange = e => setFirstName(e.target.value);
  const onLastNameChange = e => setLastName(e.target.value);
  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter first and last name" });
    } else {
      console.log(firstName, lastName);
      // clear fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h5>New Technician</h5>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={onFirstNameChange}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={onLastNameChange}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          className="modal-close waves-effect blue btn"
          onClick={onSubmit}
        >
          Add Technician
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;
