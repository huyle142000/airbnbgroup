import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "antd/dist/antd.min.css";
import AdminTemplate from "./Templates/AdminTemplate/AdminTemplate";
import User from "./pages/Admin/UserAdmin/User";
import EditUser from "./pages/Admin/UserAdmin/EditUser/EditUser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<Navigate to="" />} />
        {/* ************* Admin ************ */}
        <Route element={<AdminTemplate />}>
          <Route path="/admin" element={<User />} />
          <Route path="/admin/userlist" element={<User />} />
          <Route path="/admin/edituser" element={<EditUser />}>
            <Route path=":id" element={<EditUser />} />
          </Route>
          <Route path="/admin/listroom" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
