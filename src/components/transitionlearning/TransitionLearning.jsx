import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function TransitionLearning() {
    return (
        <>
            <div
                style={{
                    background: "#E4E1E1",
                    height: "100vh",
                }}
            >
                <div style={{ margin: "0 10vw" }}>
                    <nav className="fh5co-nav" role="navigation">
                        <div className="top-menu">
                            <div className="container">
                                <h1 style={{ textAlign: "center" }}>Transition Learning Round</h1>
                            </div>
                        </div>
                    </nav>
                    <div style={{ backgroundColor: "white", padding: "10vh 10vw" }}>
                        <p>
                            You will now begin with the <b>80 Learning Rounds.</b>
                            <br/>
                            Your estimations during the Learning Rounds do not count towards your bonus.
                            HOWEVER they are meant to help you learn how to make good irrigation estimations and observe the
                            statistical model’s performance.
                            If you are ready, proceed by clicking the button below.
                        </p>
                        <button
                            style={{
                                margin: "10vh 0 0 22vw",
                                border: 0,
                                background: "#ffffff",
                            }}
                        >
                            <NavLink
                                className="btn btn-primary btn-lg btn-demo"
                                to="/learninground"
                                variant="body2"
                            >
                                Start Learning Rounds
                            </NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TransitionLearning;