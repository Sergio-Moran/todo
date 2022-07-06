import React from "react";
import { Button, Tooltip } from "antd";
import { CarryOutOutlined } from "@ant-design/icons";

const ButtonRemind = () => {
  return (
    <>
      <Tooltip title="Recordar">
        <Button
          className="!w-full !border-none right-1"
          icon={<CarryOutOutlined />}
        />
      </Tooltip>
    </>
  );
};

export default ButtonRemind;
