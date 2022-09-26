import React, {useEffect, useState} from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Note from "../layout/Note";

function Instructions() {
  return (
    <div
      style={{
        background: "#FEE856",
        height: "100vh"
      }}
    >
      <div style={{margin: "0 20vw", padding: "10vh 0"}}>
        <div>

        <b>Page 1</b>
        
        In this task, you will take the role of a farmer. Your farm grows four different crops, each consuming 1
hectare of land. The more crops your farm produces, the higher your additional bonus payoff. The four
crop types are: Meemmaseed, Joumusame, Gresley and Vussanut.
Your job in this task is to oversee the irrigation of your crops. Specifically, you will decide with how many
thousand gallons of water you want to water the different crop types.
To make an informed decision, you will receive information about three environmental factors that
determine irrigation need: sunshine (hours/day), average day temperature (Fahrenheit) and wind speed
(km/h).
        </div>


        <div>

<b>Page 2</b>

The three environmental input factors are the main determinants for the optimal amount of irrigation,
although there may be some randomness involved. The effect of the environment on optimal irrigation
does not change over time. Thus, the process by which the environmental factors determine irrigation
for each crop type always remains the same.
Additionally, the four crop types all respond differently to the three environmental factors. Thus,
knowing the impact of sunshine hours on Meemmaseed irrigation does not necessarily tell you much
about its impact on Vussanut.
</div>


<div>

<b>Page 3</b>

Course of this task:
This task has two stages: the Learning Rounds and the Official Rounds.
During the Learning Rounds, you will be able to familiarize yourself with the irrigation requirements of
your four crops. Each round, you will be shown the sunshine-hours, average temperature and wind
speed for the next harvesting season. Then, you will be asked to choose how much you want to water
your crop. You will make 20 of those decisions for each crop type, resulting in 80 total rounds.
</div>


<div>

<b>Page 4</b>

Course of this task:
During the Learning Rounds, you will also observe the irrigation estimation of a statistical model. The
model uses the same information that you will receive. The model does not receive any additional
information that you will not receive.
</div>


<div>

<b>Page 5</b>

Course of this task:
At the end of each learning rounds, you will see:
1. Your decision
2. The optimal amount of irrigation
3. The statistical model’s irrigation estimation
You will complete the 80 Learning Rounds in blocks of 20, where each block gives you information about
one specific crop type. You will learn about your crops in the following order:
1. X
2. Y
3. Z
4. W (randomize the crop names here, in accordance with the order the specific subject will view
them)
If you think that you already learned enough about a crop’s irrigation need, you have a one-time
opportunity to complete learning after 15 Learning Rounds and proceed to the next crop.
</div>

<div>

<b>Page 6</b>

After the Learning Rounds, you will complete 20 Official Rounds. You will make 5 decisions for each crop.
The decisions during the Official Rounds determine your bonus income from this task.
For each decision, you will be able to choose between using your own irrigation estimation, or the
irrigation estimation of the statistical model. If you choose your estimation, your decision will be the one

determining your income from this task. If you choose the statistical model’s estimation, your income
will be determined by the model’s performance.
</div>



<div>

<b>Page 7</b>

Course of the Official Rounds
You will complete 5 rounds for each crop in the following order:
1. X
2. Y
3. Z
4. W

Like before, you will see the 3 environmental factors and choose your irrigation amount. Afterwards, you
will decide for each round, whether you want to use your irrigation estimates, or the irrigation estimates
of the statistical model.
During the Official Rounds, you do not receive feedback on either your or the model’s accuracy.
</div>

<div>

<b>Page 8</b>

Payment Official Rounds
Your accuracy during the Official Rounds determines your bonus income from this task. You bonus will
depend on how close your irrigation estimates are to the optimal irrigation as determined by the
environment.
The bonus will be determined as follows:
Bonus = 20 Coins – Error
If you choose the perfect amount of irrigation, you receive 20 Coins per Official Round. For each
thousand gallons, i.e. for each point, your estimation is off by, your bonus decreases by one Coin.
Example:
Optimal Irrigation Amount (in thousand gallons): 26
Your Estimation: 16
The Model’s Estimation: 19
If you chose to rely on your estimation, you would receive a bonus of 10 Coins. If you chose to rely on
the model’s estimation, you would receive a bonus of 13 Coins.
</div>


<div>

<b>Page 9</b>

Click on the button below to proceed to the comprehension questions. Once you answer them correctly,
you will proceed to the Learning Rounds. Use the Learning Rounds to familiarize yourself with the task,
your crops and the statistical model.
</div>



        <button style={{margin:'20vh 0 0 15vw', border: 0, background: "#FEE856"}}>
          <NavLink
            className="btn btn-primary btn-lg btn-demo"
            to="/instructionquestion"
            variant="body2"
          >
            You sure you read all the instructions???
          </NavLink>
        </button>
      </div>
    </div>
  );
}

export default Instructions;
