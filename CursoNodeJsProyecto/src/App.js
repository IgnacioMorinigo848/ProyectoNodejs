import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Lists from "./components/Lists";
import MovieDetails from "./components/MovieDetails";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import { ChangePassoword } from "./components/changePassword";

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favorita" element={<Lists type="Favorites" title="Favorites"/>} />
        <Route path="/verDespues" element={<Lists type="VerDespues" title="To Watch"/>} />
        <Route path="/vistas" element={<Lists type="Vistas" title="Views"/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/changePassword" element={<ChangePassoword />} />
        <Route path="/movie/:movieId" element={<MovieDetails media={"movie"} />} />
        <Route path="/tv/:movieId" element={<MovieDetails media={"tv"}/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
