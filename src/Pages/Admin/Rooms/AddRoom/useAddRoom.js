import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  editRoomAPI,
  getInfoRoomAPI,
  uploadRoomAPI,
} from "../../../../redux/actions/LocationRoomAction";

export const useAddRoom = () => {
  const dispatch = useDispatch();
  const { inforRoom } = useSelector((state) => state.LocationRoomReducer);
  let [imgSrc, setImgSrc] = useState("");
  //   formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: "",
      tenPhong: "",
      khach: "",
      phongNgu: "",
      giuong: "",
      phongTam: "",
      moTa: "",
      giaTien: "",
      mayGiat: false,
      banLa: false,
      tivi: false,
      dieuHoa: false,
      wifi: false,
      bep: false,
      doXe: false,
      hoBoi: false,
      banUi: false,
      maViTri: "",
      hinhAnh: null,
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
    //   let formData = new FormData();
    //   for (let key in values) {
    //     if (key !== "hinhAnh") {
    //       formData.append(key, values[key]);
    //     } else {
    //       formData.append("File", values.hinhAnh, values.hinhAnh.name);
    //     }
    //   }
      dispatch(uploadRoomAPI(values.id, values));
    },
  });

  // handleInput
  const { setFieldValue } = formik;
  const handleChangeSetFieldValue = (name) => {
    return (value) => {
      setFieldValue(name, value);
    };
  };
  const handleChangeFile = async (e) => {
    let file = e.target.files[0];
    const typeFile = ["image/jpeg", "image/jpg", "image/gif", "image/png"];
    if (typeFile.includes(file.type)) {
      // lưu file vào formik
      await setFieldValue("hinhAnh", file);
      // tạo đối tượng để đọc file
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
      return;
    }
    alert("File chọn không phải kiểu hình ảnh");
  };

  return {
    formik,
    imgSrc,
    handleChangeSetFieldValue,
    handleChangeFile,
    inforRoom,
  };
};
