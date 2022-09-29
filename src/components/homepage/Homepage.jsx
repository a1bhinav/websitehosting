import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../air/css/animate.css";
import "../../air/css/bootstrap.css";
import "../../air/css/bootstrap.css.map";
import "../../air/css/flexslider.css";
import "../../air/css/icomoon.css";
import "../../air/css/magnific-popup.css";
import "../../air/css/style.css";
import "../../air/css/style.css.map";

function Homepage() {
  return (
    <div>
      <div id="page">
        <nav className="fh5co-nav" role="navigation">
          <div className="top-menu">
            <div className="container">
              <div className="row">
                <div className="col-xs-2">
                  <div id="fh5co-logo">
                  </div>
                </div>
                <div className="col-xs-20">
                {/* <h1>Welcome to the Test &amp; Human-AI Decision Making</h1> */}
                <h1 style={{marginLeft:'28vw'}}>Welcome to our task!</h1>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <header
          id="fh5co-header"
          className="fh5co-cover js-fullheight"
          role="banner"
          style={{
            background: "#E4E1E1",
            padding: "2% 0 10% 0",
          }}
        >
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1 text-center" style={{backgroundColor:"white", padding:"0 10%"}}>
                <div className="display-t js-fullheight">
                  <div
                    className="display-tc js-fullheight animate-box"
                    data-animate-effect="fadeIn"
                  >
                    {/* <p style={{fontSize:'20px', fontWeight:'900'}}>Welcome to our task!</p> */}
                    <p style={{marginBottom:'10%', textAlign:'justify', fontSize:'20px'}}>
                      All your responses will be kept confidential and you will remain anonymous.<br/>
                      This task will take approximately <b>20 minutes</b> to complete.<br/> You will be paid <b>£X</b> for completing the task.<br/><br/>
                      Additionally, you can earn a bonus of up to <b>£Y</b> that depends on your actions, as explained in more details
                      on the next pages. During the task, we will not speak of Pounds, but Coins.<br/><br/>
                      Your entire payoff will first be calculated in
                      Coins. The Coins you earn during the task will be converted to Pounds at the end of the task.<br/><br/>
                      The following conversion rate applies:&nbsp;
                      <b>1 Coin = £Z</b><br/><br/>
                      Please click <b>Proceed</b> to start with the task.</p>
                    <p>
                      <NavLink
                          className="btn btn-primary btn-lg btn-demo"
                          to="/instructions"
                          variant="body2"
                        >
                          Proceed
                        </NavLink>
                      {/* {isLoggedIn ? (
                      userTestAttempted ? (
                            <NavLink
                              className="btn btn-primary btn-lg btn-demo"
                              to="/result"
                              variant="body2"
                            >
                              Show Result
                            </NavLink>
                          ) : (
                            <NavLink
                              className="btn btn-primary btn-lg btn-demo"
                              to="/instructions"
                              variant="body2"
                            >
                              Go to Instruction Page
                            </NavLink>
                          )) : (
                            <NavLink
                          className="btn btn-primary btn-lg btn-demo"
                          to="/login"
                          variant="body2"
                        >
                          Go to Instruction Page
                        </NavLink>
                      )}
                      {isLoggedIn && (
                        <>
                          {userTestAttempted && (
                            <NavLink
                              className="btn btn-primary btn-lg btn-demo"
                              to="/instructions"
                              variant="body2"
                            >
                              Show Result
                            </NavLink>
                          )}
                          {userTestAttempted===false && (
                            <NavLink
                              className="btn btn-primary btn-lg btn-demo"
                              to="/instructions"
                              variant="body2"
                            >
                              Start test
                            </NavLink>
                          )}
                        </>
                      )} */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Homepage;
