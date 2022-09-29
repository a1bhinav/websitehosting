import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function TransitionOfficial() {
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
                                <h1 style={{ textAlign: "center" }}>Transition Official Round</h1>
                            </div>
                        </div>
                    </nav>
                    <div style={{ backgroundColor: "white", padding: "10vh 10vw" }}>
                        <p>
                            You have successfully completed the Learning Rounds. Now, you will begin with the 20 Official Rounds.
                            For each crop type, you will make five irrigation estimations. After submitting your estimation, you will
                            decide whether to implement your irrigation amount, or the statistical model’s irrigation amount to
                            determine your bonus. You will not see the model’s estimation beforehand.
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
                                to="/officialround"
                                variant="body2"
                            >
                                Start Official Rounds
                            </NavLink>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TransitionOfficial;