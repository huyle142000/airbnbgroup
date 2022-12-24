import { Col, Row } from "antd";
import React from "react";
import BodyComponent from "../../components/BodyComponent/BodyComponent";
import Header from "../../components/Header/Header";
import MapContainer from "../../components/MapConponent/MapContainer";

export default function SearchRoom() {
    return (
        <>
            <Header />
            <Row>
                <Col>
                    <BodyComponent size={2} />
                </Col>
                <Col>
                    <MapContainer />
                </Col>
            </Row>
        </>
    );
}
