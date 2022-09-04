import "./App.css";
import Header from "./pages/Shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage/HomePage";
import Services from "./pages/Home/Services/Services";
import Banner from "./pages/Home/Banner/Banner";
import Footer from "./pages/Shared/Footer/Footer";
import About from "./pages/Home/About/About";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Team from "./pages/Home/Doctors/Doctors";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import DetailService from "./pages/Home/Service/DetailService/DetailService";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import Doctors from "./pages/Home/Doctors/Doctors";
import ThankYou from "./pages/Home/Service/ThankYou/ThankYou"
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/banner" element={<Banner />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route
          path="/service/:serviceId"
          element={
            <RequireAuth>
              <DetailService />
            </RequireAuth>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/doctors" element={<Doctors />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/thankyou" element={<ThankYou/>}></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
