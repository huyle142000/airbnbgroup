import React, { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import { logoutForm } from "../../redux/reducer/FormReducer";
import { openLogin, openRegister } from "../../redux/reducer/ModalReducer";
import { USER_LOGIN } from "../../utils/setting";
const avatar = "";
function FormUser() {
  const [isPump, setPump] = useState(false);
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem(USER_LOGIN));
  const navigate = useNavigate();
  const renderForm = () => {
    return (
      <>
        {isPump && (
          <div className="form_user-popup text-left">
            <h6
              onClick={() => {
                dispatch(openRegister(<Register classModal={"form_modal"} />));
              }}
            >
              Sign Up
            </h6>
            <h6
              className="border_bottom"
              onClick={() => {
                dispatch(openLogin(<Login classModal={"form_modal"} />));
              }}
            >
              Log In
            </h6>
            <div>
              <h6>Airbnb is your home</h6>
              <h6>Host Experience</h6>
              <h6>Help</h6>
            </div>
          </div>
        )}
      </>
    );
  };
  const renderUser = () => {
    return (
      <>
        {isPump && (
          <div className="form_user-popup text-left">
            <h6
              onClick={() => {
                navigate("profile");
              }}
            >
              Profile
            </h6>
            <h6 className="border_bottom" onClick={() => {}}>Your Travel Booking</h6>
            <div className="border_bottom">
              <h6>Airbnb is your home</h6>
              <h6>Host Experience</h6>
              <h6>Help</h6>
            </div>
            <h6
              onClick={() => {
                dispatch(logoutForm(navigate));
              }}
            >
              Log Out
            </h6>
          </div>
        )}
      </>
    );
  };
  return (
    <div className="w-50">
      <div className="d-flex justify-content-between">
        <h6>Airbnb is your home</h6>
      </div>
      <div className="form_user text-right w-100">
        <div
          className="form_user-icon"
          onClick={() => {
            setPump(!isPump);
          }}
        >
          <i className="fa-solid fa-bars"></i>

          {user != null ? (
            <img src={user.avatar} alt="" />
          ) : (
            <i className="fa-solid fa-circle-user"></i>
          )}
        </div>
        {user != null ? renderUser() : renderForm()}
      </div>
    </div>
  );
}
export default memo(FormUser);
