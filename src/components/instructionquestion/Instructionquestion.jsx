import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Note from "../layout/Note";
import styles from './style.module.css'; 

function Instructionquestion() {
  const [q1, setQ1] = useState(0);
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState(0);
  const [q4, setQ4] = useState("");

  const navigate = useNavigate();

  const updateLearningAttempted = async () => {
    const res = await fetch("/api/learningAttempted", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // _id: localStorage.getItem("userId"),
      }),
    });

    const data = await res.json();

    if (!data) {
      alert("Technical error");
      console.log("Technical error");
    } else if (res.status === 401) {
      window.alert(data.error);
      console.log(data.error);
    } else {
      console.log(data.message);
    }
  };

  return (
    <div
      style={{
        background: "#FEE856",
        height: "100%",
        textAlign: "center",
      }}
    >
      <Header />
      <h3 style={{ marginBotttom: 0, fontWeight: "bold" }}>
        {/* Make sure you properly have read the instructions or you won't be
        allowed to take this test */}
        Make sure you have read the instructions properly as you have to answer
        the following questions.
        <br />
        Or else, you won't be allowed to take this test.
      </h3>

      <button style={{ border: 0, background: "#FEE856" }}>
        <NavLink
          className="btn btn-primary btn-lg btn-demo"
          to="/instructions"
          variant="body2"
        >
          Go back and read instructions again
        </NavLink>
      </button>

      <div
        style={{
          margin: "1% auto",
          padding: "5%",
          width: "40vw",
          backgroundColor: "#f9f9fc",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <div style={{ width: "100%", textAlign: "left" }}>
          <h2>In this task you will</h2>
          <div style={{ marginBottom: "5%", textAlign:'center'}}>
            {q1 !== 0 && <h2>{q1}</h2>}
            <button className={styles.bigblue}
              type="radio"
              onClick={() => {
                setQ1(a);
              }}
            >
              make blind estimations on the optimal irrigation amount for 4 different crops
            </button><br/>
            <button className={styles.bigblue}
              type="radio"
              onClick={() => {
                setQ1(b);
              }}
            >
              make estimations on the optimal irrigation amount for 4 different crops based on three
environmental factors
            </button><br/>
            <button className={styles.bigblue}
              type="radio"
              onClick={() => {
                setQ1(c);
              }}
            >
              make estimations on the optimal irrigation amount for 1 crop
            </button><br/>

            <button className={styles.bigblue}
              type="radio"
              onClick={() => {
                setQ1(d);
              }}
            >
          program a statistical model
            </button><br/>


          </div>
        </div>

        <div
          style={{
            width: "100%",
            textAlign: "left",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h2>The optimal irrigation amount for each crop type</h2>
          <div style={{ marginBottom: "5%", textAlign:'center' }}>
            {q2 !== "" && <h2>{q2}</h2>}
            <button className={styles.bigblue}
              type="button"
              onClick={() => {
                setQ2("Irrigation");
              }}
            >
             always follows the same process based on three environmental inputs
            </button><br/>
            <button className={styles.bigblue}
              type="button"
              onClick={() => {
                setQ2("Tiling");
              }}
            >
              is determined by a random draw
            </button><br/>
            <button className={styles.bigblue}
              type="button"
              onClick={() => {
                setQ2("Harvesting");
              }}
            >
             is based on more than three environmental input variables
            </button><br/>
            <button className={styles.bigblue}
              type="button"
              onClick={() => {
                setQ2("Harvesting");
              }}
            >
            changes over the course of this task
            </button><br/>

          </div>
        </div>

        <div
          style={{
            width: "100%",
            textAlign: "left",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h2>During the Learning Rounds you can</h2>
          <div style={{ marginBottom: "5%", textAlign:'center' }}>
            {q3 !== 0 && <h2>{q3}</h2>}
            <button className={styles.bigblue}
              type="button"
              onClick={() => {
                setQ3(3);
              }}
            >
             earn bonus money
            </button><br/>
            <button className={styles.bigblue}
              type="button"
              onClick={() => {
                setQ3(4);
              }}
            >
              not do anything
            </button><br/>
            <button className={styles.bigblue}
              type="button"
              onClick={() => {
                setQ3(5);
              }}
            >
            choose between yourself and the statistical model
            </button><br/>
            <button className={styles.bigblue}
              type="button"
              onClick={() => {
                setQ3(5);
              }}
            >
            learn about the task, the crop types and the statistical model
            </button><br/>

          </div>
        </div>

        <div
          style={{
            width: "100%",
            textAlign: "left",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h2>
          During the Official Rounds you
          </h2>
          <div style={{ marginBottom: "5%", textAlign:'center' }}>
            {q4 !== "" && <h2>{q4}</h2>}
            <button className={styles.bigblue}
              type="button"
              onClick={() => {
                setQ4("random error");
              }}
            >
              choose 20 times between your own estimations and the statistical model’s estimations to
determine your bonus income from this task
            </button><br/>
            <button className={styles.bigblue}
              type="button"
              onClick={() => {
                setQ4("mean error");
              }}
            >
             do not have to make your own estimations
            </button><br/>
            <button className={styles.bigblue}
              type="button"
              onClick={() => {
                setQ4("median error");
              }}
            >
              cannot earn any money
            </button><br/>
            <button className={styles.bigblue}
              type="button"
              onClick={() => {
                setQ4("median error");
              }}
            >
             make estimations for two of the four crop types
            </button><br/>

          </div>
        </div>
      </div>

      <div style={{ paddingTop: "1vh" }}>
        {q1 === 4 && q2 === "Irrigation" && q3 === 3 && q4 === "mean error" ? (
          <button
            type="button"
            className="btn btn-primary btn-lg btn-demo"
            variant="body2"
            onClick={async () => {
              await updateLearningAttempted();
              await localStorage.setItem("userLearningAttempted", true);
              navigate("/learninground");
            }}
          >
            Start Test
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary btn-lg btn-demo"
            onClick={() => {
              window.alert("Incorrect answers");
            }}
          >
            Start Test
          </button>
        )}
      </div>
    </div>
  );
}

export default Instructionquestion;
