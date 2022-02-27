import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<p>Home</p>} />
      <Route path="/viviendas/:ciudad" element={<p>Viviendas</p>} />
      <Route path="/viviendas/:id" element={<p>Detalle</p>} />
      <Route path="/iniciar-sesion" element={<p>login</p>} />
      <Route path="/registro" element={<p>registro</p>} />
      <Route path="/perfil" element={<p>perfil</p>} />
      <Route path="/perfil/viviendas" element={<p>viviendas</p>} />
      <Route path="/perfil/mensajes" element={<p>mensajes</p>} />

      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default AppRoutes;




// HomePage.jsx              '/'                                Navigation, Carousel, HomeFilter, CityCard, Card, Footer
// LivingPlaces.jsx          '/living-places'/?city=Madrid      Navigation, Homefilter, Card, Footer
// LivingPlaceDetail         '/living-places/:id                Navigation, Carousel, Tabs, FormContact

// Login.jsx                 '/login'                           Navigation, FormLogin
// Signup.jsx                '/signup'                          Navigation, FormSignup

// Profile.jsx               '/profile'                         Navigation, MenuProfile, FormProfile
// ProfileLivingPlaces.jsx   '/profile/living-places'           Navigation, ManuProfile, TableLivingPlaces
// ProfileMessages.jsx       '/profile/messages'                Navigation, MenuProfile, TableMessages

