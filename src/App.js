import { Route, Routes } from "react-router-dom";

import Appoinments from "./pages/Appoinments/Appoinments";
import Blogs from "./pages/Blogs/Blogs";
import Home from "./pages/home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./pages/RequireAuth/RequireAuth";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAppointments from "./pages/Dashboard/MyAppointments";
import Review from "./pages/Dashboard/Review";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/appointment"
            element={
              <RequireAuth>
                <Appoinments></Appoinments>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard></Dashboard>
              </RequireAuth>
            }
          >
            <Route index element={<MyAppointments></MyAppointments>}></Route>
            <Route path="review" element={<Review></Review>}></Route>
          </Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
