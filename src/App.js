import './App.css';
import React from "react";
import { Navigate, Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import Result from "./components/result/Result";
import DelegationDecision from "./components/delegationdecision/DelegationDecision";
import Instructions from "./components/instructions/Instructions";
import Instructionquestion from "./components/instructionquestion/Instructionquestion";
import Homepage from "./components/homepage/Homepage";
import Learninground from "./components/learninground/Learninground";
import TransitionLearning from "./components/transitionlearning/TransitionLearning";


function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/result" element={<Result />} /> */}
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/delegationdecision" element={<DelegationDecision />} />
          <Route path="/instructionquestion" element={<Instructionquestion />}/>
          <Route path="/learninground" element={<Learninground />} />
          <Route path="/transitionlearning" element={<TransitionLearning />} />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
