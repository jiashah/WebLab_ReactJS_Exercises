import React from 'react';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
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
import Ex14_Q1 from './Exercise14/Q1/14_1';
import Ex14_Q2 from './Exercise14/Q2/14_2';
import Ex14_Q3 from './Exercise14/Q3/ProfilePage'
import Ex15_Q1 from './Exercise15/Q1/15_1';
import Ex15_Q2 from './Exercise15/Q2/15_2';
import Ex15_Q3 from './Exercise15/Q3/15_3';
import Ex15_Q4 from './Exercise15/Q4/15_4';
import Ex15_Q5 from './Exercise15/Q5/15_5';
import Ex15_Q6_1 from './Exercise15/Q6/6.1/15_6';
import Ex15_Q6_2 from './Exercise15/Q6/6.2/Counter';
import Ex15_Q7 from './Exercise15/Q7/15_7';
import Ex15_Q8 from './Exercise15/Q8/15_8';
import Ex15_Q9 from './Exercise15/Q9/15_9';
import Ex15_Q10 from './Exercise15/Q10/15_10';
import Ex15_Q11 from './Exercise15/Q11/Parent';
import Ex15_Q12_1 from './Exercise15/Q12/12.1/15_12';
import Ex15_Q12_2 from './Exercise15/Q12/12.2/15_12.2';

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
      <button onClick={() => navigate('/Ex14_Q1')} style={{ marginLeft: '15px' }}>EX14_Q1</button>
      <button onClick={() => navigate('/Ex14_Q2')} style={{ marginLeft: '15px' }}>EX14_Q2</button>
      <button onClick={() => navigate('/Ex14_Q3')} style={{ marginLeft: '15px' }}>EX14_Q3</button>
      <br></br>
      <h3>Exercise 15</h3>
      <button onClick={() => navigate('/Ex15_Q1')}>EX15_Q1</button>
      <button onClick={() => navigate('/Ex15_Q2')} style={{ marginLeft: '10px' }}>Ex15_Q2</button>
      <button onClick={() => navigate('/Ex15_Q3')} style={{ marginLeft: '15px' }}>Ex15_Q3</button>
      <button onClick={() => navigate('/Ex15_Q4')} style={{ marginLeft: '15px' }}>EX15_Q4</button>
      <button onClick={() => navigate('/Ex15_Q5')} style={{ marginLeft: '15px' }}>Ex15_Q5</button>
      <button onClick={() => navigate('/Ex15_Q6_1')} style={{ marginLeft: '15px' }}>Ex15_Q6_1</button>
      <button onClick={() => navigate('/Ex15_Q6_2')} style={{ marginLeft: '15px' }}>Ex15_Q6_2</button>
      <button onClick={() => navigate('/Ex15_Q7')} style={{ marginLeft: '15px' }}>EX15_Q7</button>
      <button onClick={() => navigate('/Ex15_Q8')} style={{ marginLeft: '15px' }}>EX15_Q8</button>
      <button onClick={() => navigate('/Ex15_Q9')} style={{ marginLeft: '15px' }}>EX15_Q9</button>
      <button onClick={() => navigate('/Ex15_Q10')} style={{ marginLeft: '15px' }}>EX15_Q10</button>
      <button onClick={() => navigate('/Ex15_Q11')} style={{ marginLeft: '15px' }}>EX15_Q11</button>
      <button onClick={() => navigate('/Ex15_Q12_1')} style={{ marginLeft: '15px' }}>Ex15_Q12_1</button>
      <button onClick={() => navigate('/Ex15_Q12_2')} style={{ marginLeft: '15px' }}>Ex15_Q12_2</button>

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
        <Route path="/Ex14_Q1" element={<Ex14_Q1 />} />
        <Route path="/Ex14_Q2" element={<Ex14_Q2 />} />
        <Route path="/Ex14_Q3" element={<Ex14_Q3 />} />
        <Route path="/Ex15_Q1" element={<Ex15_Q1 />} />
        <Route path="/Ex15_Q2" element={<Ex15_Q2 />} />
        <Route path="/Ex15_Q3" element={<Ex15_Q3 />} />
        <Route path="/Ex15_Q4" element={<Ex15_Q4 />} />
        <Route path="/Ex15_Q5" element={<Ex15_Q5 />} />
        <Route path="/Ex15_Q6_1" element={<Ex15_Q6_1 />} />
        <Route path="/Ex15_Q6_2" element={<Ex15_Q6_2 />} />
        <Route path="/Ex15_Q7" element={<Ex15_Q7 />} />
        <Route path="/Ex15_Q8" element={<Ex15_Q8 />} />
        <Route path="/Ex15_Q9" element={<Ex15_Q9 />} />
        <Route path="/Ex15_Q10" element={<Ex15_Q10 />} />
        <Route path="/Ex15_Q11" element={<Ex15_Q11 />} />
        <Route path="/Ex15_Q12_1" element={<Ex15_Q12_1 />} />
        <Route path="/Ex15_Q12_2" element={<Ex15_Q12_2 />} />
      </Routes>
    </Router>
  );
}

export default App;
