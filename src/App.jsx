import React from "react";
import { Navigate, Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import Login from "./components/login/Login";
// import Logout from "./components/logout/Logout";
// import Signup from "./components/signup/Signup";
import Result from "./components/result/Result";
import DelegationDecision from "./components/delegation/DelegationDecision";
import Instructions from "./components/instructions/Instructions";
import Instructionquestion from "./components/instructionquestion/Instructionquestion";
import Homepage from "./components/homepage/Homepage";
import Learninground from "./components/learninground/Learninground";
import OfficialRound from "./components/officialround/OfficialRound";
import TransitionLearning from "./components/transitionlearning/TransitionLearning";
import TransitionOfficial from "./components/transitionofficial/TransitionOfficial";

// import Note from "./components/layout/Note";
// import { formatDiagnostic } from "typescript";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} /> */}
          <Route path="/result" element={<Result />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/delegationdecision" element={<DelegationDecision />} />
          <Route path="/instructionquestion" element={<Instructionquestion />}/>
          <Route path="/learninground" element={<Learninground />} />
          <Route path="/officialround" element={<OfficialRound />} />
          <Route path="/transitionlearning" element={<TransitionLearning />} />
          <Route path="/transitionofficial" element={<TransitionOfficial />} />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
