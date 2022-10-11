import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { generateNums, generateModelData, generateCorrectData } from "./utils";
import ImageGresley from "../../../resources/Gresley.jpeg";

import { Layout, Col, Row, Button, Modal } from "antd";
import "antd/dist/antd.css";
// import css from "../../learninground/learninground.css";

const { Content } = Layout;

const Seed2 = ({
  seedCount,
  setSeedCount,
  learningRound,
  setLearningRound,
  toggleOfficial
}) => {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(14);

  const [showGraph, setShowGraph] = useState(false);

  const [onChangeInput, setOnChangeInput] = useState(false);

  const [nums, setNums] = useState(generateNums());

  const [modelValues, setModelValues] = useState(generateModelData(nums));

  const [correctValues, setCorrectValues] = useState(generateCorrectData(nums));

  const [values, setValues] = useState([]);

  const [currentValue, setCurrentValue] = useState(0);

  const [submit, setSubmit] = useState(false);

  const [loading, setLoading] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if (currentQuestion > 14 && currentQuestion < 19) {
      nums.push({
        x: Math.floor(Math.random() * 10) + 1,
        y: Math.floor(Math.random() * 40) + 30,
        z: Math.floor(Math.random() * 10) + 1,
      });
      setNums(nums);

      modelValues.push(
        Math.floor(2 * nums[currentQuestion].x + 0.9 * nums[currentQuestion].y + 0.8 * nums[currentQuestion].z)
      );
      setModelValues(modelValues);

      correctValues.push(
        Math.floor(1.8 * nums[currentQuestion].x + nums[currentQuestion].y + 0.7 * nums[currentQuestion].z)
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
    setIsModalOpen(false);
  };

  const [errorData, setErrorData] = useState([]);

  // const [colors, setColors] = useState([]);

  const getErrorData = async () => {
    let error0 = 0,
      error1 = 0;
    const errors = [];
    // const colors = [];

    for (let i = 0; i < correctValues.length; i++) {
      error0 += Math.abs(correctValues[i] - modelValues[i]);
      error1 += Math.abs(correctValues[i] - values[i]);
    }

    errors.push(error0);
    errors.push(error1);
    console.log(errors);

    // if (error0 > error1) {
    //   colors.push("#d4526e");
    //   colors.push("#13d8aa");
    // } else if (error0 < error1) {
    //   colors.push("#13d8aa");
    //   colors.push("#d4526e");
    // } else {
    //   colors.push("#13d8aa");
    //   colors.push("#13d8aa");
    // }

    // setColors(colors);
    setErrorData(errors);
    console.log(errorData);
  };

  // const options = {
  //   tooltip: {
  //     enabled: false,
  //   },
  //   chart: {
  //     height: 200,
  //     type: "bar",
  //     offsetY: 16,
  //     toolbar: {
  //       show: false,
  //     },
  //   },
  //   plotOptions: {
  //     bar: {
  //       distributed: true,
  //       // horizontal: true,
  //       barHeight: "85%",
  //     },
  //   },
  //   dataLabels: {
  //     enabled: true,
  //   },
  //   xaxis: {
  //     categories: ["Model Error", "Human Error"],
  //     labels: {
  //       show: false,
  //     },
  //     // position: "top"
  //   },
  //   yaxis: {
  //     show: false,
  //   },
  //   grid: {
  //     padding: {
  //       top: 0,
  //       right: 0,
  //       bottom: 0,
  //       left: 0,
  //     },
  //   },
  //   colors: colors,
  // };

  // let series = [
  //   {
  //     data: errorData,
  //   },
  // ];

  useEffect(() => {
    if (showGraph) {
      getErrorData().then(() => {
        console.log("getter fn called");
        setLoading(false);
      });
    }
  }, [showGraph]);

  return (
    <div>
      <Layout className="layout">
        <h1 className="header-style-normal" style={{ fontSize: "25px" }}>
          Training Round {currentQuestion + 1}/20 - Irrigation: Gresley
          {!showGraph && <img src={ImageGresley} alt="Gresley" />}
        </h1>
        <Content className="site-layout-content">
          <div>
            {showGraph ? (
              <div>
                <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
                  Summary
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <table id="result-table">
                    <tr>
                      <th>Training Round</th>
                      <th>Correct Value</th>
                      <th>Model Value</th>
                      <th>User Value</th>
                    </tr>
                    {values.map((value, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{correctValues[index]}</td>
                        <td>{modelValues[index]}</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </table>
                  {currentQuestion === 14 && (
                    <p>
                      You have completed <b>15</b> Trainings Rounds.
                      <br />
                      If you feel like you understand your <b>Gresley</b> seed
                      crop, you can choose to continue with another crop.
                      Alternatively, you can learn about <b>Gresley</b> seed
                      for another <b>5 rounds</b>
                    </p>
                  )}

                  <div style={
                    currentQuestion === 14
                    ? { marginLeft: "20%" }
                    : { marginLeft: "25vw"}
                  }>
                    <Row
                      gutter={{
                        xs: 8,
                        sm: 16,
                        md: 24,
                        lg: 32,
                      }}
                    >
                      <Col className="gutter-row" span={12}>
                        <div className="button-container">
                          <Button
                            type="primary"
                            shape="round"
                            size="large"
                            style={
                              currentQuestion === 14
                                ? { width: "275px", marginRight: "15vw" }
                                : { width: "275px" }
                            }
                            onClick={() => {
                              setSeedCount(seedCount + 1);
                              learningRound.push({
                                nums,
                                modelValues,
                                correctValues,
                                values,
                              });
                              setLearningRound(learningRound);
                              toggleOfficial();
                            }}
                          >
                            Go to Official Rounds
                          </Button>
                        </div>
                      </Col>

                      {currentQuestion === 14 && (
                        <Col className="gutter-row" span={12}>
                          <div
                            className="button-container"
                            style={{ width: "275px" }}
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
                                    2 * nums[currentQuestion].x +
                                      0.9 * nums[currentQuestion].y +
                                      0.8 * nums[currentQuestion].z
                                  )
                                );
                                setModelValues(modelValues);

                                correctValues.push(
                                  Math.floor(
                                    1.8 * nums[currentQuestion].x +
                                      nums[currentQuestion].y +
                                      0.7 * nums[currentQuestion].z
                                  )
                                );
                                setCorrectValues(correctValues);
                              }
                            }}
                          >
                            <Button type="primary" shape="round" size="large">
                              Go to next Training Round
                            </Button>
                          </div>
                        </Col>
                      )}
                    </Row>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <span>
                    <div style={{ marginBottom: "5%" }}></div>
                    <h2>
                      Choose your irrigation amount (0 – 70 gallons (in
                      thousands))
                    </h2>
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

                <div style={{ marginLeft: "10vw" }}>
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
                    style={
                      onChangeInput
                        ? {
                            background: "#FE188B",
                            marginBottom: "5%",
                            width: "25%",
                            cursor: "pointer",
                          }
                        : {
                            background: "#FDC6E2",
                            marginBottom: "5%",
                            width: "25%",
                          }
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
                        showModal();
                        return;
                      }
                      alert("Please provide an input between 0 to 70");
                    }}
                  />
                </div>
                {submit && (
                  <div>
                    <Modal
                      title="Feedback"
                      open={isModalOpen}
                      onOk={handleOk}
                      okText="Next"
                      footer={[
                        <div className="button-container">
                          <Button
                            key="Next"
                            type="primary"
                            shape="round"
                            size="large"
                            onClick={handleOk}
                          >
                            Next
                          </Button>
                          ,
                        </div>,
                      ]}
                    >
                      <p>Your irrigation: {currentValue}</p>
                      <p>
                        The model's irrigation estimate:{" "}
                        {modelValues[currentQuestion]}
                      </p>
                      <p>
                        The optimal amount of irrigation:{" "}
                        {correctValues[currentQuestion]}
                      </p>
                    </Modal>

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
                  </div>
                )}
              </div>
            )}
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Seed2;
