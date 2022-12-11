import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getInforDateToBook } from "../../../redux/reducer/BookTravel";
import {
  getCheckIn,
  getCheckOut,
} from "../../../redux/reducer/CalendarReducer";
import { USER_LOGIN } from "../../../utils/setting";
import CalendarBook from "../CalendarBook/CalendarBook";
import { useCheckDate } from "../CalendarBook/checkDate";

export default function BookForm(props) {
  let { inforRoom } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Date
  const checkInRef = useRef();
  const checkOutRef = useRef();
  const refClose = useRef();
  //
  const [totalBookedDate, setTotalDate] = useState(1);
  const [checkInDate, setDateIn] = useState("");
  const [checkOutDate, setDateOut] = useState("");
  const [focus, setFocus] = useState(false);
  const [isCheckOut, setCheckOut] = useState(false);
  const [isShow, setShow] = useState(false);
  const { checkDateIn, checkDateOut } = useSelector(
    (state) => state.CalendarReducer
  );
  const [errorDateIn, setErrorDateIn] = useState(false);
  const [errorDateOut, setErrorDateOut] = useState(false);
  // Guest
  const [adult, setAdult] = useState(0);
  const [children, setChildren] = useState(0);
  const [infant, setInfants] = useState(0);
  const [pet, setPet] = useState(0);
  const [showGuest, setShowGuest] = useState(false);
  const refGuest = useRef();
  useEffect(() => {
    if (checkDateIn !== "") {
      if (checkDateIn._i) {
        setDateIn(
          moment(checkDateIn._i, ["DD/MM/YYYY", "MM/DD/YYYY"]).format(
            "DD/MM/YYYY"
          )
        );
      } else {
        setDateIn(
          moment(checkDateIn._d, ["DD/MM/YYYY", "MM/DD/YYYY"]).format(
            "DD/MM/YYYY"
          )
        );
      }
    } else {
      setDateIn("");
    }
  }, [checkDateIn]);
  useEffect(() => {
    if (checkDateOut !== "") {
      if (checkDateOut._i) {
        setDateOut(checkDateOut._i);
      } else {
        setDateOut(moment(checkDateOut._d).format("DD/MM/YYYY"));
      }
    }

    if (checkDateOut && checkDateIn) {
      let totalDateBookCur = 1;
      let dateClone = checkDateIn.clone();
      while (dateClone.isBefore(checkDateOut, "day")) {
        dateClone.add(1, "day").clone();
        totalDateBookCur += 1;
      }
      setTotalDate(totalDateBookCur);
    }
  }, [checkDateOut]);
  const { checkDateIsBooked, dateOutCheck } = useCheckDate(inforRoom?.id);
  useEffect(() => {
    //calendar
    let handle = (e) => {
      if (refClose) {
        if (!refClose.current?.contains(e.target)) {
          setErrorDateIn(false);
          setErrorDateOut(false);
          setShow(false);
        }
      }
    };
    document.addEventListener("mousedown", handle);
    //guest Popup
    let handleGuestPopUp = (e) => {
      if (refGuest) {
        if (!refGuest.current?.contains(e.target)) {
          setShowGuest(false);
        }
      }
    };
    document.addEventListener("mousedown", handleGuestPopUp);
    return () => {
      document.removeEventListener("mousedown", handle);
      document.removeEventListener("mousedown", handleGuestPopUp);
    };
  }, []);
  useEffect(() => {
    if (isShow === true && checkInRef) {
      const checkInRefs = checkInRef.current;
      checkInRefs.focus();
      setFocus(true);
    }
    if (isShow === true && isCheckOut && checkOutRef) {
      const checkOutRefs = checkOutRef.current;
      checkOutRefs.focus();
      setFocus(false);
    }
  }, [isShow]);

  const checkDateValid = (name, value) => {
    let dateFormat = "DD/MM/YYYY";
    let checkValid = moment(value, dateFormat, true).clone().isValid();
    let result = checkDateIsBooked(value);
    let result2 = moment(value, "DD/MM/YYYY").isBefore(new Date(), "day");
    // && !result
    if (name === "checkIn") {
      if (checkValid && result === "" && !result2) {
        dispatch(getCheckIn(moment(value, "DD/MM/YYYY")));
        setErrorDateIn(false);
        setCheckOut(true);
        return true;
      } else {
        setErrorDateIn(true);
        dispatch(getCheckIn(""));
        return false;
      }
    }
    if (name === "checkOut") {
      const convertDates = moment(value, ["DD/MM/YYYY"])
        .clone()
        .format("YYYY-MM-DD");
      const convertCheckIn = moment(checkInDate, "YYYY-MM-DD")
        .clone()
        .format("YYYY-MM-DD");
      const convertCheckOut = moment(dateOutCheck[0], "YYYY-MM-DD")
        .clone()
        .format("YYYY-MM-DD");
      let result3 = moment(convertDates, "YYYY-MM-DD")
        .clone()
        .isAfter(convertCheckIn, "day");
      let result4 = moment(convertDates, "YYYY-MM-DD")
        .clone()
        .isBefore(convertCheckOut, "day");

      // && !result2
      if (checkValid && !result && result3 && result4) {
        dispatch(getCheckOut(moment(value, ["DD/MM/YYYY"])));
        setErrorDateOut(false);
        return true;
      } else {
        setErrorDateOut(true);
        dispatch(getCheckOut(""));
        return false;
      }
    }
  };
  const submitCheckIn = async (e) => {
    e.preventDefault();
    let checkValidDateIn;
    let checkValidDateOut;
    try {
      checkValidDateIn = checkDateValid("checkIn", checkInDate);
      checkValidDateOut = checkDateValid("checkOut", checkOutDate);
      let guestAmount = adult + children + infant + pet;
      if (
        checkInDate &&
        checkOutDate &&
        guestAmount > 0 &&
        checkValidDateIn &&
        checkValidDateOut
      ) {
        const currentTime = moment().format("HH:mm:ss");
        const checkIndateConvert = moment(`${checkInDate} ${currentTime}`, [
          "YYYY-MM-DD[T]HH:mm:ss[Z]",
          "DD-MM-YYYY[T]HH:mm:ss[Z]",
        ]).format("YYYY-MM-DD[T]HH:mm:ss[Z]");
        const checkOutdateConvert = moment(`${checkOutDate} ${currentTime}`, [
          "YYYY-MM-DD[T]HH:mm:ss[Z]",
          "DD-MM-YYYY[T]HH:mm:ss[Z]",
        ]).format("YYYY-MM-DD[T]HH:mm:ss[Z]");
        let userID = JSON.parse(localStorage.getItem(USER_LOGIN));
        let data = {
          id: 0,
          maPhong: inforRoom?.id,
          ngayDen: checkIndateConvert,
          ngayDi: checkOutdateConvert,
          soLuongKhach: `${adult + children + infant + pet}`,
          maNguoiDung: userID?.id,
        };
        await dispatch(getInforDateToBook(data));
        await navigate("/confirmpay");
      }
    } catch (error) {}
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "checkIn") {
      setDateIn(value);
    }
    if (name === "checkOut") {
      setDateOut(value);
    }
  };
  const focusInput = (e) => {
    let { name } = e.target;

    if (name === "checkIn") {
      setFocus(true);
    }
    if (name === "checkOut") {
      setFocus(false);
    }
  };
  
  return (
    <div className="container-sm bookForm boxshadow">
      <div className="bookForm_header">
        <div className="bookForm_header-title">
          <h6>
            {Number(inforRoom?.giaTien)}$ <span>night</span>
          </h6>
          <h6>
            <span>
              <i className="fa-solid fa-star"></i>4
            </span>
            <ul>
              <li>34 reviews</li>
            </ul>
          </h6>
        </div>
        <div className="bookForm_header-checkDate">
          <label htmlFor="checkIn" className={`border_around label_pop-up`}>
            <span>Check-In</span>
            <input
              value={checkInDate}
              placeholder="Add Date"
              onClick={() => {
                setShow(true);
              }}
              type="text"
              id="checkIn"
              onChange={(e) => {}}
            />
          </label>
          <label
            htmlFor="checkOut"
            className={`border_around label_pop-up ${
              isCheckOut || checkOutDate !== "" ? "" : "opacity_label"
            } `}
          >
            <span>Check-Out</span>
            <input
              onClick={() => {
                setShow(true);
              }}
              value={checkOutDate}
              placeholder="DD/MM/YYYY"
              type="text"
              id="checkOut"
              onChange={(e) => {}}
            />
          </label>
          {isShow && (
            <div className="bookForm_pop-up boxshadow" ref={refClose}>
              <>
                <div className="select_dates">
                  <h3>Select your dates</h3>
                  <form
                    onSubmit={(e) => {
                      submitCheckIn(e);
                    }}
                  >
                    <label
                      htmlFor="checkIn"
                      className={`border_around label_checkIn ${
                        errorDateIn && "error"
                      } ${focus && "border_checkIn"}`}
                    >
                      <span>Check-In</span>
                      <input
                        value={checkInDate}
                        className="checkIn-input"
                        placeholder="DD/MM/YYYY"
                        onBlur={(e) => {
                          let { name, value } = e.target;
                          checkDateValid(name, value);
                        }}
                        onClick={(e) => {
                          focusInput(e);
                        }}
                        ref={checkInRef}
                        type="text"
                        name="checkIn"
                        id="checkIn"
                        onChange={(e) => handleChange(e)}
                      />
                      <p>
                        <i className="fa-solid fa-circle-exclamation"></i>Date
                        is not Valid
                      </p>
                    </label>
                    <label
                      htmlFor="checkOut"
                      className={`border_around ${
                        isCheckOut || checkOutDate !== "" ? "" : "opacity_label"
                      } ${errorDateOut && "error"} ${
                        !focus && "border_checkOut"
                      } label_checkOut`}
                    >
                      <span>Check-Out</span>
                      <input
                        onBlur={(e) => {
                          let { name, value } = e.target;
                          checkDateValid(name, value);
                        }}
                        onClick={(e) => {
                          focusInput(e);
                        }}
                        value={checkOutDate}
                        placeholder="DD/MM/YYYY"
                        disabled={
                          isCheckOut || checkOutDate !== "" ? false : true
                        }
                        type="text"
                        id="checkOut"
                        name="checkOut"
                        onChange={(e) => handleChange(e)}
                        ref={checkOutRef}
                      />
                      <p>
                        <i className="fa-solid fa-circle-exclamation"></i>Date
                        is not Valid
                      </p>
                    </label>
                  </form>
                </div>

                <CalendarBook />
              </>
            </div>
          )}
        </div>
        <div className="wrap_label-guest ">
          <label
            ref={refGuest}
            htmlFor="guest border_around"
            className="label_guest border_around"
            onClick={() => {
              setShowGuest(!showGuest);
            }}
          >
            <span>Guest</span>
            <input
              type="text"
              onChange={(e) => handleChange(e)}
              name="guest"
              value={`${adult + children + infant + pet} guest`}
              id="guest"
            />
            <div className="label_guest-updown">
              {!showGuest && <i className="fa-solid fa-angle-down"></i>}
              {showGuest && <i className="fa-solid fa-angle-up"></i>}
            </div>

            {showGuest && (
              <div
                className="label_guest-item boxshadow"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <div className="label_guest-type">
                  <div className="label_guest-title">
                    <h6>Adults</h6>
                    <p>Age 13+</p>
                  </div>
                  <div className="label_guest-icon">
                    <i
                      className="fa-solid fa-circle-minus"
                      onClick={() => {
                        if (adult > 0) {
                          setAdult((prev) => prev - 1);
                        }
                      }}
                    ></i>
                    <p>{adult}</p>
                    <i
                      onClick={() => {
                        if (adult >= 0) {
                          setAdult((prev) => prev + 1);
                        }
                      }}
                      className="fa-solid fa-circle-plus"
                    ></i>
                  </div>
                </div>
                <div className="label_guest-type">
                  <div className="label_guest-title">
                    <h6>Children</h6>
                    <p>Ages 2–12</p>
                  </div>
                  <div className="label_guest-icon">
                    <i
                      className="fa-solid fa-circle-minus"
                      onClick={() => {
                        if (children > 0) {
                          setChildren((prev) => prev - 1);
                        }
                      }}
                    ></i>
                    <p>{children}</p>
                    <i
                      className="fa-solid fa-circle-plus"
                      onClick={() => {
                        if (children >= 0) {
                          setChildren((prev) => prev + 1);
                        }
                      }}
                    ></i>
                  </div>
                </div>
                <div className="label_guest-type">
                  <div className="label_guest-title">
                    <h6>Infants</h6>
                    <p>Under 2</p>
                  </div>
                  <div className="label_guest-icon">
                    <i
                      className="fa-solid fa-circle-minus"
                      onClick={() => {
                        if (infant > 0) {
                          setInfants((prev) => prev - 1);
                        }
                      }}
                    ></i>
                    <p>{infant}</p>
                    <i
                      className="fa-solid fa-circle-plus"
                      onClick={() => {
                        if (infant >= 0) {
                          setInfants((prev) => prev + 1);
                        }
                      }}
                    ></i>
                  </div>
                </div>
                <div className="label_guest-type">
                  <div className="label_guest-title">
                    <h6>Pets</h6>
                  </div>
                  <div className="label_guest-icon">
                    <i
                      className="fa-solid fa-circle-minus"
                      onClick={() => {
                        if (pet > 0) {
                          setPet((prev) => prev - 1);
                        }
                      }}
                    ></i>
                    <p>{pet}</p>
                    <i
                      className="fa-solid fa-circle-plus"
                      onClick={() => {
                        if (pet >= 0) {
                          setPet((prev) => prev + 1);
                        }
                      }}
                    ></i>
                  </div>
                </div>
              </div>
            )}
          </label>
        </div>
      </div>
      {checkInDate && checkOutDate ? (
        <>
          <div
            className="btn_form btn_primary"
            onClick={(e) => {
              submitCheckIn(e);
            }}
          >
            Reserve
          </div>
          <div className="taxes">
            <div className="taxes-date taxes-item">
              <p>
                {inforRoom?.giaTien}$ X {totalBookedDate} nights
              </p>
              <p>${Number(totalBookedDate) * Number(inforRoom.giaTien)}</p>
            </div>
            <div className="taxes-fee taxes-item border-bottom">
              <p>Service fee</p>
              <p>$0</p>
            </div>
            <div className="taxes-total taxes-item">
              <p>Total before taxes</p>
              <p>${Number(totalBookedDate) * Number(inforRoom.giaTien)}</p>
            </div>
          </div>
        </>
      ) : (
        <div
          className="btn_form btn_primary"
          onClick={() => {
            setShow(true);
          }}
        >
          Check availability
        </div>
      )}
    </div>
  );
}
