import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Chart from "react-apexcharts";
import css from "../../learninground/learninground.css";
import { generateNums, generateModelData, generateCorrectData } from "./utils";

const Seed4 = ({
  seedCount,
  setSeedCount,
  learningRound,
  setLearningRound,
}) => {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showGraph, setShowGraph] = useState(false);

  const [nums, setNums] = useState(generateNums());

  const [modelValues, setModelValues] = useState(generateModelData(nums));

  const [correctValues, setCorrectValues] = useState(generateCorrectData(nums));

  const [values, setValues] = useState([]);

  const [currentValue, setCurrentValue] = useState(10);

  const [submit, setSubmit] = useState(false);

  const [loading, setLoading] = useState(true);

  const [errorData, setErrorData] = useState([]);

  const [colors, setColors] = useState([]);

  const getErrorData = async() => {
    let error0 = 0, error1 = 0;
    const errors = [];
    const colors = [];

    for (let i = 0; i < correctValues.length; i++) {
      error0 += Math.abs(correctValues[i] - modelValues[i]);
      error1 += Math.abs(correctValues[i] - values[i]);
    }

    errors.push(error0);
    errors.push(error1);
    console.log(errors);

    if(error0 > error1){
      colors.push("#d4526e");
      colors.push("#13d8aa");
    }
    else if(error0 < error1){
      colors.push("#13d8aa");
      colors.push("#d4526e");
    }
    else{
      colors.push("#13d8aa");
      colors.push("#13d8aa");
    }

    setColors(colors);
    setErrorData(errors);
    console.log(errorData);
  };

  const options = {
    tooltip: {
      enabled: false,
    },
    chart: {
      height: 200,
      type: "bar",
      offsetY: 16,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        distributed: true,
        // horizontal: true,
        barHeight: "85%",
      },
    },
    dataLabels: {
      enabled: true,
    },
    xaxis: {
      categories: ["Model Error", "Human Error"],
      labels: {
        show: false,
      },
      // position: "top"
    },
    yaxis: {
      show: false,
    },
    grid: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
    colors: colors,
  };

  let series = [
    {
      data: errorData,
    },
  ];

  useEffect(() => {
    if(showGraph){
      getErrorData().then(() => {
        console.log("getter fn called");
        setLoading(false);
      });
    }
  }, [showGraph]);

  return (
    <div style={{display: 'flex', flexDirection:'column', justifyContent:'center'}}>
      <h3 style={{margin:'5vh 20vw 5vh 20vw'}}>
        This is for Vussanut seed irrigation <br />
        Input variables determining irrigation: sunshine (-), temperature (+),
        wind speed (-) <br />
        Sunshine-Input randomly drawn from (hours/day): High Low <br />
        18 1 Temperature-Input randomly drawn from (Fahrenheit): High Low
        <br />
        104 32 Wind-Input randomly drawn from (km/h): High Low
        <br />
        61 1
      </h3>

      <div>
        {showGraph ? (
          <div>
            {loading && (
              <div>
                <p style={{display:'flex', justifyContent:'center'}}>graph to be shown</p>
              </div>
            )}

            {!loading && (
              <div
                style={{
                  // backgroundColor: "#ffe9e9",
                  // height:'100%',
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#fee856",
                  height: "100vh",
                  flexDirection: 'column'
                }}
              >
                <div>
                  <h2
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: "5vh",
                    }}
                  >
                    graph is being shown
                  </h2>

                  <div
                    style={{
                      backgroundColor: "#ffe9e9",
                      display: "flex",
                      justifyContent: "center",
                      margin: "5vh 20vw 0 20vw",
                      // overflow: "auto",
                    }}
                  >
                    <Chart
                      options={options}
                      series={series}
                      type="bar"
                      height={500}
                      width={400}
                      className="apex-charts"
                      dir="ltr"
                    />
                  </div>

                  <div style={{ backgroundColor: "#fee856",
                      display: "flex",
                      justifyContent: "center",
                      marginTop:'5vh',
                      paddingBottom:'5vh'
                  }}>
                    <button
                      className="btn btn-primary btn-lg btn-demo"
                      // style={{ position: "relative", left: "35%" }}
                      // onClick={()=>{
                      //   setSeedCount(seedCount+1);
                      //   learningRound.push({nums, modelValues, correctValues, values});
                      //   setLearningRound(learningRound);
                      // }}

                      onClick={async () => {
                        learningRound.push({
                          nums,
                          modelValues,
                          correctValues,
                          values,
                        });
                        setLearningRound(learningRound);

                        console.log(learningRound);

                        const res = await fetch("/api/updateLearningRound", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            _id: localStorage.getItem("userId"),
                            learningRound: learningRound,
                          }),
                        });

                        const data = await res.json();

                        if (!data) {
                          window.alert("Technical error");
                          console.log("Technical error");
                        } else if (res.status === 401) {
                          window.alert(data.error);
                          console.log(data.error);
                        } else {
                          console.log(data.message);
                        }

                        navigate("/officialround", { replace: true });
                      }}
                    >
                      Let's try official rounds; O Shall we???
                    </button>
                  </div>
                </div>
                {/* <div style={{ display: "flex", justifyContent: "center" }}>
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
             */}
              </div>
            )}
          </div>
        ) : (
          <div style={{margin:'5vh 20vw 5vh 20vw'}}>
            <h1> Q{currentQuestion + 1}</h1>
            <p>
              values of variables are : {nums[currentQuestion].x}{" "}
              {nums[currentQuestion].y} {nums[currentQuestion].z}
            </p>

            <input
              type="number"
              required
              min={0}
              max={70}
              id={`q${currentQuestion + 1}`}
              name={`q${currentQuestion + 1}`}
              defaultValue={0}
              onChange={(e) => setCurrentValue(e.target.value)}
              style={{ width: "50%" }}
              disabled={submit}
            />

            <input
              style={{ marginBottom: "5%" }}
              type="submit"
              defaultValue="Submit"
              onClick={() => {
                if (submit) {
                  alert("Question already answered.");
                  return;
                }
                if (currentValue >= 10 && currentValue <= 30) {
                  setSubmit(true);
                  return;
                }
                alert("Input should be >= 10 and <= 30");
              }}
            />

            {submit && (
              <div>
                <p>
                  Value predicted by model is: {modelValues[currentQuestion]}
                </p>
                <p>Correct Value is: {correctValues[currentQuestion]}</p>

                {currentQuestion === 14 && (
                  <button
                    className="btn btn-primary btn-lg btn-demo"
                    style={{ position: "relative", left: "10%" }}
                    onClick={() => {
                      values.push(currentValue);
                      setValues(values);
                      setShowGraph(true);
                      setSubmit(false);
                    }}
                  >
                    Proceed to next seed
                  </button>
                )}

                <button
                  className="btn btn-primary btn-lg btn-demo"
                  style={{ position: "relative", left: "45%" }}
                  onClick={() => {
                    if (currentQuestion >= 14 && currentQuestion < 19) {
                      nums.push({
                        x: Math.floor(Math.random() * 10) + 1,
                        y: Math.floor(Math.random() * 10) + 1,
                        z: Math.floor(Math.random() * 10) + 1,
                      });
                      setNums(nums);

                      modelValues.push(
                        Math.floor(
                          2 * nums[0].x + 0.9 * nums[0].y + 0.8 * nums[0].z
                        )
                      );
                      setModelValues(modelValues);

                      correctValues.push(
                        Math.floor(
                          1.8 * nums[0].x + nums[0].y + 0.7 * nums[0].z
                        )
                      );
                      setCorrectValues(correctValues);
                    }

                    values.push(currentValue);
                    setValues(values);

                    if (currentQuestion === 19) {
                      setShowGraph(true);
                    } else {
                      setCurrentQuestion(currentQuestion + 1);
                    }

                    setSubmit(false);
                  }}
                >
                  {currentQuestion === 19 ? "Proceed to Next Seed" : "Next"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Seed4;
