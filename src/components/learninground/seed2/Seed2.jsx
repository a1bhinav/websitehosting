import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Chart from "react-apexcharts";
import css from "../../learninground/learninground.css";
import { generateNums, generateModelData, generateCorrectData } from "./utils";
import ImageGresley from '../../../resources/Gresley.jpeg'

const Seed2 = ({
  seedCount,
  setSeedCount,
  learningRound,
  setLearningRound,
}) => {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showGraph, setShowGraph] = useState(false);

  const [onChangeInput, setOnChangeInput] = useState(false);

  const [nums, setNums] = useState(generateNums());

  const [modelValues, setModelValues] = useState(generateModelData(nums));

  const [correctValues, setCorrectValues] = useState(generateCorrectData(nums));

  const [values, setValues] = useState([]);

  const [currentValue, setCurrentValue] = useState(0);

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
    <div style={{ margin: "0 15vw" }}>
      <h3 style={{ paddingTop: "5%" }}>
        <div style={{ marginBottom:'5%', textAlign:'center'}}>
        {!showGraph && <img src={ImageGresley} alt="Gresley" />}
        <b style={{ fontSize: "40px", textDecoration:'underline' }}><br/>Irrigation: Gresley<br/></b>
        <div style={{fontSize: "30px", marginTop:'20px' }}>
        <b>Learning Round - {currentQuestion+1}/20</b>
        </div>
        </div>
      </h3>

      <div>
        {showGraph ? (
          <div>
            <h3 style={{textAlign:'center', fontWeight:'bold'}}>Summary</h3>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
            <table id="result-table">
                  <tr>
                    <th>Learning Round</th>
                    <th>Correct Value</th>
                    <th>Model Value</th>
                    <th>User Value</th>
                  </tr>
                  {values.map((value, index) => (
                  <tr>
                        <td>{index+1}</td>
                        <td>{correctValues[index]}</td>
                        <td>{modelValues[index]}</td>
                        <td>{value}</td>
                      </tr>
                  ))}
                </table>
                {currentQuestion===14 &&
            <p>
              You have completed <b>15</b> Learnings Rounds.
                  <br/>If you feel like you
                  understand your <b>Gresley</b> seed crop, you can choose to continue
                  with another crop. Alternatively, you can learn about <b>Gresley</b> seed for another <b>5 rounds</b>
            </p>
}

<div style={{display:'flex', justifyContent:'center'}}>
            <button
              className="btn btn-primary btn-lg btn-demo"
              style={currentQuestion===14 ? {width:'275px', marginRight:'15vw'} : {width:'275px'}}
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

            
{currentQuestion===14 && 
            <button
              className="btn btn-primary btn-lg btn-demo"
              // style={{ position: "relative", left: "30vw" }}
              style={{width:'275px'}}
              onClick={() => {
                setCurrentQuestion(currentQuestion + 1);
                setShowGraph(false);
                setSubmit(false);

                if (currentQuestion === 14) {
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
              }}
            >
              Go to next Learning Round
            </button>
}
          </div>
          </div>
          </div>
        ) : (
          <div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent:'center'}}>
              <span>
                <div style={{ marginBottom:'5%' }}>
        {/* <b style={{fontSize: "30px" }}>Learning Round - {currentQuestion+1}/20</b> */}
                </div>
                <h2>Choose your irrigation amount (0 – 70 gallons (in thousands))</h2>
                <table>
                  <tr>
                    <td>Sunshine ( 1 - 18 )</td>
                    <td>Temperature ( 32 - 104 Fahrenheit )</td>
                    <td>Wind ( 1 - 61 km/hr )</td>
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
            
<div style={{ marginLeft:'10vw'}}>
            <input
              type="number"
              required
              min={0}
              max={70}
              id={`q${currentQuestion + 1}`}
              name={`q${currentQuestion + 1}`}
              defaultValue={0}
              onChange={(e) => {
                setCurrentValue(e.target.value);
                setOnChangeInput(true);
              }}
              style={{ width: "50%" }}
              disabled={submit}
            />

            <input
              style={onChangeInput ? 
                { background:'#FE188B', marginBottom: "5%", width: "25%" }
                :
                { background:'#FDC6E2', marginBottom: "5%", width: "25%" }
              }
              type="submit"
              defaultValue="Submit"
              disabled={!onChangeInput}
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
            </div>

            {submit && (
              <div>
                <p>
                  Value predicted by model is: {modelValues[currentQuestion]}
                </p>
                <p>Correct Value is: {correctValues[currentQuestion]}</p>

                {/* {currentQuestion === 14 && (
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
                )} */}

                <button
                  className="btn btn-primary btn-lg btn-demo"
                  style={{ position: "relative", left: "45%" }}
                  onClick={() => {
                    if (currentQuestion > 14 && currentQuestion < 19) {
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

                    if (currentQuestion === 19 || currentQuestion === 14) {
                      setShowGraph(true);
                    } else {
                      setCurrentQuestion(currentQuestion + 1);
                    }

                    setOnChangeInput(false);
                    setSubmit(false);
                  }}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Seed2;
