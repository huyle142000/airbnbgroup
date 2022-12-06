import React, { useEffect, useState } from 'react'
import { Col, Row } from 'antd';
import CardComponent from '../CardComponent/CardComponent';
import { useDispatch, useSelector } from 'react-redux';
import { getListFullRoomAPI } from '../../redux/actions/LocationRoomAction';
import { roomImage } from '../../utils/roomImage';

export default function BodyComponent(props) {
    const dispatch = useDispatch();
    const {roomFullList} = useSelector((state) => state.LocationRoomReducer);
    useEffect(() => { 
        dispatch(getListFullRoomAPI())
    },[]);

    let renderListCard = () => {
        return roomFullList?.map((card,index) => {
            let imgSrc = "";
            if (index >= roomImage.length) {
                imgSrc = roomImage[index % roomImage.length];
            }else {
                imgSrc = roomImage[index]
            }

            return(
                <Col key={index}>
                    <CardComponent img={imgSrc} card={card} />
                </Col> 
            )
           
        })
    }

  return (
    <div className='my_container'>
        <div className={`body_grid ${props.size === 4 ? "body_grid_template1" : "body_grid_template2"}`}>
               {renderListCard()}
        </div>
    </div>
  )
}
