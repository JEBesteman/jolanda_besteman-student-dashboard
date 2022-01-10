import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import studentData from "./data/studentdata";
import HomePage from "./pages/HomePage";
import StudentDetail from "./pages/StudentDetail";
import StudentsPage from "./pages/StudentsPage";

function App() {
    const nameStudentsList = [
        ...new Set(studentData.map((name) => name.student)),
    ].sort();
    const data = studentData;

    return (
        <div className="App">
            <Header />
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage data={data} />} />
                    <Route
                        path="/students"
                        element={<StudentsPage students={nameStudentsList} />}
                    />
                    <Route
                        path="/students/:studentName"
                        element={<StudentDetail data={data} />}
                    />
                </Routes>
            </main>
        </div>
    );
}

export default App;
