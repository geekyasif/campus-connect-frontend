import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import FindDev from "./pages/FindDev/FindDev";
import Home from "./pages/Home/Home";
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import User from "./pages/User/EditProfile/User";
import AuthRoute from "./routes/AuthRoute";
import Footer from "./components/Footer/Footer";
import DevDetails from "./pages/DevDetails.js/DevDetails";

import UserAcademics from "./components/UserProfile/EditProfile/UserAcademics";
import UserSocialLinks from "./components/UserProfile/EditProfile/UserSocialLinks";
import UserChangePassword from "./components/UserProfile/EditProfile/UserChangePassword";
import UserCertificates from "./components/UserProfile/EditProfile/UserCertificates";
import UserProjects from "./components/UserProfile/EditProfile/UserProjects";
import MyProfile from "./pages/User/MyProfile/MyProfile";
import Forum from "./pages/Forum/Forum";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import ForumContainer from "./components/Forum/ForumContainer";
import QueryDetails from "./pages/Forum/QueryDetails";
import ForumCategory from "./pages/Forum/ForumCategory";
import ForumTag from "./pages/Forum/ForumTag";
import EditQuery from "./pages/Forum/EditQuery";
import UserPersonalDetails from "./components/UserProfile/UserPersonalDetails/EditUserPersonalDetails";
import Chat from "./pages/Chat/Chat";
import Chatting from "./pages/Chat/Chatting";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Public Routes  */}
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot-password" element={<ForgotPassword />} />

        {/* Authenticated Routes  */}
        <Route element={<AuthRoute />}>
          <Route path="find-dev/:username" element={<DevDetails />} />
          <Route path="profile/:username" element={<MyProfile />} />
          <Route path="edit-profile/:username" element={<User />}>
            <Route index element={<UserPersonalDetails />} />
            <Route path="academics" element={<UserAcademics />} />
            <Route path="social-links" element={<UserSocialLinks />} />
            <Route path="certificates" element={<UserCertificates />} />
            <Route path="projects" element={<UserProjects />} />
            <Route path="change-password" element={<UserChangePassword />} />
          </Route>
        </Route>

        <Route path="chats" element={<Chat />}>
          <Route path=":chatId" element={<Chatting />} />
        </Route>

        <Route path="find-dev" element={<FindDev />} />
        <Route path="forum" element={<Forum />}>
          <Route
            index
            element={<ForumContainer title="Recent Queries" type="default" />}
          />
          <Route path="category/:category" element={<ForumCategory />} />
          <Route path="tag/:tag" element={<ForumTag />} />
          <Route path=":category/:username/:id" element={<QueryDetails />} />
          <Route path="edit/:username/:id" element={<EditQuery />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
