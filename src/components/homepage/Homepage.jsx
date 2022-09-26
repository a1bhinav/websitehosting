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
      {/* <p>WELCOME PAGE for the Project</p>
      <button> <a href="/instructions"> Go to next page aka Instruction Page</a></button> */}

      {/* <div className="fh5co-loader" /> */}

      <div id="page">
        <nav className="fh5co-nav" role="navigation">
          <div className="top-menu">
            <div className="container">
              <div className="row">
                <div className="col-xs-2">
                  <div id="fh5co-logo">
                  </div>
                </div>
                <div className="col-xs-2">
                  {/* {isLoggedIn && (
                    <div id="fh5co-logo2">
                      <NavLink
                        className="btn btn-primary btn-lg btn-demo"
                        to="/logout"
                        variant="body2"
                      >
                        Logout
                      </NavLink>
                    </div>
                  )}

                  {!isLoggedIn && (
                    <div id="fh5co-logo2">
                      <NavLink
                        className="btn btn-primary btn-lg btn-demo"
                        to="/login"
                        variant="body2"
                      >
                        Login
                      </NavLink>
                      <NavLink
                        className="btn btn-primary btn-lg btn-demo"
                        to="/signup"
                        variant="body2"
                      >
                        Signup
                      </NavLink>
                    </div>
                  )} */}
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
            background: "#FEE856",
            padding: "15% 0 15% 0",
          }}
        >
          <div className="overlay" />
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <div className="display-t js-fullheight">
                  <div
                    className="display-tc js-fullheight animate-box"
                    data-animate-effect="fadeIn"
                  >
                    <h1>Welcome to the Test &amp; Human-AI Decision Making</h1>
                    <p>Welcome to our task!
All your responses will be kept confidential and you will remain anonymous.
This task will take approximately 20 minutes to complete. You will be paid £X for completing the task.
Additionally, you can earn a bonus of up to £Y that depends on your actions, as explained in more details
on the next pages.
During the task, we will not speak of Pounds, but Coins. Your entire payoff will first be calculated in
Coins. The Coins you earn during the task will be converted to Pounds at the end of the task. The
following conversion rate applies:
1 Coin = £Z
Please click Proceed to start with the task.</p>
                    
                    
                    <p>
                      <NavLink
                          className="btn btn-primary btn-lg btn-demo"
                          to="/instructions"
                          variant="body2"
                        >
                          Go to Instruction Page
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
        {/* <div id="fh5co-started">
      <div className="overlay" />
      <div className="container">
        <div className="row animate-box">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2>Hire Us!</h2>
            <p>
              Facilis ipsum reprehenderit nemo molestias. Aut cum mollitia
              reprehenderit. Eos cumque dicta adipisci architecto culpa amet.
            </p>
            <p>
              <a href="#" className="btn btn-default btn-lg">
                Contact Us
              </a>
            </p>
          </div>
        </div>
      </div>
    </div> */}
      </div>
    </div>
  );
}

export default Homepage;
