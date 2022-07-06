import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Homepage from './homepage/Homepage';
import RegisterStudent from './homepage/RegisterStudent';
import RegisterTeacher from './homepage/RegisterTeacher';
import ContentPage from './student/ContentPage';
import ProblemsPage from './student/ProblemsPage';
import TeacherProblemsPage from './teacher/TeacherProblemsPage';
import MaterialsPage from './student/MaterialsPage';
import NotificationsPage from './student/NotificationsPage';
import SolutionsPage from './student/SolutionsPage';
import StudentPage from './student/StudentPage';
import StudentProfile from './student/StudentProfile';
import TeacherMaterialsPage from './teacher/TeacherMaterialsPage';
import TeacherNotificationsPage from './teacher/TeacherNotificationsPage';
import TeacherPage from './teacher/TeacherPage';
import TeacherProfile from './teacher/TeacherProfile';
import TeacherSolutionsPage from './teacher/TeacherSolutionsPage';
import TeacherContentPage from './teacher/TeacherContentPage';
import SendFeedbackForm from './teacher/SendFeedbackForm';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Routes>
            
            <Route path='/*' element = {<Homepage/>} />
            <Route path='/register-student/*' element = {<RegisterStudent/>} />
            <Route path='/register-teacher/*' element = {<RegisterTeacher/>} />

            <Route path='/student/*' element = {<StudentPage />} />
            <Route path='/student/notifications' element = {<NotificationsPage/>} />
            <Route path='/student/profile' element = {<StudentProfile/>} />
            <Route path='/student/materials' element = {<MaterialsPage/>} />
            <Route path='/student/materials/content' element = {<ContentPage/>} />
            <Route path='/student/materials/problems' element = {<ProblemsPage/>} />
            <Route path='/student/materials/problems/solutions' element = {<SolutionsPage/>} />

            <Route path='/teacher/*' element = {<TeacherPage />} />
            <Route path='/teacher/notifications' element = {<TeacherNotificationsPage/>} />
            <Route path='/teacher/profile' element = {<TeacherProfile/>} />
            <Route path='/teacher/materials' element = {<TeacherMaterialsPage/>} />
            <Route path='/teacher/materials/content' element = {<TeacherContentPage/>} />
            <Route path='/teacher/materials/problems/' element = {<TeacherProblemsPage/>} />
            <Route path='/teacher/solutions' element = {<TeacherSolutionsPage/>} />
            <Route path='/teacher/solutions/send-feedback' element = {<SendFeedbackForm/>} />

          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
