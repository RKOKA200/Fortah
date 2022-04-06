import { Routes, Route } from "react-router-dom";
import Client from "./Client/Client.jsx";
import HomePage from "./Homepage/HomePage.jsx";
import Login from "./Login/Login.jsx";
import EducationalSystem from "./Client/components/EducationalSystem";
import Forum from "./Client/components/Forum";
import MacroBuilder from "./Client/components/MacroBuilder";
import Settings from "./Client/components/Settings";
import SingleForum from "./Client/components/SingleForum.jsx";
import ReplyComment from "./Client/components/ReplyComment.jsx";
import SingleEducation from "./Client/components/SingleEducation.jsx";
import SingleLesson from "./Client/components/SingleLesson.jsx";
import Admin from "./Admin/Admin.jsx";
import AdEducationalSystem from "./Admin/components/AdEducationalSystem.jsx";
import AdSingleEducation from "./Admin/components/AdSingleEducation.jsx";
import AdSingleLesson from "./Admin/components/AdSingleLesson.jsx";
import AdForum from "./Admin/components/AdForum.jsx";
import AdSingleForum from "./Admin/components/AdSingleForum.jsx";
import AdReplyComment from "./Admin/components/AdReplyComment.jsx";


function App() {
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Admin />}  >
        <Route index element={<AdEducationalSystem />}  path="/admin" />
        <Route element={<AdSingleEducation />} path="/admin/:educationid" />
        <Route element={<AdSingleLesson />} path="/admin/:educationid/:lessonid" />
        <Route element={<AdForum />} path="/admin/forum" />
        <Route element={<AdSingleForum />} path="/admin/forum/:forumid" />
        <Route  element={<AdReplyComment />} path="/admin/forum/:forumid/:commentid"  />
        </Route>
        <Route element={<Client />}>
          <Route index element={<EducationalSystem />} path="/client" />
          <Route element={<SingleEducation />} path="/client/:educationid" />
          <Route element={<SingleLesson />} path="/client/:educationid/:lessonid" />
          <Route element={<Forum />} path="/client/forum" />
          <Route element={<MacroBuilder />} path="/client/macro" />
          <Route element={<Settings />} path="/client/settings" />
          <Route element={<SingleForum />} path="/client/forum/:forumid" />
          <Route  element={<ReplyComment />} path="/client/forum/:forumid/:commentid"  />
        </Route>
      </Routes>
    </>
  );
}

export default App;
