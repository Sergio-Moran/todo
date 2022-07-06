import React, { useState } from "react";
import { Col, Row, Checkbox, Tooltip, DatePicker, Space } from "antd";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";
import { updateCompleted } from "../api";

const Todo = ({ title, id, isCheck, actu }) => {
  const [change, setChange] = useState(isCheck ? true : false);
  const [completed, setCompleted] = useState({ isCompleted: false });

  const onChange = (e) => {
    setChange(e.target.checked);
    setCompleted({
      isCompleted: change,
    });
    isCompleted();
  };

  const isCompleted = async () => {
    await updateCompleted(id, { ...completed });
  };
  
  return (
    <>
      <Row className="my-1 mr-1">
        <Col span={2} className="">
          <Tooltip title="Completado">
            {" "}
            <Checkbox onChange={onChange} checked={change} className="" />
          </Tooltip>
        </Col>
        <Col
          span={14}
          className={change ? "text-center line-through" : "text-center"}
        >
          {title}
        </Col>
        <Col span={4} className="!flex ">
          <ModalEdit id={id} actu={actu}/* description={description} title={title} */ />
        </Col>
        <Col span={4} className="!flex">
          <ModalDelete id={id} title={title} />
        </Col>
      </Row>
    </>
  );
};

export default Todo;
