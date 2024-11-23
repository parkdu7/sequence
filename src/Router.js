import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './main/MainPage';
import LoginPage from './login/LoginPage';
import Header from './asset/component/Header';
import AnnouncementList from './announcement/list/AnnouncementList';
import AnnouncementDetail from './announcement/detail/AnnouncementDetail';
import Archivelist from './archive/archivelist/ArchiveList';
import ProjectRegistration from './archive/projectregistration/ProjectRegistration';
import MyPage from './mypage/MyPage';
import Register from './register/Register';
import FindIdPage from './login/page/FindIdPage';
import FindPasswordPage from './login/page/FindPasswordPage';

const AppRouter = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />    
        <Route path="/findId" element={<FindIdPage />} />
        <Route path="/findPassword" element={<FindPasswordPage />} />
        <Route path="/announcement" element={<AnnouncementList />} />
        <Route path="/announcement/1" element={<AnnouncementDetail />} />
        <Route path="/archive" element={<Archivelist />} />
        <Route path="/archive/registration" element={<ProjectRegistration />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </Router> 
  );
};

export default AppRouter;
