import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Chart from "react-apexcharts";
import css from "../../learninground/learninground.css";
import { generateNums, generateModelData, generateCorrectData } from "./utils";

const Seed1 = ({
  seedCount,
  setSeedCount,
  learningRound,
  setLearningRound,
}) => {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(14);

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

  const getErrorData = async () => {
    let error0 = 0,
      error1 = 0;
    const errors = [];
    const colors = [];

    for (let i = 0; i < correctValues.length; i++) {
      error0 += Math.abs(correctValues[i] - modelValues[i]);
      error1 += Math.abs(correctValues[i] - values[i]);
    }

    errors.push(error0);
    errors.push(error1);
    console.log(errors);

    if (error0 > error1) {
      colors.push("#d4526e");
      colors.push("#13d8aa");
    } else if (error0 < error1) {
      colors.push("#13d8aa");
      colors.push("#d4526e");
    } else {
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
    if (showGraph) {
      getErrorData().then(() => {
        console.log("getter fn called");
        setLoading(false);
      });
    }
  }, [showGraph]);

  return (
    <div style={{ margin: "0 20vw" }}>
      <h3 style={{ paddingTop: "5%" }}>
        This round is for <b style={{ fontSize: "30px" }}>Meemmaseed</b>{" "}
        irrigation
        <br />
        <br />
        <br />
        {/* Input variables are randomly drawn<br /> */}
        <table>
          <tr>
            <td>Input variables</td>
            <td>High</td>
            <td>Low</td>
          </tr>
          <tr>
            <td>Sunshine</td>
            <td>18</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Temperature (Fahrenheit)</td>
            <td>104</td>
            <td>32</td>
          </tr>
          <tr>
            <td>Wind (km/hr)</td>
            <td>61</td>
            <td>1</td>
          </tr>
        </table>
      </h3>

      <div>
        {showGraph ? (
          <div>
            <p>{nums.length}</p>
            <p>
              You have completed 15 Learnings Rounds. If you feel like you
              understand your Meemmaseed crop, you can choose to continue with
              another crop. Alternatively, you can learn about Meemmaseed for
              another 5 rounds
            </p>

            <button
              className="btn btn-primary btn-lg btn-demo"
              style={{ position: "relative", left: "35%" }}
              onClick={() => {
                setSeedCount(seedCount + 1);
                learningRound.push({
                  nums,
                  modelValues,
                  correctValues,
                  values,
                });
                setLearningRound(learningRound);
              }}
            >
              Proceed to Next Seed
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <span>
                <h2>Predict the optimal irrigation (0-70 gallons):</h2>
                <table style={{ marginLeft: "10%" }}>
                  <tr>
                    <td>Sunshine</td>
                    <td>Temperature</td>
                    <td>Wind</td>
                  </tr>
                  <tr>
                    <td>
                      <b>{nums[currentQuestion].x}</b>
                    </td>
                    <td>
                      <b>{nums[currentQuestion].y}</b>
                    </td>
                    <td>
                      <b>{nums[currentQuestion].z}</b>
                    </td>
                  </tr>
                </table>
              </span>
            </div>

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
              style={{ marginBottom: "5%", width: "25%" }}
              type="submit"
              defaultValue="Submit"
              onClick={() => {
                if (submit) {
                  alert("Question already answered.");
                  return;
                }
                if (currentValue >= 0 && currentValue <= 70) {
                  setSubmit(true);
                  return;
                }
                alert("Please provide an input between 0 to 70");
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
                        y: Math.floor(Math.random() * 40) + 30,
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

export default Seed1;
