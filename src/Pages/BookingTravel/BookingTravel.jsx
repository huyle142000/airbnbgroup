import React from "react";
import Details from "./Details/Details";
import FooterDetail from "./FooterDetail/FooterDetail";
import Photos from "./Photos/Photos";

export default function BookingTravel() {
  return (
    <div className="container">
      <Photos />
      <Details />
      <FooterDetail />
    </div>
  );
}
