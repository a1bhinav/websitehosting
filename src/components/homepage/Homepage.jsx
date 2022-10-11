import React from "react";
import { NavLink } from "react-router-dom";

import { Layout, Button } from "antd";
import "antd/dist/antd.css";
import css from "./styles.css";

const { Content } = Layout;

const Homepage = () => {
  
  return (
    <div className="total-screen">
      <Layout className="layout">
        <h1 className="header-style">Welcome to our task!</h1>
        <Content className="site-layout-content">
          <div>
            <p className="card-text">
              All your responses will be kept confidential and you will remain
              anonymous.
              <br />
              This task will take approximately <b>20 minutes</b> to complete.
              <br /> You will be paid <b>£X</b> for completing the task.
              <br />
              <br />
              Additionally, you can earn a bonus of up to <b>£Y</b> that depends
              on your actions, as explained in more details on the next pages.
              During the task, we will not speak of Pounds, but Coins.
              <br />
              <br />
              Your entire payoff will first be calculated in Coins. The Coins
              you earn during the task will be converted to Pounds at the end of
              the task.
              <br />
              <br />
              The following conversion rate applies:&nbsp;
              <b>1 Coin = £Z</b>
              <br />
              <br />
              Please click <b>Proceed</b> to start with the task.
            </p>
          </div>
          <div className="button-container">
            <NavLink to="/instructions">
              <Button type="primary" shape="round" size="large">
                Proceed
              </Button>
            </NavLink>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Homepage;
