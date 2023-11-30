import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogoPage from "./pages/LogoPage";
import Signupstep1Page from "./pages/Signupstep1Page";
import Signupstep2Page from "./pages/Signupstep2Page";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import GalleryhomePage from "./pages/GalleryhomePage";
import Accounthome from "./pages/AccounthomePage";
import Home from "./pages/HomePage";
import Notifications from "./pages/NotificationsPage";
import SettingPage from "./pages/SettingPage";
import SecurityPage from "./pages/SecurityPage";
import Homemodify from "./pages/HomemodifyPage";
import GallerydetailPage from "./pages/GallerydetailPage";
import Accountmodify from "./pages/AccountmodifyPage";
import { useState } from "react";
import PageLoginplease from "./pages/PageloginpleasePage";

function Main() {
  const [token, setToken] = useState(true);
  // const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <BrowserRouter>
      <Routes>
        {!token ? (
          <>
            <Route path="/" element={<LogoPage />} />
            <Route path="/signupstep1" element={<Signupstep1Page />} />
            <Route path="/signupstep2" element={<Signupstep2Page />} />
            <Route path="/api/signup/" element={<SignupPage />} />
            <Route path="/api/login/" element={<LoginPage />} />
            <Route path="/galleryhome" element={<PageLoginplease />} />
            <Route path="/gallerydetail" element={<PageLoginplease />} />
            <Route path="/api/home" element={<PageLoginplease />} />
            <Route path="/api/home_modify" element={<PageLoginplease />} />
            <Route path="/api/accounthome" element={<PageLoginplease />} />
            <Route path="/api/accountmodify" element={<PageLoginplease />} />
            <Route path="/api/notifications" element={<PageLoginplease />} />
            <Route path="/setting" element={<PageLoginplease />} />
            <Route path="/security" element={<PageLoginplease />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LogoPage />} />
            <Route path="/signupstep1" element={<Signupstep1Page />} />
            <Route path="/signupstep2" element={<Signupstep2Page />} />
            <Route path="/api/signup/" element={<SignupPage />} />
            <Route path="/api/login/" element={<LoginPage />} />
            <Route path="/galleryhome" element={<GalleryhomePage />} />
            <Route path="/gallerydetail" element={<GallerydetailPage />} />
            <Route path="/api/home" element={<Home />} />
            <Route path="/api/homemodify" element={<Homemodify />} />
            <Route path="/api/accounthome" element={<Accounthome />} />
            <Route path="/api/accountmodify" element={<Accountmodify />} />
            <Route path="/api/notifications" element={<Notifications />} />
            <Route path="/setting" element={<SettingPage />} />
            <Route path="/security" element={<SecurityPage />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
