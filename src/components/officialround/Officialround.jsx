import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Officialround() {
  return (
    <div>
      <h1>Q1</h1>
      <h1>Q2</h1>
      <h1>Q3</h1>
      <h1>Q4</h1>
      <h1>Q5</h1>
      <h1>Q6</h1>
      <h1>Q7</h1>
      <h1>Q8</h1>
      <h1>Q9</h1>
      <h1>Q10</h1>
      <button>
        <NavLink
          className="btn btn-primary btn-lg btn-demo"
          to="/feedbackround"
          variant="body2"
        >
          Share us your experience and earn some more monnneyyy!!! xD{" "}
        </NavLink>
        {/* <a href="/feedbackround">
          {" "}
          Share us your experience and earn some more monnneyyy!!! xD{" "}
        </a> */}
      </button>
    </div>
  );
}

export default Officialround;
