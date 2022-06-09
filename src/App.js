import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Appoinments from "./pages/Appoinments/Appoinments";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/appointments"
            element={<Appoinments></Appoinments>}
          ></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
