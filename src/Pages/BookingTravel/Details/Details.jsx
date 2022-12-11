import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoRoomAPI } from "../../../redux/actions/LocationRoomAction";
import { openModal } from "../../../redux/reducer/ModalReducer";
import BookForm from "../BookForm/BookForm";
import CalendarBook from "../CalendarBook/CalendarBook";
import ContentPolicy from "./ContentPolicy/ContentPolicy";
export default function Details(props) {
  let dispatch = useDispatch();
  const { inforRoom } = props;

  const renderTitle = () => {
    return (
      <>
        <div className="detail-room_title-top border-bottom">
          <div className="detail-room_title-feature">
            <h3>Entire villa hosted by Tom</h3>
            <span>
              {`${inforRoom?.khach} guests - ${inforRoom?.phongNgu} bedrooms - ${inforRoom?.giuong} beds - ${inforRoom?.phongTam} bath`}
            </span>
          </div>
          <div className="detail-room_avatar">
            <img
              style={{ borderRadius: "50%" }}
              src={`https://i.pravatar.cc/100?img=${Math.floor(
                Math.random(1, 20)
              )}`}
              alt=""
            />
          </div>
        </div>
        <div className="detail-room_title-bottom pt-3">
          <div className="row detail-room_title-item">
            <div className="col-1 text-center">
              <i className="fa-brands fa-superpowers img-fluid"></i>
            </div>
            <div className="col-11">
              <h3>Tom is a Superhost</h3>
              <p>
                Superhosts are experienced, highly rated hosts who are committed
                to providing great stays for their guests.
              </p>
            </div>
          </div>
          <div className="row detail-room_title-item">
            <div className="col-1">
              <i className="fa-solid fa-key"></i>
            </div>
            <div className="col-11">
              <h3>Great check-in experience</h3>
              <p>
                100% of recent guests gave the check-in process a 5-star rating.
              </p>
            </div>
          </div>
          <div className="row detail-room_title-item border-bottom pb-4">
            <div className="col-1">
              <i className="fa-solid fa-calendar"></i>
            </div>
            <div className="col-11 ">
              <h3>Free cancellation for 48 hours.</h3>
              <p>Free cancellation for 48 hours.</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  const renderContentDetail = () => {
    return (
      <>
        <div className="detail-room_policy mt-4">
          <img
            src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
            className="img-fluid"
            alt=""
          />
          <p>
            Every booking includes free protection from Host cancellations,
            listing inaccuracies, and other issues like trouble checking in.
          </p>
          <h5
            className="border-bottom pb-4"
            onClick={() => {
              dispatch(
                openModal(<ContentPolicy classModal={"policy_modal"} />)
              );
            }}
          >
            Learn More
          </h5>
        </div>
        <div className="detail-room_moTa mt-4 border-bottom pb-4">
          <p>{inforRoom.moTa}</p>
        </div>
      </>
    );
  };
  const renderContentFeature = () => {
    return (
      <>
        <div className="detail-room_features mt-4">
          <h3>Where you'll sleep</h3>
          <div className="detail-room_features mt-4 border-bottom pb-4">
            <p>{inforRoom.moTa}</p>
          </div>
          <div className="detail-room_features-list pt-3 pb-4">
            <h3>What this place offers</h3>
            <div className="row">
              {inforRoom.mayGiat && (
                <div className="col-6">
                  <div className="detail_feature-item">
                    <i className="fa-solid fa-soap"></i>
                    <span>Washing machine </span>
                  </div>
                </div>
              )}
              {inforRoom.banLa && (
                <div className="col-6">
                  <div className="detail_feature-item">
                    <i className="fa-solid fa-prescription-bottle"></i>
                    <span>Iron </span>
                  </div>
                </div>
              )}
              {inforRoom.tivi && (
                <div className="col-6">
                  <div className="detail_feature-item">
                    <i className="fa-solid fa-tv"></i>
                    <span>Tivi </span>
                  </div>
                </div>
              )}
              {inforRoom.dieuHoa && (
                <div className="col-6">
                  <div className="detail_feature-item">
                    <i className="fa-solid fa-snowflake"></i>
                    <span>A/C </span>
                  </div>
                </div>
              )}
              {inforRoom.wifi && (
                <div className="col-6">
                  <div className="detail_feature-item">
                    <i className="fa-solid fa-wifi"></i>
                    <span>Wifi </span>
                  </div>
                </div>
              )}
              {inforRoom.bep && (
                <div className="col-6">
                  <div className="detail_feature-item">
                    <i className="fa-solid fa-fire-burner"></i>
                    <span>Kichen </span>
                  </div>
                </div>
              )}
              {inforRoom.doXe && (
                <div className="col-6">
                  <div className="detail_feature-item">
                    <i className="fa-solid fa-square-parking"></i>
                    <span>Parking </span>
                  </div>
                </div>
              )}
              {inforRoom.hoBoi && (
                <div className="col-6">
                  <div className="detail_feature-item">
                    <i className="fa-solid fa-person-swimming"></i>
                    <span>Pool </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="detail-room_header">
        <h2>{inforRoom?.tenPhong}</h2>
        <img className="img-fluid" src={inforRoom?.hinhAnh} alt="" />
        <div className="detail-room_content mt-5">
          <div className="row">
            <div className="col-7">
              {renderTitle()}
              {renderContentDetail()}
              {renderContentFeature()}
              <CalendarBook codeRoom={inforRoom.id} />
            </div>
            <div className="col-5">
              <BookForm inforRoom={inforRoom} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
