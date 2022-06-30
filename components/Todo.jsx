import React, { useState } from "react";
import { Col, Row, Checkbox, Tooltip } from "antd";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";

const Todo = ({ description }) => {
  const [cambio, setCambio] = useState(false);
  const onChange = (e) => {
    setCambio(e.target.checked);
  };
  return (
    <>
      <Row className="my-1 mr-1">
        <Col span={2} className="">
          <Tooltip title="Completado">
            {" "}
            <Checkbox onChange={onChange} className="" />
          </Tooltip>
        </Col>
        <Col
          span={14}
          className={cambio ? "text-center line-through" : "text-center"}
        >
          {description}
        </Col>
        <Col span={4} className="!flex ">
          <ModalEdit description={description} />
        </Col>
        <Col span={4} className="!flex">
          <ModalDelete description={description} />
        </Col>
      </Row>
    </>
  );
};

export default Todo;
