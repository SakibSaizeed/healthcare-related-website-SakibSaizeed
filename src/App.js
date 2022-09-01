import "./App.css";
import Header from "./pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage/HomePage";
import Services from "./pages/Home/Services/Services";
import Banner from "./pages/Home/Banner/Banner";
import Footer from "./pages/Shared/Footer/Footer";
import About from "./pages/Home/About/About";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Team from "./pages/Home/Team/Team";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/banner" element={<Banner />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
