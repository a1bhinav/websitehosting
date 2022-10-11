import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { generateQ1, generateQ2, generateQ3, generateQ4 } from "./utils";

import { Layout, Col, Row, Button } from "antd";
import "antd/dist/antd.css";
import styles from "./style.module.css";

const { Content } = Layout;

const Instructionquestion = () => {
  const updateQuestion = (q, setQ, ans) => {
    q.answer = ans;
    setQ({ ...q });
  };

  const [q1, setQ1] = useState(generateQ1());
  const [q2, setQ2] = useState(generateQ2());
  const [q3, setQ3] = useState(generateQ3());
  const [q4, setQ4] = useState(generateQ4());

  const [trialCount, setTrialCount] = useState(0);

  const navigate = useNavigate();

  return (
    <div className="total-screen">
      <Layout className="layout">
        <h1 className="header-style-normal">
          Please answer the four comprehension questions.
          <br />
          If you have any problems, you can go back (see bottom of this page) to
          re-read the instructions
        </h1>
        <Content className="site-layout-content">
          <div>
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

          <div>
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

          <div>
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

          <div>
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

          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            <Col className="gutter-row" span={10} style={{padding:'0 1%'}}>
              <div className="button-container">
                <NavLink to="/instructions">
                  <Button type="primary" size="large">
                    Read instructions again
                  </Button>
                </NavLink>
              </div>
            </Col>
            <Col className="gutter-row" span={10} offset={4} >
              <div className="button-container">
                {q1.answer === 1 &&
                q2.answer === 0 &&
                q3.answer === 3 &&
                q4.answer === 0 ? (
                  <Button
                    type="primary"
                    size="large"
                    onClick={async () => {
                      // await updateLearningAttempted();
                      await localStorage.setItem("userLearningAttempted", true);
                      navigate("/transitionlearning");
                    }}
                  >
                    Proceed to next
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    size="large"
                    onClick={() => {
                      if (trialCount === 0) {
                        window.alert("Incorrect Attempt 1");
                      } else if (trialCount === 1) {
                        window.alert("Incorrect Attempt 2");
                      } else if (trialCount === 2) {
                        navigate("/");
                      }
                      setTrialCount(trialCount + 1);
                    }}
                  >
                    Proceed to next
                  </Button>
                )}
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default Instructionquestion;
