import React from 'react'
import { Col, Row } from 'antd';
import CardComponent from '../CardComponent/CardComponent';

const my_container = {
    width: "90%",
    margin: "auto"
}
let arr = []

export default function BodyComponent(props) {
    let renderListCard = () => {
        return arr.map((card) => {
            return(
                <div className="row">
                    <div className={`col-${props.size === 4 ? "3" : "6"}`}>

                    </div>
                </div>
            )
        })
    }


  return (
    <div style={my_container}>
        <div className={`body_grid ${props.size === 4 ? "body_grid_template1" : "body_grid_template2"}`}>
            <Col>
                <CardComponent/>
            </Col>    
        </div>
    </div>
  )
}
