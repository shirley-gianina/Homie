import HomePage from "./../pages/HomePage/HomePage"
import LivingPlacesPage from "./../pages/LivingPlacesPage/LivingPlacesPage";
import LivingPlaceDetailPage from "./../pages/LivingPlaceDetailPage/LivingPlaceDetailPage";
import SignupPage from "./../pages/SignupPage/SignupPage";
import LoginPage from "./../pages/LoginPage/LoginPage";
import ProfileLivingPlaces from "./../pages/ProfileLivingPlaces/ProfileLivingPlaces";
import ProfilePage from "./../pages/ProfilePage/ProflePage";
import ProfileMessages from "./../pages/ProfileMessages/ProfileMessages";


import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/living-places" element={<LivingPlacesPage />} />
      <Route path="/living-places/:id" element={<LivingPlaceDetailPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/living-places" element={<ProfileLivingPlaces />} />
      <Route path="/profile/messages" element={<ProfileMessages />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default AppRoutes;
