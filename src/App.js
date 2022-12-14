import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import "antd/dist/antd.min.css";
import AdminTemplate from "./Templates/AdminTemplate/AdminTemplate";
import User from "./Pages/Admin/UserAdmin/User";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddUser from "./Pages/Admin/UserAdmin/AddUser/AddUser";
import ListLocation from "./Pages/Admin/Location/ListLocation";
import AddLocation from "./Pages/Admin/Location/AddLocation/AddLocation";
import EditLocation from "./Pages/Admin/Location/EditLocation/EditLocation";
import ListRoom from "./Pages/Admin/Rooms/ListRoom";
import EditRoom from "./Pages/Admin/Rooms/EditRoom/EditRoom";
import AddRoom from "./Pages/Admin/Rooms/AddRoom/AddRoom";
import ModalAirBnB from "./Templates/ModalAirBnB/ModalAirBnB";
import Login from "./Pages/Login/Login";
import EditUser from "./Pages/Admin/UserAdmin/EditUser/EditUser";
import "./assets/sass/main.scss";
import Register from "./Pages/Register/Register";
import Profile from "./components/FormUser/FormUserDetail/Profile";
import TravelBooking from "./components/FormUser/FormUserDetail/TravelBooking";
import BookingTravel from "./pages/BookingTravel/BookingTravel";
import ConfirmPay from "./pages/BookingTravel/ConfirmPay/ConfirmPay";
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
        {/*************** BookingRoom *****************/}
        <Route path="bookingtravel" element={<BookingTravel />} />

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
        <Route path="bookingtravel/:id" element={<BookingTravel />} />

        <Route path="confirmpay" element={<ConfirmPay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
