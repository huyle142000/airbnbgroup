import React, { useEffect, useRef } from "react";
import CalendarBook from "../CalendarBook/CalendarBook";
import { HandleInputCalendar } from "../CalendarBook/HandleInputCalendar";
import GuestForm from "../GuestForm/GuestForm";

export default function BookForm(props) {
  let { inforRoom } = props;
  const refCalendar = useRef();
  useEffect(() => {
    const handleCalendarPopUp = (e) => {
      if (refCalendar !== null) {
        if (!refCalendar.current?.contains(e.target)) {
          setShow(false);
        }
      }
    };
    document.addEventListener("mousedown", handleCalendarPopUp);
    return () => {
      document.removeEventListener("mousedown", handleCalendarPopUp);
    };
  }, []);
  const {
    checkInDate,
    setShow,
    isCheckOut,
    checkOutDate,
    isShow,
    submitCheckIn,
  } = HandleInputCalendar(inforRoom);
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
            <div className="popupCalendar" ref={refCalendar}>
              <CalendarBook inforRoom={inforRoom} />
            </div>
          )}
        </div>
        <div className="wrap_label-guest ">
          <GuestForm getFormGuest={true} doNotPopUp={true} getTax={true} />
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
