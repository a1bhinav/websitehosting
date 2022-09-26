import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Seed1 from "./seed1/Seed1.jsx";
import Seed2 from "./seed2/Seed2.jsx";
import Seed3 from "./seed3/Seed3.jsx";
import Seed4 from "./seed4/Seed4.jsx";

function OfficialRound() {
  const navigate = useNavigate();

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [seedCount, setSeedCount] = useState(0);

  const [learningRound, setLearningRound] = useState([]);
  
  // const updateTestAttempted = async ()=>{
  //   const res = await fetch('/api/testAttempted', {
  //     method: 'POST',
  //     headers:{
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       // _id: localStorage.getItem("userId")
  //     })
  //   });

  //   const data = await res.json();

  //   if(!data){
  //     alert("Technical error");
  //     console.log("Technical error");
  //   }
  //   else if (res.status === 401) {
  //     window.alert(data.error);
  //     console.log(data.error);
  //   }
  //   else {
  //     console.log(data.message);
  //   }
  // }

  // useEffect(() => {
  //   if (localStorage.getItem("userLearningAttempted") === "true") {
  //     if(localStorage.getItem('userTestAttempted') === "true"){
  //       navigate("/", {replace: true});
  //     }
  //     else{
  //       updateTestAttempted();

  //       console.log("user set true");
  //       localStorage.setItem("userTestAttempted", true);
  //     }
  //   }
  //   else{
  //     navigate("/", { replace: true });
  //   }
  // }, [])
  
  // useEffect(() => {
  //   if (!localStorage.getItem("isLoggedIn")) {
  //     setIsLoggedIn(false);
  //     navigate("/", { replace: true });
  //   } else {
  //     setIsLoggedIn(true);
  //   }
  // }, [isLoggedIn]);

  useEffect(() => {
    if (localStorage.getItem("userLearningAttempted") !== "true") {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <div style={{ backgroundColor: "#fee856", height: "100%" }}>
      {seedCount === 0 && (
        <>
          <Seed1
            seedCount={seedCount}
            setSeedCount={setSeedCount}
            learningRound={learningRound}
            setLearningRound={setLearningRound}
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
  );
}

export default OfficialRound;