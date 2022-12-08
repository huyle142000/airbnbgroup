import React from "react";
import { NavLink } from "react-router-dom";

export default function CardComponent(props) {
    const { giaTien, tenPhong, phongNgu, khach, giuong, id, img } = props.card;
    let ramdomStar = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    let star = ramdomStar(3, 5);
    return (
        <NavLink
            className={`card_item ${
                props.isActiveMap === undefined ? "" : "card__map"
            }`}
            to={`roomdetail/${id}`}
            target="_blank"
        >
            <div className="card_img">
                <img alt="anh" src={img} />
                <div className="card_img_icon">
                    <i className="fa-regular fa-heart"></i>
                </div>
            </div>
            <div className="card_content">
                <div className="card_name">
                    <div className="card_name_text">{tenPhong}</div>
                    <div className="card_name_icon">
                        <span>
                            <i className="fa-solid fa-star"></i>
                        </span>
                        <span className="icon_star">{star}</span>
                    </div>
                </div>
                {props.isActiveMap === undefined && (
                    <>
                        <div className="card_des">
                            Phòng ngủ: {phongNgu} - Giường: {giuong}
                        </div>
                        <div className="card_time">Số khách: {khach}</div>
                    </>
                )}
                <div className="card_price">
                    <strong>${giaTien}</strong> /1đêm
                </div>
            </div>
        </NavLink>
    );
}
