import { Route, Routes } from "react-router-dom";
import {
  Admin,
  AllTeachers,
  Home,
  Login,
  Student,
  // Teacher,
  TeacherPage,
} from "./Pages/index.js";

import {
  Appeals,
  AdminNews,
  TeacherCourses,
  AdminTeachers,
  AdminGroups,
  AdminStudents,
} from "./Components/index.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminGraduations from "./Components/AdminGraduations/AdminGraduations.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />}>
          <Route index element={<Appeals />} />
          <Route path='news' element={<AdminNews />} />
          <Route path='courses' element={<TeacherCourses />} />
          <Route path='teachers' element={<AdminTeachers />} />
          <Route path='groups' element={<AdminGroups />} />
          <Route path='students' element={<AdminStudents />} />
          <Route path='graduations' element={<AdminGraduations />} />
        </Route>
        <Route path='/teacher' element={<TeacherPage />} />
        <Route path='/student' element={<Student />} />
        <Route path='/allTeachers' element={<AllTeachers />} />
      </Routes>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
};

export default App;
