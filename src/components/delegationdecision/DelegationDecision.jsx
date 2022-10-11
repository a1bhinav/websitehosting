import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { Layout, Button } from "antd";
import "antd/dist/antd.css";
import styles from "../instructionquestion/style.module.css";

const { Content } = Layout;

const DelegationDecision = () => {
  const [q, setQ] = useState({
    question: "What would you prefer?",
    options: ["Your own decision", "Algorithm's decision"],
    answer: -1,
  });

  const updateQuestion = (ans) => {
    q.answer = ans;
    setQ({ ...q });
  };

  return (
    <div className="total-screen">
      <Layout className="layout">
        <h1 className="header-style">{q.question}</h1>
        <Content className="site-layout-content">
          <div style={{ marginBottom: "5%", textAlign: "center" }}>
            <button
              className={
                q.answer === 0 ? styles.bigblueSelected : styles.bigblue
              }
              type="radio"
              onClick={() => updateQuestion(0)}
            >
              {q.options[0]}
            </button>
            <br />
            <button
              className={
                q.answer === 1 ? styles.bigblueSelected : styles.bigblue
              }
              type="radio"
              onClick={() => updateQuestion(1)}
            >
              {q.options[1]}
            </button>
          </div>
          <div className="button-container">
            <NavLink to="/">
              <Button type="primary" shape="round" size="large">
                Submit
              </Button>
            </NavLink>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default DelegationDecision;
