import React from "react";
import { Marker } from "react-map-gl";

export default function MapMarker(props) {
    console.log(props.room);
    const { id, giaTien, tenPhong, address, geolocation, moTa, hinhAnh } =
        props.room;
    const { latitude, longtitude } = geolocation;
    console.log(props.room);
    return (
        <Marker
            key={id}
            onClick={(e) => {
                e.originalEvent.stopPropagation();
                // togglePopup(true);
            }}
            latitude={latitude}
            longitude={longtitude}
            offsetLeft={-20}
            offsetTop={-30}
        >
            <div className="marker__price" onClick={() => {}}>
                <span>{`${giaTien}$`}</span>
            </div>
        </Marker>
    );
}
