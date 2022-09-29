import React, { useEffect, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Note from "../layout/Note";

function Instructions() {
  const [page, setPage] = useState(0);
  const currentPage = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div
      style={{
        background: "#E4E1E1",
        height: "100%",
      }}
    >
      <div style={{ margin: "0 10vw" }}>
        <nav className="fh5co-nav" role="navigation">
          <div className="top-menu">
            <div className="container">
              <h1 style={{ textAlign: "center" }}>Instructions</h1>
            </div>
          </div>
        </nav>
        <div style={{ backgroundColor: "white", padding: "10vh 10vw" }}>
          {page === 0 && (
            <p>
              In this task, you will take the role of a farmer. Your farm grows
              four different crops, each consuming <b>1 hectare</b> of land. The
              more crops your farm produces, the higher your additional bonus
              payoff. The four crop types are:
              <br />
              <table style={{margin:'1% 0 1% 0'}}>
                <tr>
                  <th>Meemmaseed</th>
                  <th>Joumusame</th>
                  <th>Gresley</th>
                  <th>Vussanut</th>
                </tr>
              </table>
              Your job in this task is to oversee the irrigation of your crops.
              Specifically, you will decide with how many thousand gallons of
              water you want to water the different crop types.
              <br />
              To make an informed decision, you will receive information about
              three environmental factors that determine irrigation need:
              <br />
              {/* <b>
                sunshine (hours/day), average day temperature (Fahrenheit) and
                wind speed (km/h).
              </b> */}
              <table style={{margin:0}}>
                <tr>
                  <th>Sunshine (hours/day)</th>
                  <th>Average day temperature (Fahrenheit)</th>
                  <th>Wind speed (km/h)</th>
                </tr>
              </table> 
            </p>
          )}

          {page === 1 && (
            <p>
              The three environmental input factors are the main determinants
              for the optimal amount of irrigation, although there may be some
              randomness involved. The effect of the environment on optimal
              irrigation does not change over time. Thus, the process by which
              the environmental factors determine irrigation for each crop type
              always remains the same. Additionally, the four crop types all
              respond differently to the three environmental factors. Thus,
              knowing the impact of sunshine hours on Meemmaseed irrigation does
              not necessarily tell you much about its impact on Vussanut.
            </p>
          )}

          {page === 2 && (
            <p>
              <b>Course of this task</b>: This task has two stages: the{" "}
              <b>Learning Rounds </b>
              and the <b>Official Rounds</b>. During the Learning Rounds, you
              will be able to familiarize yourself with the irrigation
              requirements of your four crops. Each round, you will be shown the
              sunshine-hours, average temperature and wind speed for the next
              harvesting season. Then, you will be asked to choose how much you
              want to water your crop. You will make 20 of those decisions for
              each crop type, resulting in 80 total rounds.
            </p>
          )}

          {page === 3 && (
            <p>
              <b>Course of this task</b>: During the Learning Rounds, you will
              also observe the irrigation estimation of a statistical model. The
              model uses the same information that you will receive. The model
              does not receive any additional information that you will not
              receive.
            </p>
          )}

          {page === 4 && (
            <p>
              <b>Course of this task</b>: At the end of each learning rounds,
              you will see:
              <div style={{marginLeft:'21%'}}>
              <ul>
              1. <b>Your decision</b>
              </ul>
              <ul>
              2. <b>The optimal amount of irrigation</b>
              </ul>
              <ul>
              3. <b>The statistical model’s irrigation estimation</b>
              </ul>
              </div>
              You will complete the 80 Learning Rounds in blocks of 20, where each block gives you
              information about one specific crop type. You will learn about
              your crops in the following order: 
              <table style={{margin:'1% 0 1% 0'}}>
                <tr>
                  <th>1. Meemmaseed</th>
                  <th>2. Joumusame</th>
                  <th>3. Gresley</th>
                  <th>4. Vussanut</th>
                </tr>
              </table> 
              If you think that you already learned
              enough about a crop’s irrigation need, you have a one-time
              opportunity to complete learning after 15 Learning Rounds and
              proceed to the next crop.
            </p>
          )}

          {page === 5 && (
            <p>
              After the Learning Rounds, you will complete 20 Official Rounds.
              You will make 5 decisions for each crop. The decisions during the
              Official Rounds determine your bonus income from this task. For
              each decision, you will be able to choose between using your own
              irrigation estimation, or the irrigation estimation of the
              statistical model. If you choose your estimation, your decision
              will be the one determining your income from this task. If you
              choose the statistical model’s estimation, your income will be
              determined by the model’s performance.
            </p>
          )}

          {page === 6 && (
            <p>
              <b>Course of the Official Rounds</b>: You will complete 5 rounds
              for each crop in the following order:
              <table style={{margin:'1% 0 1% 0'}}>
                <tr>
                  <th>1. Meemmaseed</th>
                  <th>2. Joumusame</th>
                  <th>3. Gresley</th>
                  <th>4. Vussanut</th>
                </tr>
              </table>
              Like before, you will see the 3 environmental factors and choose your
              irrigation amount. Afterwards, you will decide for each round,
              whether you want to use your irrigation estimates, or the
              irrigation estimates of the statistical model. During the Official
              Rounds, you do not receive feedback on either your or the model’s
              accuracy.
            </p>
          )}

          {page === 7 && (
            <p>
              <b>Payment Official Rounds: </b>
              Your accuracy during the Official Rounds
              determines your bonus income from this task. You bonus will depend
              on how close your irrigation estimates are to the optimal
              irrigation as determined by the environment. The bonus will be
              determined as follows: Bonus = 20 Coins – Error If you choose the
              perfect amount of irrigation, you receive 20 Coins per Official
              Round. For each thousand gallons, i.e. for each point, your
              estimation is off by, your bonus decreases by one Coin. Example:
              Optimal Irrigation Amount (in thousand gallons): 26 Your
              Estimation: 16 The Model’s Estimation: 19 If you chose to rely on
              your estimation, you would receive a bonus of 10 Coins. If you
              chose to rely on the model’s estimation, you would receive a bonus
              of 13 Coins.
            </p>
          )}

          {page === 8 && (
            <>
              <p>
                Click on the button below to proceed to the comprehension
                questions. Once you answer them correctly, you will proceed to
                the Learning Rounds. Use the Learning Rounds to familiarize
                yourself with the task, your crops and the statistical model.
              </p>
              <button
                style={{
                  margin: "10vh 0 0 15vw",
                  border: 0,
                  background: "#ffffff",
                }}
              >
                <NavLink
                  className="btn btn-primary btn-lg btn-demo"
                  to="/instructionquestion"
                  variant="body2"
                >
                  Proceed to the comprehension questions
                </NavLink>
              </button>
            </>
          )}
        </div>

        <div id="wrapper">
          <div class="b-pagination-outer" style={{paddingBottom:'5%'}}>
            <ul id="border-pagination">
              <li>
                <button
                  onClick={() => {
                    if (page !== 0) {
                      setPage(page - 1);
                    }
                  }}
                >
                  «
                </button>
              </li>

              {currentPage.map((currentPage) => (
                <li key={currentPage}>
                  {currentPage === page && (
                    <button
                      class="active"
                      onClick={() => {
                        setPage(currentPage);
                      }}
                    >
                      {currentPage + 1}
                    </button>
                  )}
                  {currentPage !== page && (
                    <button
                      onClick={() => {
                        setPage(currentPage);
                      }}
                    >
                      {currentPage + 1}
                    </button>
                  )}
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    if (page !== 8) {
                      setPage(page + 1);
                    }
                  }}
                >
                  »
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
