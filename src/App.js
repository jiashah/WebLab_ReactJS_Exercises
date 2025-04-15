import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Ex1_1 from './Exercise13/1.1';
import Ex1_2 from './Exercise13/1.2';
import Ex13_Q2 from './Exercise13/2';
import Ex13_Q3 from './Exercise13/3';
import Ex13_Q4 from './Exercise13/4';
import Ex13_Q5 from './Exercise13/5';
import Ex13_Q6 from './Exercise13/6';
import Ex13_Q7 from './Exercise13/7';
import Ex13_Q8 from './Exercise13/8';
import Ex13_Q9 from './Exercise13/9';
import Ex13_Q10 from './Exercise13/10';
import Ex13_Q11 from './Exercise13/11';
import Ex13_Q12 from './Exercise13/Q12/Q12';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>ReactJs Exercises</h1>
      <h3>Exercise 13</h3>
      <button onClick={() => navigate('/Ex1_1')}>EX13 Q1.1</button>
      <button onClick={() => navigate('/Ex1_2')} style={{ marginLeft: '10px' }}>EX13 Q1.2</button>
      <button onClick={() => navigate('/Ex13_Q2')} style={{ marginLeft: '15px' }}>EX13_Q2</button>
      <button onClick={() => navigate('/Ex13_Q3')} style={{ marginLeft: '15px' }}>Ex13_Q3</button>
      <button onClick={() => navigate('/Ex13_Q4')} style={{ marginLeft: '15px' }}>EX13_Q4</button>
      <button onClick={() => navigate('/Ex13_Q5')} style={{ marginLeft: '15px' }}>EX13_Q5</button>
      <button onClick={() => navigate('/Ex13_Q6')} style={{ marginLeft: '15px' }}>EX13_Q6</button>
      <button onClick={() => navigate('/Ex13_Q7')} style={{ marginLeft: '15px' }}>EX13_Q7</button>
      <button onClick={() => navigate('/Ex13_Q8')} style={{ marginLeft: '15px' }}>EX13_Q8</button>
      <button onClick={() => navigate('/Ex13_Q9')} style={{ marginLeft: '15px' }}>EX13_Q9</button>
      <button onClick={() => navigate('/Ex13_Q10')} style={{ marginLeft: '15px' }}>EX13_Q10</button>
      <button onClick={() => navigate('/Ex13_Q11')} style={{ marginLeft: '15px' }}>EX13_Q11</button>
      <button onClick={() => navigate('/Ex13_Q12')} style={{ marginLeft: '15px' }}>EX13_Q12</button>
      <br></br>
      <h3>Exercise 14</h3>

    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ex1_1" element={<Ex1_1 />} />
        <Route path="/Ex1_2" element={<Ex1_2 />} />
        <Route path="/Ex13_Q2" element={<Ex13_Q2 />} />
        <Route path="/Ex13_Q3" element={<Ex13_Q3 />} />
        <Route path="/Ex13_Q4" element={<Ex13_Q4 />} />
        <Route path="/Ex13_Q5" element={<Ex13_Q5 />} />
        <Route path="/Ex13_Q6" element={<Ex13_Q6 />} />
        <Route path="/Ex13_Q7" element={<Ex13_Q7 />} />
        <Route path="/Ex13_Q8" element={<Ex13_Q8 />} />
        <Route path="/Ex13_Q9" element={<Ex13_Q9 />} />
        <Route path="/Ex13_Q10" element={<Ex13_Q10 />} />
        <Route path="/Ex13_Q11" element={<Ex13_Q11 />} />
        <Route path="/Ex13_Q12" element={<Ex13_Q12 />} />
      </Routes>
    </Router>
  );
}

export default App;
