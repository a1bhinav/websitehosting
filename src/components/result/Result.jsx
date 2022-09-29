import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Chart from "react-apexcharts";

const Result = () => {
  const navigate = useNavigate();

  const [learningErrorData, setLearningErrorData] = useState([]);

  const [learningColors, setLearningColors] = useState([]);

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
    }
  };

  let series = {
    learningRound: {
      Seed1: [
        {
          data: learningErrorData[0],
        },
      ],

      Seed2: [
        {
          data: learningErrorData[1],
        },
      ],

      Seed3: [
        {
          data: learningErrorData[2],
        },
      ],

      Seed4: [
        {
          data: learningErrorData[3],
        },
      ],
    },

    officialRound: {
      Seed1: [
        {
          data: [400, 1380],
        },
      ],

      Seed2: [
        {
          data: [40, 137],
        },
      ],

      Seed3: [
        {
          data: [40, 137],
        },
      ],

      Seed4: [
        {
          data: [40, 137],
        },
      ],
    },

    feedbackRound: {
      Seed1: [
        {
          data: [400, 1380],
        },
      ],

      Seed2: [
        {
          data: [40, 137],
        },
      ],

      Seed3: [
        {
          data: [40, 137],
        },
      ],

      Seed4: [
        {
          data: [40, 137],
        },
      ],
    },
  };

  //update following code to fetch data from database

  const [learningRoundResult, setLearningRoundResult] = useState([]);

  const getResult = async () => {
    try {
      const res = await fetch("/api/getResult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: localStorage.getItem("userId"),
        }),
      });
      const data = await res.json();

      if (!(res.status === 200)) {
        throw new Error(res.err);
      }
      setLearningRoundResult(data.learningRound);
    } catch (err) {
      console.log(err);
      navigate("/");
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      // setIsLoggedIn(false);
      navigate("/", { replace: true });
    } else {
      if (localStorage.getItem("userTestAttempted") === "false") {
        navigate("/", { replace: true });
      } else {
        getResult().then(
          async () => {
            const learningErrorData = [];
            const learningColors = [];

            for (let i = 0; i < learningRoundResult.length; i++) {
              let error0 = 0, error1 = 0;
              const errors = [];
              const colors = [];

              for (let j = 0; j < (learningRoundResult[i].correctValues).length; j++) {
                error0 += Math.abs((learningRoundResult[i].correctValues)[j] - (learningRoundResult[i].modelValues)[j]);
                error1 += Math.abs((learningRoundResult[i].correctValues)[j] - (learningRoundResult[i].values)[j]);
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

              learningErrorData.push(errors);
              learningColors.push(colors);
            }

            setLearningColors(learningColors);
            setLearningErrorData(learningErrorData);
            console.log(learningColors);
            console.log(learningErrorData);

            console.log("Result fetched from database");
          },
          (err) => console.log(err)
        );
      }
    }
  }, []);

  // const res = await fetch("/api/updateLearningRound", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     _id: localStorage.getItem("userId"),
  //     learningRound: learningRound,
  //   }),
  // });

  // const data = await res.json();

  // if (!data) {
  //   window.alert("Technical error");
  //   console.log("Technical error");
  // } else if (res.status === 401) {
  //   window.alert(data.error);
  //   console.log(data.error);
  // } else {
  //   console.log(data.message);
  // }

  return (
    <div style={{ backgroundColor: "#fee856", height: "100vh" }}>
      <div style={{ padding: "1%", display: "flex", justifyContent: "right" }}>
        <NavLink
          className="btn btn-primary btn-lg btn-demo"
          to="/logout"
          variant="body2"
        >
          Logout
        </NavLink>
      </div>
      <div>
        <div>
          <div
            style={{
              backgroundColor: "#ffe9e9",
              // display: "flex",
              // justifyContent: "center",
              paddingTop: "1%",
              paddingBottom: "1%",
            }}
          >
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "5vh",
              }}
            >
              Final Result Graph
            </h2>
            <div>
              <div
                style={{
                  backgroundColor: "#ffe9e9",
                  display: "flex",
                  justifyContent: "center",
                  margin: "5vh 5vw 0 5vw",
                  overflow: "auto",
                }}
              >
                <div
                  style={{
                    margin: "0 1%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Chart
                    style={{ padding: "1%" }}
                    options={{...options, colors: learningColors[0]}}
                    series={series.learningRound.Seed1}
                    type="bar"
                    height={400}
                    width={300}
                    className="apex-charts"
                    dir="ltr"
                  />
                  <h3
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "10% 0",
                    }}
                  >
                    Seed1
                  </h3>
                </div>

                <div
                  style={{
                    margin: "0 1%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Chart
                    style={{ padding: "1%" }}
                    options={{...options, colors: learningColors[1]}}
                    series={series.learningRound.Seed2}
                    type="bar"
                    height={400}
                    width={300}
                    className="apex-charts"
                    dir="ltr"
                  />
                  <h3
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "10% 0",
                    }}
                  >
                    Seed2
                  </h3>
                </div>

                <div
                  style={{
                    margin: "0 1%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Chart
                    style={{ padding: "1%" }}
                    options={{...options, colors: learningColors[2]}}
                    series={series.learningRound.Seed3}
                    type="bar"
                    height={400}
                    width={300}
                    className="apex-charts"
                    dir="ltr"
                  />
                  <h3
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "10% 0",
                    }}
                  >
                    Seed3
                  </h3>
                </div>

                <div
                  style={{
                    margin: "0 1%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Chart
                    style={{ padding: "1%" }}
                    options={{...options, colors: learningColors[3]}}
                    series={series.learningRound.Seed4}
                    type="bar"
                    height={400}
                    width={300}
                    className="apex-charts"
                    dir="ltr"
                  />
                  <h3
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "10% 0",
                    }}
                  >
                    Seed4
                  </h3>
                </div>
              </div>
              <h1
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textDecoration: "underline",
                }}
              >
                Learning Round
              </h1>
            </div>
            {/* <div>
              <div
                style={{
                  backgroundColor: "#ffe9e9",
                  display: "flex",
                  justifyContent: "center",
                  margin: "5vh 5vw 0 5vw",
                  // marginBottom: "5vh",
                  overflow: "auto",
                }}
              >
                <div
                  style={{
                    margin: "0 1%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Chart
                    style={{ padding: "1%" }}
                    options={options}
                    series={series.officialRound.Seed1}
                    type="bar"
                    height={400}
                    width={300}
                    className="apex-charts"
                    dir="ltr"
                  />
                  <h3
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "10% 0",
                    }}
                  >
                    Seed1
                  </h3>
                </div>

                <div
                  style={{
                    margin: "0 1%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Chart
                    style={{ padding: "1%" }}
                    options={options}
                    series={series.officialRound.Seed2}
                    type="bar"
                    height={400}
                    width={300}
                    className="apex-charts"
                    dir="ltr"
                  />
                  <h3
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "10% 0",
                    }}
                  >
                    Seed2
                  </h3>
                </div>

                <div
                  style={{
                    margin: "0 1%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Chart
                    style={{ padding: "1%" }}
                    options={options}
                    series={series.officialRound.Seed3}
                    type="bar"
                    height={400}
                    width={300}
                    className="apex-charts"
                    dir="ltr"
                  />
                  <h3
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "10% 0",
                    }}
                  >
                    Seed3
                  </h3>
                </div>

                <div
                  style={{
                    margin: "0 1%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Chart
                    style={{ padding: "1%" }}
                    options={options}
                    series={series.officialRound.Seed4}
                    type="bar"
                    height={400}
                    width={300}
                    className="apex-charts"
                    dir="ltr"
                  />
                  <h3
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "10% 0",
                    }}
                  >
                    Seed4
                  </h3>
                </div>
              </div>
              <h1
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textDecoration: "underline",
                }}
              >
                Official Round
              </h1>
            </div> */}
            {/* <div>
              <div
                style={{
                  backgroundColor: "#ffe9e9",
                  display: "flex",
                  justifyContent: "center",
                  margin: "5vh 5vw 0 5vw",
                  // marginBottom: "5vh",
                  overflow: "auto",
                }}
              >
                <div
                  style={{
                    margin: "0 1%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Chart
                    style={{ padding: "1%" }}
                    options={options}
                    series={series.feedbackRound.Seed1}
                    type="bar"
                    height={400}
                    width={300}
                    className="apex-charts"
                    dir="ltr"
                  />
                  <h3
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "10% 0",
                    }}
                  >
                    Seed1
                  </h3>
                </div>

                <div
                  style={{
                    margin: "0 1%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Chart
                    style={{ padding: "1%" }}
                    options={options}
                    series={series.feedbackRound.Seed2}
                    type="bar"
                    height={400}
                    width={300}
                    className="apex-charts"
                    dir="ltr"
                  />
                  <h3
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "10% 0",
                    }}
                  >
                    Seed2
                  </h3>
                </div>

                <div
                  style={{
                    margin: "0 1%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Chart
                    style={{ padding: "1%" }}
                    options={options}
                    series={series.feedbackRound.Seed3}
                    type="bar"
                    height={400}
                    width={300}
                    className="apex-charts"
                    dir="ltr"
                  />
                  <h3
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "10% 0",
                    }}
                  >
                    Seed3
                  </h3>
                </div>

                <div
                  style={{
                    margin: "0 1%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Chart
                    style={{ padding: "1%" }}
                    options={options}
                    series={series.feedbackRound.Seed4}
                    type="bar"
                    height={400}
                    width={300}
                    className="apex-charts"
                    dir="ltr"
                  />
                  <h3
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "10% 0",
                    }}
                  >
                    Seed4
                  </h3>
                </div>
              </div>
              <h1
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textDecoration: "underline",
                }}
              >
                Feedback Round
              </h1>
            </div> */}
          </div>

          {/* <div
        style={{display:'flex', justifyContent:'center'}}>
          <button
            className="btn btn-primary btn-lg btn-demo"
            // style={{ position: "relative", left: "35%" }}
            // onClick={()=>{
            //   setSeedCount(seedCount+1);
            //   learningRound.push({nums, modelValues, correctValues, values});
            //   setLearningRound(learningRound);
            // }}

            onClick={async () => {
              // learningRound.push({
              //   nums,
              //   modelValues,
              //   correctValues,
              //   values,
              // });
              // setLearningRound(learningRound);

              // console.log(learningRound);

              // const res = await fetch("/api/updateLearningRound", {
              //   method: "POST",
              //   headers: {
              //     "Content-Type": "application/json",
              //   },
              //   body: JSON.stringify({
              //     _id: localStorage.getItem("userId"),
              //     learningRound: learningRound,
              //   }),
              // });

              // const data = await res.json();

              // if (!data) {
              //   window.alert("Technical error");
              //   console.log("Technical error");
              // } else if (res.status === 401) {
              //   window.alert(data.error);
              //   console.log(data.error);
              // } else {
              //   console.log(data.message);
              // }

              navigate("/officialround", { replace: true });
            }}
          >
            Let's try official rounds; O Shall we???
          </button>
        </div> */}

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
      </div>
    </div>
  );
};

export default Result;
