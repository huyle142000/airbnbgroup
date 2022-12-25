import { Col, Row } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BodyComponent from "../../components/BodyComponent/BodyComponent";
import Header from "../../components/Header/Header";
import MapContainer from "../../components/MapConponent/MapContainer";

export default function SearchRoom() {
    const { filter } = useParams();
    const [filterData, setFilterData] = useState({
        region: "",
        checkin: "",
        checkout: "",
        guestNum: "",
    });
    useEffect(() => {
        getFilterData();
    }, [filter]);
    let getFilterData = () => {
        let regionIndex = filter.search("region=");
        let indexFilter = filter.search("&");
        //get region
        let region = filter.substring(regionIndex + 7, indexFilter);
        let filterAnother = filter.substring(indexFilter + 1, filter.length);

        //get checkin
        let checkinIndex = filterAnother.search("checkin=");
        indexFilter = filterAnother.search("&");
        let checkin = filterAnother.substring(checkinIndex + 8, indexFilter);
        filterAnother = filterAnother.substring(
            indexFilter + 1,
            filterAnother.length
        );

        //get checkout
        let checkoutIndex = filterAnother.search("checkout=");
        indexFilter = filterAnother.search("&");
        let checkout = filterAnother.substring(checkoutIndex + 9, indexFilter);
        filterAnother = filterAnother.substring(
            indexFilter + 1,
            filterAnother.length
        );

        //get guest number
        let guestIndex = filterAnother.search("guest=");
        indexFilter = filterAnother.search("&");
        let guestNum = filterAnother.substring(
            guestIndex + 6,
            filterAnother.length
        );
        setFilterData({
            region: region,
            checkin: checkin,
            checkout: checkout,
            guestNum: guestNum,
        });
    };
    return (
        <>
            <Header />
            <Row>
                <Col>
                    <BodyComponent dataFilter={filterData} size={2} />
                </Col>
                <Col>
                   
                </Col>
            </Row>
        </>
    );
}
