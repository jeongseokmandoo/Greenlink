import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import GalleryPage1 from "./pages/GalleryPage1";
import GroupPage1 from "./pages/GroupPage1";
import PlantPage1 from "./pages/PlantPage1";
import NotifiPage from "./pages/NotifiPage";
import SettingPage from "./pages/SettingPage";
import PersonalPage from "./pages/PersonalPage";
import PlantPage2 from "./pages/PlantPage2";
import GalleryPage2 from "./pages/GalleryPage2";
import GroupPage2 from "./pages/GroupPage2";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/2" element={<Page2 />} />
        <Route path="/3" element={<Page3 />} />
        <Route path="/4" element={<Page4 />} />
        <Route path="/5" element={<Page5 />} />
        <Route path="/6" element={<Page6 />} />
        <Route path="/7" element={<Page7 />} />
        <Route path="/gallery1" element={<GalleryPage1 />} />
        <Route path="/gallery2" element={<GalleryPage2 />} />
        <Route path="/plant1" element={<PlantPage1 userId={1} />} />
        <Route path="/plant2" element={<PlantPage2 />} />
        <Route path="/group1" element={<GroupPage1 />} />
        <Route path="/group2" element={<GroupPage2 />} />
        <Route path="/notification" element={<NotifiPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/personal" element={<PersonalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
