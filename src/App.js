import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "antd/dist/antd.min.css";
import AdminTemplate from "./Templates/AdminTemplate/AdminTemplate";
import User from "./pages/Admin/UserAdmin/User";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddUser from "./pages/Admin/UserAdmin/AddUser/AddUser";
import ListLocation from "./pages/Admin/Location/ListLocation";
import AddLocation from "./pages/Admin/Location/AddLocation/AddLocation";
import EditLocation from "./pages/Admin/Location/EditLocation/EditLocation";
import ListRoom from "./pages/Admin/Rooms/ListRoom";
import EditRoom from "./pages/Admin/Rooms/EditRoom/EditRoom";
import AddRoom from "./pages/Admin/Rooms/AddRoom/AddRoom";
import ModalAirBnB from "./Templates/ModalAirBnB/ModalAirBnB";
import Login from "./pages/Login/Login";
import EditUser from "./pages/Admin/UserAdmin/EditUser/EditUser";
import "./assets/sass/main.scss";
import Register from "./pages/Register/Register";
import Profile from "./components/FormUser/FormUserDetail/Profile";
import TravelBooking from "./components/FormUser/FormUserDetail/TravelBooking";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <ModalAirBnB />
      <Routes>
        <Route path="*" element={<Navigate to="" />} />

        <Route path="" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* *************  Admin  ************ */}
        <Route element={<AdminTemplate />}>
          {/******************* USERR *****************/}
          <Route path="/admin" element={<User />} />
          <Route path="/admin/userlist" element={<User />} />
          <Route path="/admin/edituser/:id" element={<EditUser />} />
          <Route path="/admin/adduser" element={<AddUser />} />

          {/* *****************  Location  ***************** */}
          <Route path="/location" element={<ListLocation />} />
          <Route path="/admin/addlocation" element={<AddLocation />} />
          <Route path="/admin/editvitri/:id" element={<EditLocation />} />
          {/* ****************** ROOM ***************** */}
          <Route path="/admin/rooms/:id" element={<ListRoom />} />
          <Route path="/admin/editroom/:id" element={<EditRoom />} />
          <Route path="/admin/addroom/:id" element={<AddRoom />} />
        </Route>
        {/* Form */}
        <Route path="profile" element={<Profile />} />
        <Route path="travelbooking" element={<TravelBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
