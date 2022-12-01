import React from 'react'
import { Col, Row } from 'antd';
import CardComponent from '../CardComponent/CardComponent';
import "../../../assets/sass/Components/_card.scss"
const my_container = {
    width: "90%",
    margin: "auto"
}
export default function BodyComponent() {
  return (
    <div style={my_container}>
        <div className='body_grid'>
            <Col>
                <CardComponent/>
            </Col>
            <Col>
                <CardComponent/>
            </Col>  
            <Col>
                <CardComponent/>
            </Col>
            <Col>
                <CardComponent/>
            </Col> 
            <Col>
                <CardComponent/>
            </Col>
            <Col>
                <CardComponent/>
            </Col> 
            <Col>
                <CardComponent/>
            </Col>
            <Col>
                <CardComponent/>
            </Col> 
            <Col>
                <CardComponent/>
            </Col>
            <Col>
                <CardComponent/>
            </Col>      
        </div>
    </div>
  )
}
