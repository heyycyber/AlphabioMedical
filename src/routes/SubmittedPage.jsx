import React from "react";
import { Link } from "react-router-dom";

const SubmittedPage = () => {
  return (
    <div className="submittedPage">
      <div className="submitHeader">
        <div className="submitImage">
          <svg viewBox="0 0 24 24" fill="none">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M20 7L9.00004 18L3.99994 13"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div className="submitContent">
          <span className="submitTitle">Your submission was received :)</span>
          <p className="submitMessage">Thanks for the message</p>
        </div>
        <div className="submitActions">
          <Link className="submitTrack" to={"/"}>
            Back to Home!!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubmittedPage;
