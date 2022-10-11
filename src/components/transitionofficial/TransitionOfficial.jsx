import React from "react";
import { NavLink } from "react-router-dom";

import { Layout, Button } from "antd";
import "antd/dist/antd.css";

const { Content } = Layout;

const TransitionOfficial = () => {
  return (
    <div className="total-screen">
      <Layout className="layout">
        <h1 className="header-style">Transition Official Round</h1>
        <Content className="site-layout-content">
          <div>
            <p className="card-text">
              You have successfully completed the Learning Rounds. Now, you will
              begin with the <b>20 Official Rounds</b>.
              <br />
              For each crop type, you will make{" "}
              <b>five irrigation estimations</b>. After submitting your
              estimation, you will decide whether to implement your irrigation
              amount, or the statistical model’s irrigation amount to determine
              your bonus. You will not see the model’s estimation beforehand. If
              you are ready, proceed by clicking the button below.
            </p>
          </div>
          <div className="button-container">
            <NavLink to="/learninground">
              <Button type="primary" shape="round" size="large">
                Start Official Rounds
              </Button>
            </NavLink>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default TransitionOfficial;
