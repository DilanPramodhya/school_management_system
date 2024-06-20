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

import StudentDashboard from "./pages/Students/Dashboard";
import StudentAssignments from "./pages/Students/Assignment";
import ExamSection from "./pages/Students/Exams";
import PerformanceSection from "./pages/Students/Performance";
import LibrarySection from "./pages/Students/Library";
import AnnouncementSection from "./pages/Students/Announcement";
import ProfileSection from "./pages/Students/Profile";
import AttendanceSection from "./pages/Students/Attendance";

import TeacherDashboard from "./pages/Teachers/Dashboard";
import CheckAnnouncementSection from "./pages/Teachers/Announcement";
import AssignmentSection from "./pages/Teachers/Assignment";
import CheckAttendanceSection from "./pages/Teachers/Attendance";
import ClassSection from "./pages/Teachers/Classes";
import EventSection from "./pages/Teachers/Events";
import CheckExamSection from "./pages/Teachers/Exams";
import CheckPerformancesSection from "./pages/Teachers/Performance";
import TeacherProfilesSection from "./pages/Teachers/Profile";
import StudentSection from "./pages/Teachers/Student";
import TeacherSection from "./pages/Teachers/Teacher";

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
        <Route exact path="/student/dashboard" element={<StudentDashboard />} />
        <Route exact path="/teacher/dashboard" element={<TeacherDashboard />} />

        {/* Admin section */}
        <Route exact path="/admin/assignments" element={<Assignment />} />
        <Route exact path="/admin/attendance" element={<Attendance />} />
        <Route exact path="/admin/communication" element={<Announcement />} />
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
        <Route
          exact
          path="/student/communication"
          element={<AnnouncementSection />}
        />
        <Route
          exact
          path="/student/assignments"
          element={<StudentAssignments />}
        />
        <Route
          exact
          path="/student/attendance"
          element={<AttendanceSection />}
        />
        <Route exact path="/student/exams" element={<ExamSection />} />
        <Route exact path="/student/library" element={<LibrarySection />} />
        <Route
          exact
          path="/student/performance"
          element={<PerformanceSection />}
        />
        <Route exact path="/student/settings" element={<ProfileSection />} />
        <Route exact path="/student/sidebar" element={<Sidebar />} />

        {/* Teacher section */}
        <Route
          exact
          path="/teacher/communication"
          element={<CheckAnnouncementSection />}
        />
        <Route
          exact
          path="/teacher/assignments"
          element={<AssignmentSection />}
        />
        <Route
          exact
          path="/teacher/attendance"
          element={<CheckAttendanceSection />}
        />
        <Route exact path="/teacher/exams" element={<CheckExamSection />} />
        <Route exact path="/teacher/classes" element={<ClassSection />} />
        <Route exact path="/teacher/events" element={<EventSection />} />
        <Route
          exact
          path="/teacher/performance"
          element={<CheckPerformancesSection />}
        />
        <Route
          exact
          path="/teacher/settings"
          element={<TeacherProfilesSection />}
        />
        <Route exact path="/teacher/students" element={<StudentSection />} />
        <Route exact path="/teacher/teachers" element={<TeacherSection />} />
        <Route exact path="/teacher/sidebar" element={<Sidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
