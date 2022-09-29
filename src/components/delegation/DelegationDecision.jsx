import React, {useState} from "react";
import styles from "./style.module.css";

function DelegationDecision() {
  
  const [q, setQ] = useState({
    question: "What would you prefer?",
    options: [
      "Your own decision",
      "Algorithm's decision",
    ],
    answer: -1,
  });
  
  const updateQuestion = (ans)=>{
    q.answer = ans;
    setQ({...q});
  }

  return (
  <div
    style={{
      background: "#FEE856",
      height: "100%",
      textAlign: "center",
    }}
  >
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
      <div style={{ width: "100%" }}>
      <h1>{q.question}</h1>
          <div style={{ marginBottom: "5%", textAlign: "center" }}>
            <button
              className={q.answer===0 ? styles.bigblueSelected : styles.bigblue}
              type="radio"
              onClick={()=> updateQuestion(0)}
            >
              {q.options[0]}
            </button>
            <br />
            <button
              className={q.answer===1 ? styles.bigblueSelected : styles.bigblue}
              type="radio"
              onClick={()=> updateQuestion(1)}
            >
              {q.options[1]}
            </button>
          </div>
        </div>
    </div>
    </div>
  );
}

export default DelegationDecision;
