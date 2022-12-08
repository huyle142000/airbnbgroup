import React from "react";
import { useState } from "react";
import Map, { Popup } from "react-map-gl";
import { MAP_BOX_TOKEN } from "../../utils/setting";
import { roomAddress } from "../../utils/roomAddress";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGeolocationAPI } from "../../redux/actions/LocationRoomAction";
import MapMarker from "./MapMarker";

export default function MapContainer() {
    const arrRoomModified = [];
    const dispatch = useDispatch();
    const { roomFullList, arrGeolocationRoom } = useSelector(
        (state) => state.LocationRoomReducer
    );
    const [viewport, setViewport] = useState({
        initialViewState: {
            latitude: 10.86195853994233,
            longitude: 106.74362380706191,
            zoom: 10,
        },
    });

    useEffect(() => {
        roomFullList?.map((room) => {
            const { id } = room;
            //match address in default array
            let addrIndex = roomAddress.findIndex((room) => {
                return room.id === id;
            });
            if (addrIndex !== -1) {
                arrRoomModified.push({
                    ...room,
                    address: roomAddress[addrIndex].address,
                });
            }

            //match address by name
        });
        getLocationAPI();
    }, []);

    const getLocationAPI = () => {
        return arrRoomModified?.map((room) => {
            dispatch(getGeolocationAPI(room));
        });
    };

    const renderLocation = () => {
        return arrGeolocationRoom?.map((room) => {
            return <MapMarker key={room.id} room={room} />;
        });
    };

    return (
        <div className="map__container">
            <Map
                {...viewport}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                onViewportChange={(viewport) => setViewport(viewport)}
                mapboxAccessToken={MAP_BOX_TOKEN}
            >
                {renderLocation()}
            </Map>
        </div>
    );
}
