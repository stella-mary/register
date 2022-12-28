import logo from './logo.svg';
import './App.css';
import Register from './components/Register/Register'
import Attendence from './components/Attendence/Attendence';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path='/Attendence' element={<Attendence />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
