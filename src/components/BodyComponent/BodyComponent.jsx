import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import CardComponent from "../CardComponent/CardComponent";
import { useDispatch, useSelector } from "react-redux";
import { getListFullRoomAPI } from "../../redux/actions/LocationRoomAction";
import { roomImage } from "../../utils/roomImage";
import MapContainer from "../MapConponent/MapContainer";

export default function BodyComponent(props) {
    const dispatch = useDispatch();
    const [activeMap, setActiveMap] = useState(false);
    const { roomFullList } = useSelector((state) => state.LocationRoomReducer);
    const { dataFilter } = props;
    useEffect(() => {
        dispatch(getListFullRoomAPI());
    }, []);
    console.log("dataFilter", dataFilter);

    let renderListCard = () => {
        if (dataFilter === null) {
            return roomFullList?.map((card, index) => {
                return (
                    <Col
                        key={`${props.size === 4 ? index : "filter-" + index}`}
                    >
                        <CardComponent card={card} />
                    </Col>
                );
            });
        } else {
            return roomFullList?.map((card, index) => {
                return (
                    <Col
                        key={`${props.size === 4 ? index : "filter-" + index}`}
                    >
                        <CardComponent card={card} />
                    </Col>
                );
            });
        }
    };

    let renderBodyCpn = () => {
        if (dataFilter === null) {
            return (
                <>
                    {!activeMap && (
                        <div className="my_container container">
                            <div
                                className={`body_grid ${
                                    props.size === 4
                                        ? "body_grid_template1"
                                        : "body_grid_template2"
                                }`}
                            >
                                {renderListCard()}
                            </div>
                        </div>
                    )}
                    {activeMap && <MapContainer arrRoom={roomFullList} />}
                    <div
                        className="show__map"
                        onClick={() => {
                            setActiveMap(!activeMap);
                        }}
                    >
                        <div className="btn--show">
                            {activeMap ? "Show list" : "Show map"}
                            <i className="fa-solid fa-map"></i>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="my_container container">
                        <div
                            className={`body_grid ${
                                props.size === 4
                                    ? "body_grid_template1"
                                    : "body_grid_template2"
                            }`}
                        >
                            {renderListCard()}
                        </div>
                    </div>
                </>
            );
        }
    };

    return <>{renderBodyCpn()}</>;
}
