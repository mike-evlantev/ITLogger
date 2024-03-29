import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addLog } from "../../actions/logActions";
import TechSelectOptions from "../techs/TechSelectOptions";

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onMessageChange = e => setMessage(e.target.value);
  const onAttentionChange = e => setAttention(!attention);
  const onTechChange = e => setTech(e.target.value);
  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter message and select a technician" });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date()
      };

      addLog(newLog);

      M.toast({ html: `Log added by ${tech}}` });

      // clear fields
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div id="add-log-modal" className="it-logger-modal modal">
      <div className="modal-content">
        <h5>Enter System Log</h5>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={onMessageChange}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={onTechChange}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={onAttentionChange}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          className="modal-close waves-effect blue btn"
          onClick={onSubmit}
        >
          Add Log
        </a>
      </div>
    </div>
  );
};

export default connect(
  null,
  { addLog }
)(AddLogModal);
