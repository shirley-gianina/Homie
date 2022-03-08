import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Navigation />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  );
}

export default App;
