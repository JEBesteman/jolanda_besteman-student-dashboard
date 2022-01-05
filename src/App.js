import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

import studentData from './data/studentdata';
import StudentDetail from './pages/StudentDetail';
import StudentsPage from './pages/StudentsPage';

function App() {
  console.log(studentData)
  const allNames = studentData.map(name => name.student)
  console.log(allNames)
  const nameStudentsList = [...new Set(allNames)].sort()
  console.log(nameStudentsList)
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/students/:studentName" element={<StudentDetail />} />
        </Routes>
    </div>
  );
}

export default App;
