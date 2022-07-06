import React, { useState } from "react";
import { Col, Row, Checkbox, Tooltip, Alert } from "antd";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";
import { updateCompleted } from "../api";
import ButtonRemind from "./ButtonRemind";

const Todo = ({ title, id, isCheck, actu, isReminding, date }) => {
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
          span={13}
          className={change ? "text-center line-through" : "text-center"}
        >
          {title}
        </Col>
        <Col span={3} className="!flex">
          <ButtonRemind id={id} isReminding={isReminding} />
        </Col>
        <Col span={3} className="!flex ">
          <ModalEdit id={id} actu={actu} />
        </Col>
        <Col span={3} className="!flex">
          <ModalDelete id={id} title={title} actu={actu} />
        </Col>
      </Row>
      <Alert
        message={isReminding ? "Importante " + date.split("T")[0] : ""}
        className={isReminding ? "" : "!hidden"}
        type={isReminding ? "info" : "info"}
        showIcon
        closable
      />
    </>
  );
};

export default Todo;
