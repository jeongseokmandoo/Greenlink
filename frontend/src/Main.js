import { BrowserRouter, Routes, Route } from "react-router-dom";
import GalleryPage1 from "./pages/GalleryPage1";
import GroupPage1 from "./pages/GroupPage1";
import PlantPage1 from "./pages/PlantPage1";
import NotificationPage from "./pages/NotificationPage";
import SettingPage from "./pages/SettingPage";
import PersonalPage from "./pages/PersonalPage";
import PlantPage2 from "./pages/PlantPage2";
import GalleryPage2 from "./pages/GalleryPage2";
import GroupPage2 from "./pages/GroupPage2";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/gallery1" element={<GalleryPage1 />} />
        <Route path="/gallery2" element={<GalleryPage2 />} />
        <Route path="/" element={<PlantPage1 />} />
        <Route path="/plant2" element={<PlantPage2 />} />
        <Route path="/group1" element={<GroupPage1 />} />
        <Route path="/group2" element={<GroupPage2 />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/personal" element={<PersonalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
