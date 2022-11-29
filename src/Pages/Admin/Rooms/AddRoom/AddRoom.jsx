import { Form, Input } from "antd";
import React from "react";
import { useAddRoom } from "./useAddRoom";

export default function AddRoom() {
  const { formik, imgSrc, handleChangeFile, inforRoom } = useAddRoom();

  const { handleSubmit, handleChange, values } = formik;
  return (
    <>
      <div>
        <h2
          className="pb-3 text-center"
          style={{ borderBottom: "2px solid #000" }}
        >
          Thêm Phòng
        </h2>
      </div>
      <Form
        className="mt-4"
        onSubmitCapture={handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <Form.Item label="Mã ID">
          <Input name="id" onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Tên Phòng">
          <Input name="tenPhong" onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Mã vị trí">
          <Input name="maViTri" />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input name="moTa" onChange={handleChange} />
        </Form.Item>

        <Form.Item label="Sức chứa khách">
          <Input name="khach" onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Giá tiền">
          <Input name="giaTien" onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Phòng ngủ">
          <Input name="phongNgu" onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Phòng tắm">
          <Input name="phongTam" onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Số lượng giường">
          <Input name="giuong" onChange={handleChange} />
        </Form.Item>
        <Form.Item label="Máy giặt">
          <select
            defaultValue={false}
            name="mayGiat"
            onChange={handleChange}
            id=""
          >
            <option value={true}>Có</option>
            <option value={false}>Không</option>
          </select>
        </Form.Item>
        <Form.Item label="Bàn Là">
          <select
            defaultValue={false}
            name="banLa"
            onChange={handleChange}
            id=""
          >
            <option value={true}>Có</option>
            <option value={false}>Không</option>
          </select>
        </Form.Item>
        <Form.Item label="Tivi">
          <select
            defaultValue={false}
            name="tivi"
            onChange={handleChange}
            id=""
          >
            <option value={true}>Có</option>
            <option value={false}>Không</option>
          </select>
        </Form.Item>
        <Form.Item label="Điều hòa">
          <select
            defaultValue={false}
            name="dieuHoa"
            onChange={handleChange}
            id=""
          >
            <option value={true}>Có</option>
            <option value={false}>Không</option>
          </select>
        </Form.Item>
        <Form.Item label="Wifi">
          <select
            defaultValue={false}
            name="wifi"
            onChange={handleChange}
            id=""
          >
            <option value={true}>Có</option>
            <option value={false}>Không</option>
          </select>
        </Form.Item>
        <Form.Item label="Bãi đỗ">
          <select
            defaultValue={false}
            name="doXe"
            onChange={handleChange}
            id=""
          >
            <option value={true}>Có</option>
            <option value={false}>Không</option>
          </select>
        </Form.Item>
        <Form.Item label="Bếp">
          <select defaultValue={false} name="bep" onChange={handleChange} id="">
            <option value={true}>Có</option>
            <option value={false}>Không</option>
          </select>
        </Form.Item>

        <Form.Item label="Hồ Bơi">
          <select
            defaultValue={false}
            name="hoBoi"
            onChange={handleChange}
            id=""
          >
            <option value={true}>Có</option>
            <option value={false}>Không</option>
          </select>
        </Form.Item>
        <Form.Item label="Bàn ủi">
          <select
            defaultValue={false}
            name="banUi"
            onChange={handleChange}
            id=""
          >
            <option value={true}>Có</option>
            <option value={false}>Không</option>
          </select>
        </Form.Item>

        <Form.Item label={<h6 className="font-weight-bold m-0">Hình ảnh</h6>}>
          <Input type="file" onChange={handleChangeFile} name="hinhAnh" />
        </Form.Item>
        <Form.Item
          label={<h6 className="font-weight-bold m-0">Hình ảnh mô tả:</h6>}
        >
          <img
            src={imgSrc === "" ? inforRoom.hinhAnh : imgSrc}
            style={{ width: "200px", height: "200px" }}
            alt=""
          />
        </Form.Item>
        <Form.Item label={<h6 className="font-weight-bold m-0">Tác vụ</h6>}>
          <button type="submit" className="btn btn-success">
            Cập Nhật Phòng
          </button>
        </Form.Item>
      </Form>
    </>
  );
}
