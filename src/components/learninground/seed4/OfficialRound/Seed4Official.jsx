import React, { useState } from "react";

import { generateNums, generateModelData, generateCorrectData } from "./utils";
import ImageVussanut from "../../../../resources/Vussanut.jpeg";

import { Layout } from "antd";
import "antd/dist/antd.css";

const { Content } = Layout;

const Seed1Official = ({
  seedCountOfficial,
  setSeedCountOfficial,
  officialRound,
  setOfficialRound,
  toggleOfficial
}) => {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [onChangeInput, setOnChangeInput] = useState(false);

  const [nums, setNums] = useState(generateNums());

  const [modelValues, setModelValues] = useState(generateModelData(nums));

  const [correctValues, setCorrectValues] = useState(generateCorrectData(nums));

  const [values, setValues] = useState([]);

  const [currentValue, setCurrentValue] = useState(0);

  const handleSubmit = () => {
    if (currentValue < 0 || currentValue > 70) {
      // setSubmit(true);
      alert("Please provide an input between 0 to 70");
      return;
    }

    values.push(currentValue);
    setValues(values);

    if (currentQuestion === 4) {
      // setShowGraph(true);

      setSeedCountOfficial(seedCountOfficial + 1);
      officialRound.push({
          nums,
          modelValues,
          correctValues,
          values,
        });
        setOfficialRound(officialRound);
        setOnChangeInput(false);
        toggleOfficial();
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setOnChangeInput(false);
    }

    // setSubmit(false);
  };

  const [errorData, setErrorData] = useState([]);

  const getErrorData = async () => {
    let error0 = 0,
      error1 = 0;
    const errors = [];

    for (let i = 0; i < correctValues.length; i++) {
      error0 += Math.abs(correctValues[i] - modelValues[i]);
      error1 += Math.abs(correctValues[i] - values[i]);
    }

    errors.push(error0);
    errors.push(error1);
    console.log(errors);


    setErrorData(errors);
    console.log(errorData);
  };

  

  // useEffect(() => {
  //   if (showGraph) {
  //     getErrorData().then(() => {
  //       console.log("getter fn called");
  //       setLoading(false);
  //     });
  //   }
  // }, [showGraph]);

  return (
    <div>
      <Layout className="layout">
        <h1 className="header-style-normal" style={{ fontSize: "25px" }}>
          Official Round {currentQuestion + 1}/5 - Irrigation: Vussanut
          <img src={ImageVussanut} alt="Vussanut" />
        </h1>
        <Content className="site-layout-content">
          <div>
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
                    // disabled={submit}
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
                    onClick={handleSubmit}
                  />
                </div>
              </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Seed1Official;
