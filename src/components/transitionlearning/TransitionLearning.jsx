import React from "react";
import { NavLink } from "react-router-dom";

import { Layout, Button } from "antd";
import "antd/dist/antd.css";

const { Content } = Layout;

const TransitionLearning = () => {
  return (
    <div className="total-screen">
      <Layout className="layout">
        <h1 className="header-style">Transition Training Round</h1>
        <Content className="site-layout-content">
          <div>
            <p className="card-text">
              You will now begin with the <b>80 Training Rounds.</b>
              <br />
              Your estimations during the Training Rounds do not count towards
              your bonus. HOWEVER they are meant to help you learn how to make
              good irrigation estimations and observe the statistical model’s
              performance. If you are ready, proceed by clicking the button
              below.
            </p>
          </div>
          <div className="button-container">
            <NavLink to="/learninground">
              <Button type="primary" shape="round" size="large">
                Start Training Rounds
              </Button>
            </NavLink>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default TransitionLearning;
