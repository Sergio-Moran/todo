import React, { useState } from "react";
import { Col, Row, Checkbox, Tooltip } from "antd";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";
import { updateCompleted } from "../api";

const Todo = ({ description, title, id, isOk }) => {
  const [change, setChange] = useState(isOk ? true : false);
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
          <ModalEdit id={id} /* description={description} title={title} */ />
        </Col>
        <Col span={4} className="!flex">
          <ModalDelete id={id} description={description} title={title} />
        </Col>
      </Row>
    </>
  );
};

export default Todo;
