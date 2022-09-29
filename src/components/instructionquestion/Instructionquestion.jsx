import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { generateQ1, generateQ2, generateQ3, generateQ4 } from "./utils";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Note from "../layout/Note";
import styles from "./style.module.css";

function Instructionquestion() {
  const updateQuestion = (q, setQ, ans) => {
    q.answer = ans;
    setQ({ ...q });
  };

  const [q1, setQ1] = useState(generateQ1());
  const [q2, setQ2] = useState(generateQ2());
  const [q3, setQ3] = useState(generateQ3());
  const [q4, setQ4] = useState(generateQ4());

  const navigate = useNavigate();

  // const updateLearningAttempted = async () => {
  //   const res = await fetch("/api/learningAttempted", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       _id: localStorage.getItem("userId"),
  //     }),
  //   });

  //   const data = await res.json();

  //   if (!data) {
  //     alert("Technical error");
  //     console.log("Technical error");
  //   } else if (res.status === 401) {
  //     window.alert(data.error);
  //     console.log(data.error);
  //   } else {
  //     console.log(data.message);
  //   }
  // };

  return (
    <div
      style={{
        background: "#E4E1E1",
        height: "100%",
        textAlign: "center",
      }}
    >
      {/* <Header /> */}
      <h3 style={{ marginBottom: 0, padding: "2% 0 2% 0", fontWeight: "bold" }}>
        Make sure you have read the instructions properly as you have to answer
        the following questions.
        <br />
        Or else, you won't be allowed to take this test.
      </h3>

      <div
        style={{
          margin: "1% auto",
          padding: "5%",
          width: "80vw",
          backgroundColor: "#f9f9fc",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <div style={{ width: "100%", textAlign: "left" }}>
          <h2>{q1.question}</h2>
          <div style={{ marginBottom: "5%", textAlign: "center" }}>
            <button
              className={
                q1.answer === 0 ? styles.bigblueSelected : styles.bigblue
              }
              type="radio"
              onClick={() => updateQuestion(q1, setQ1, 0)}
            >
              {q1.options[0]}
            </button>
            <br />
            <button
              className={
                q1.answer === 1 ? styles.bigblueSelected : styles.bigblue
              }
              type="radio"
              onClick={() => updateQuestion(q1, setQ1, 1)}
            >
              {q1.options[1]}
            </button>
            <br />
            <button
              className={
                q1.answer === 2 ? styles.bigblueSelected : styles.bigblue
              }
              type="radio"
              onClick={() => updateQuestion(q1, setQ1, 2)}
            >
              {q1.options[2]}
            </button>
            <br />

            <button
              className={
                q1.answer === 3 ? styles.bigblueSelected : styles.bigblue
              }
              type="radio"
              onClick={() => updateQuestion(q1, setQ1, 3)}
            >
              {q1.options[3]}
            </button>
            <br />
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
          <h2>{q2.question}</h2>
          <div style={{ marginBottom: "5%", textAlign: "center" }}>
            <button
              className={
                q2.answer === 0 ? styles.bigblueSelected : styles.bigblue
              }
              type="button"
              onClick={() => updateQuestion(q2, setQ2, 0)}
            >
              {q2.options[0]}
            </button>
            <br />
            <button
              className={
                q2.answer === 1 ? styles.bigblueSelected : styles.bigblue
              }
              type="button"
              onClick={() => updateQuestion(q2, setQ2, 1)}
            >
              {q2.options[1]}
            </button>
            <br />
            <button
              className={
                q2.answer === 2 ? styles.bigblueSelected : styles.bigblue
              }
              type="button"
              onClick={() => updateQuestion(q2, setQ2, 2)}
            >
              {q2.options[2]}
            </button>
            <br />
            <button
              className={
                q2.answer === 3 ? styles.bigblueSelected : styles.bigblue
              }
              type="button"
              onClick={() => updateQuestion(q2, setQ2, 3)}
            >
              {q2.options[3]}
            </button>
            <br />
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
          <h2>{q3.question}</h2>
          <div style={{ marginBottom: "5%", textAlign: "center" }}>
            <button
              className={
                q3.answer === 0 ? styles.bigblueSelected : styles.bigblue
              }
              type="button"
              onClick={() => updateQuestion(q3, setQ3, 0)}
            >
              {q3.options[0]}
            </button>
            <br />
            <button
              className={
                q3.answer === 1 ? styles.bigblueSelected : styles.bigblue
              }
              type="button"
              onClick={() => updateQuestion(q3, setQ3, 1)}
            >
              {q3.options[1]}
            </button>
            <br />
            <button
              className={
                q3.answer === 2 ? styles.bigblueSelected : styles.bigblue
              }
              type="button"
              onClick={() => updateQuestion(q3, setQ3, 2)}
            >
              {q3.options[2]}
            </button>
            <br />
            <button
              className={
                q3.answer === 3 ? styles.bigblueSelected : styles.bigblue
              }
              type="button"
              onClick={() => updateQuestion(q3, setQ3, 3)}
            >
              {q3.options[3]}
            </button>
            <br />
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
          <h2>{q4.question}</h2>
          <div style={{ marginBottom: "5%", textAlign: "center" }}>
            <button
              className={
                q4.answer === 0 ? styles.bigblueSelected : styles.bigblue
              }
              type="button"
              onClick={() => updateQuestion(q4, setQ4, 0)}
            >
              {q4.options[0]}
            </button>
            <br />
            <button
              className={
                q4.answer === 1 ? styles.bigblueSelected : styles.bigblue
              }
              type="button"
              onClick={() => updateQuestion(q4, setQ4, 1)}
            >
              {q4.options[1]}
            </button>
            <br />
            <button
              className={
                q4.answer === 2 ? styles.bigblueSelected : styles.bigblue
              }
              type="button"
              onClick={() => updateQuestion(q4, setQ4, 2)}
            >
              {q4.options[2]}
            </button>
            <br />
            <button
              className={
                q4.answer === 3 ? styles.bigblueSelected : styles.bigblue
              }
              type="button"
              onClick={() => updateQuestion(q4, setQ4, 3)}
            >
              {q4.options[3]}
            </button>
            <br />
          </div>
        </div>
      </div>

      <div style={{ display: "flex", padding: "1vh 0 1vh 0" }}>
        <div
          style={{
            margin: "0 10vw 0 10vw",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div className={styles.arrowLeft}></div>
          <button style={{ border: 0, background: "#DD356E" }}>
            <NavLink
              className="btn btn-primary btn-lg btn-demo"
              to="/instructions"
              variant="body2"
            >
              Read instructions again
            </NavLink>
          </button>
        </div>
        <div className={styles.arrow} style={{marginLeft:'25vw'}}>
          {q1.answer === 1 &&
          q2.answer === 0 &&
          q3.answer === 3 &&
          q4.answer === 0 ? (
            <button
              type="button"
              className="btn btn-primary btn-lg btn-demo"
              variant="body2"
              onClick={async () => {
                // await updateLearningAttempted();
                await localStorage.setItem("userLearningAttempted", true);
                navigate("/transitionlearning");
              }}
            >
              Proceed to next
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-primary btn-lg btn-demo"
              onClick={() => {
                window.alert("Incorrect answers");
              }}
            >
              Proceed to next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Instructionquestion;
