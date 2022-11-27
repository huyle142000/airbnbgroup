import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <BrowserRouter>
      {/* routes không cần dấu "/" và tự kiểm tra mặc định exact */}
      <Routes>
        <Route path="" element={<Home />}>
          {/* index mặc định đặt ở đâu thì khi truy cập trang path sai thì nó sẽ về trang đó */}
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<Navigate to="" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
