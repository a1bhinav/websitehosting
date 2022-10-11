import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Seed1 from "./seed1/Seed1.jsx";
import Seed2 from "./seed2/Seed2.jsx";
import Seed3 from "./seed3/Seed3.jsx";
import Seed4 from "./seed4/Seed4.jsx";

import Seed1Official from "./seed1/OfficialRound/Seed1Official";
import Seed2Official from "./seed2/OfficialRound/Seed2Official";
import Seed3Official from "./seed3/OfficialRound/Seed3Official";
import Seed4Official from "./seed4/OfficialRound/Seed4Official";

import { Layout, Button } from "antd";
import "antd/dist/antd.css";

const { Content } = Layout;

const Learninground = () => {
  const navigate = useNavigate();

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [seedCount, setSeedCount] = useState(4);

  const [learningRound, setLearningRound] = useState([]);

  const [seedCountOfficial, setSeedCountOfficial] = useState(4);

  const [officialRound, setOfficialRound] = useState([]);

  const [isOfficialRound, setIsOfficialRound] = useState(false);

  const toggleOfficial = () => {
    setIsOfficialRound(!isOfficialRound);

    console.log(seedCount);
    console.log(seedCountOfficial);
    console.log(isOfficialRound);
    console.log(learningRound);
    console.log(officialRound);
  };

  useEffect(() => {
    if (localStorage.getItem("userLearningAttempted") !== "true") {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <>
      {isOfficialRound ? (
        <div className="total-screen">
          {seedCountOfficial === 0 && (
            <>
              <Seed1Official
                seedCountOfficial={seedCountOfficial}
                setSeedCountOfficial={setSeedCountOfficial}
                officialRound={officialRound}
                setOfficialRound={setOfficialRound}
                toggleOfficial={toggleOfficial}
              />
            </>
          )}
          {seedCountOfficial === 1 && (
            <>
              <Seed2Official
                seedCountOfficial={seedCountOfficial}
                setSeedCountOfficial={setSeedCountOfficial}
                officialRound={officialRound}
                setOfficialRound={setOfficialRound}
                toggleOfficial={toggleOfficial}
              />
            </>
          )}
          {seedCountOfficial === 2 && (
            <>
              <Seed3Official
                seedCountOfficial={seedCountOfficial}
                setSeedCountOfficial={setSeedCountOfficial}
                officialRound={officialRound}
                setOfficialRound={setOfficialRound}
                toggleOfficial={toggleOfficial}
              />
            </>
          )}
          {seedCountOfficial === 3 && (
            <>
              <Seed4Official
                seedCountOfficial={seedCountOfficial}
                setSeedCountOfficial={setSeedCountOfficial}
                officialRound={officialRound}
                setOfficialRound={setOfficialRound}
                toggleOfficial={toggleOfficial}
              />
            </>
          )}

          {/* {seedCount === 4 && (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            border: 0,
            padding: "45vh 0 45vh 0",
            backgroundColor: "#fee856",
          }}
        >
          <NavLink
            className="btn btn-primary btn-lg btn-demo"
            to="/officialround"
            variant="body2"
            onClick={async () => {
              console.log(learningRound);

              const res = await fetch("/api/updateLearningRound", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  _id: localStorage.getItem("userId"),
                  learningRound: learningRound
                })
              });

              const data = await res.json();

              if(!data){
                window.alert("Technical error");
                console.log("Technical error");
              }
              else if (res.status === 422 || res.status === 400) {
                window.alert(data.error);
                console.log(data.error);
              }
              else {

              }
            }}
          >
            Let's try official rounds; O Shall we???
          </NavLink>
        </button>
      </div>
    )} */}
        </div>
      ) : (
        <div className="total-screen">
          {seedCount === 0 && (
            <>
              <Seed1
                seedCount={seedCount}
                setSeedCount={setSeedCount}
                learningRound={learningRound}
                setLearningRound={setLearningRound}
                toggleOfficial={toggleOfficial}
              />
            </>
          )}
          {seedCount === 1 && (
            <>
              <Seed2
                seedCount={seedCount}
                setSeedCount={setSeedCount}
                learningRound={learningRound}
                setLearningRound={setLearningRound}
                toggleOfficial={toggleOfficial}
              />
            </>
          )}
          {seedCount === 2 && (
            <>
              <Seed3
                seedCount={seedCount}
                setSeedCount={setSeedCount}
                learningRound={learningRound}
                setLearningRound={setLearningRound}
                toggleOfficial={toggleOfficial}
              />
            </>
          )}
          {seedCount === 3 && (
            <>
              <Seed4
                seedCount={seedCount}
                setSeedCount={setSeedCount}
                learningRound={learningRound}
                setLearningRound={setLearningRound}
                toggleOfficial={toggleOfficial}
              />
            </>
          )}
          {seedCount === 4 && (
        <div className="total-screen">
        <Layout className="layout">
          <h1 className="header-style">Final Result</h1>
          <Content className="site-layout-content">
            <div>
              <p style={{textAlign:"center"}} className="card-text">
                This is the amount you earned in total: X
              </p>
            </div>
            <div className="button-container"style={{marginTop:"10%"}}>
              <NavLink to="/delegationdecision">
                <Button type="primary" shape="round" size="large">
                  Next
                </Button>
              </NavLink>
            </div>
          </Content>
        </Layout>
      </div>
      )}
        </div>
      )}
    </>
  );
};

export default Learninground;
