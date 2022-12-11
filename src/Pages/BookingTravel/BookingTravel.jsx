import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInfoRoomAPI } from "../../redux/actions/LocationRoomAction";

import Details from "./Details/Details";
import FooterDetail from "./FooterDetail/FooterDetail";

export default function BookingTravel() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getInfoRoomAPI(1));
  }, []);
  const { inforRoom } = useSelector((state) => state.LocationRoomReducer);
  return (
    <div className="container-lg">
      <Details inforRoom={inforRoom} />
      <FooterDetail inforRoom={inforRoom} />
    </div>
  );
}
