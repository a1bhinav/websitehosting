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
              In this task, you will take the role of a <b>farmer</b>. Your farm grows
              <b> four different crops</b>, each consuming <b>1 hectare</b> of land. The
              <b> more</b> crops your farm produces, the <b> higher</b> your additional bonus
              payoff.<br/> The four crop types are:
              <br />
              <table style={{margin:'1% 0 1% 0'}}>
                <tr>
                  <th>Meemmaseed</th>
                  <th>Joumusame</th>
                  <th>Gresley</th>
                  <th>Vussanut</th>
                </tr>
              </table>
              Your job in this task is to oversee the<b> irrigation of your crops</b>.<br/>
              Specifically, you will decide with how many thousand gallons of
              water you want to water the different crop types.
              <br />
              To make an informed decision, you will receive information about
              <b> three environmental factors</b> that determine irrigation need:
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
              The <b>three environmental input factors</b> are the main determinants
              for the <b>optimal amount of irrigation</b>, although there may be some
              <b> randomness</b> involved.<br/><br/> The <b>effect of the environment</b> on optimal
              irrigation <b>does not change over time</b>. Thus, the process by which
              the environmental factors determine irrigation for each crop type
              always remains the same.<br/><br/> <p><b>Additionally, the four crop types all
              respond differently to the three environmental factors</b>. Thus,
              knowing the impact of sunshine hours on Meemmaseed irrigation does
              not necessarily tell you much about its impact on Vussanut.</p>
            </p>
          )}

          {page === 2 && (
            <p>
              <b>Course of this task</b>:<br/>
              This task has two stages: the{" "}
              <b>Learning Rounds </b>
              and the <b>Official Rounds</b>.<br/><br/> During the <b>Learning Rounds</b>, you
              will be able to <b>familiarize yourself with the irrigation
              requirements</b> of your four crops. Each round, you will be shown the
              <b> sunshine-hours, average temperature</b> and <b>wind speed</b> for the next
              harvesting season.<br/><br/> Then, you will be asked to choose how much you
              want to water your crop. You will make <b>20</b> of those decisions for
              <b> each crop type</b>, resulting in <b> 80 total rounds</b>.
            </p>
          )}

          {page === 3 && (
            <p>
              <b>Course of this task</b>:<br/>
              During the <b>Learning Rounds</b>, you will
              also observe the <b>irrigation estimation of a statistical model</b>.<br/><br/> The
              model uses the same information that you will receive. The model
              does not receive any <b>additional information</b> that you will not
              receive.
            </p>
          )}

          {page === 4 && (
            <p>
              <b>Course of this task</b>:<br/>
              At the end of each learning rounds,
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
              <b>After the Learning Rounds</b>, you will complete <b>20 Official Rounds</b>.
              <br/><br/>You will make <b>5 decisions</b>  for each crop. The decisions during the
              Official Rounds determine<b> your bonus income</b>  from this task. <br/><br/>For
              each decision, you will be able to choose between using <b>your own </b>
              irrigation estimation, or the irrigation estimation of the
              <b> statistical model</b>. <br/><br/><b>If you choose your estimation, your decision
              will be the one determining your income from this task. If you
              choose the statistical model’s estimation, your income will be
              determined by the model’s performance.</b>
            </p>
          )}

          {page === 6 && (
            <p>
              <b>Course of the Official Rounds:</b><br/>
              You will complete 5 rounds
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
              irrigation estimates of the statistical model.<br/><br/> <b>During the Official
              Rounds, you do not receive feedback on either your or the model’s
              accuracy</b>.
            </p>
          )}

          {page === 7 && (
            <p>
              <b>Payment Official Rounds: </b><br/>
              Your accuracy during the Official Rounds
              determines your bonus income from this task. You bonus will depend
              on how close your irrigation estimates are to the optimal
              irrigation as determined by the environment. <br/>The bonus will be
              determined as follows:<br/> <b>Bonus = 20 Coins – Error</b><br/> If you choose the
              perfect amount of irrigation, you receive 20 Coins per Official
              Round. For each thousand gallons, i.e. for <b>each point</b>, your
              estimation is off by, your bonus decreases by one Coin.<br/><br/> <b>Example:</b><br/>
              Optimal Irrigation Amount (in thousand gallons): 26 <br/>Your
              Estimation: 16 <br/>The Model’s Estimation: 19 <br/>If you chose to rely on
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
                the Learning Rounds. 
                Use the Learning Rounds to familiarize
                yourself with the task, your crops and the statistical model.<br/><br/>
                <p><b>Note: </b>
                <br/><b>If you cannot answer all comprehension questions within two trials, you will not be able to participate in this task.</b></p>
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
