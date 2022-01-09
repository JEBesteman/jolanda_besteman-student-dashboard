import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import studentData from './data/studentdata';
import HomePage from './pages/HomePage';
import StudentDetail from './pages/StudentDetail';
import StudentsPage from './pages/StudentsPage';

function App() {
  //all names of students in alphabetic order --> links 
  const nameStudentsList = [...new Set(studentData.map(name => name.student))].sort()
  const data = studentData;
  console.log("data", data)
  return (
      <div className="App">
          <Navbar />
          <Routes>
              <Route path="/" element={<HomePage data={data} />} />
              <Route path="/students" element={<StudentsPage data={data} students={nameStudentsList}/>} />
              <Route path="/students/:studentName" element={<StudentDetail data={data}/>} />
          </Routes>
    </div>
  );
};

export default App;
