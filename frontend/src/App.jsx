import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ChooseUser from "./components/ChooseUser";
import AdminSignIn from "./components/AdminSignIn";
import StudentSignIn from "./components/StudentSignIn";
import TeacherSignIn from "./components/TeacherSignIn";
import AdminDashboard from "./pages/Admin/Dashboard";
import Announcement from "./pages/Admin/Announcement";
import Assignment from "./pages/Admin/Assignment";
import Attendance from "./pages/Admin/Attendance";
import Classes from "./pages/Admin/Classes";
import EventCalender from "./pages/Admin/EventCalender";
import Exam from "./pages/Admin/Exam";
import Library from "./pages/Admin/Library";
import Performance from "./pages/Admin/Performance";
import SettingsProfile from "./pages/Admin/SettingsProfile";
import Sidebar from "./pages/Admin/Sidebar";
import Students from "./pages/Admin/Students";
import Teachers from "./pages/Admin/Teachers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-user" element={<ChooseUser />} />

        {/* All Sign In pages route */}
        <Route exact path="/admin-signIn" element={<AdminSignIn />} />
        <Route exact path="/student-signIn" element={<StudentSignIn />} />
        <Route exact path="/teacher-signIn" element={<TeacherSignIn />} />

        {/* All Dashboard route  */}
        <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
        <Route exact path="/student/dashboard" element={<AdminDashboard />} />

        {/* Admin section */}
        <Route exact path="/admin/communication" element={<Announcement />} />
        <Route exact path="/admin/assignments" element={<Assignment />} />
        <Route exact path="/admin/attendance" element={<Attendance />} />
        <Route exact path="/admin/classes" element={<Classes />} />
        <Route exact path="/admin/events" element={<EventCalender />} />
        <Route exact path="/admin/exams" element={<Exam />} />
        <Route exact path="/admin/library" element={<Library />} />
        <Route exact path="/admin/performance" element={<Performance />} />
        <Route exact path="/admin/settings" element={<SettingsProfile />} />
        <Route exact path="/admin/sidebar" element={<Sidebar />} />
        <Route exact path="/admin/students" element={<Students />} />
        <Route exact path="/admin/teachers" element={<Teachers />} />

        {/* Student section */}
        <Route exact path="/student/communication" element={<Announcement />} />
        <Route exact path="/student/assignments" element={<Assignment />} />
        <Route exact path="/student/attendance" element={<Attendance />} />
        <Route exact path="/student/classes" element={<Classes />} />
        <Route exact path="/student/events" element={<EventCalender />} />
        <Route exact path="/student/exams" element={<Exam />} />
        <Route exact path="/student/library" element={<Library />} />
        <Route exact path="/student/performance" element={<Performance />} />
        <Route exact path="/student/settings" element={<SettingsProfile />} />
        <Route exact path="/student/sidebar" element={<Sidebar />} />
        <Route exact path="/student/students" element={<Students />} />
        <Route exact path="/student/teachers" element={<Teachers />} />
      </Routes>
    </Router>
  );
}

export default App;
