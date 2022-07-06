import React, { useState } from "react";
import { Button, Tooltip } from "antd";
import { CarryOutOutlined } from "@ant-design/icons";
import { updateCompleted } from "../api";

const ButtonRemind = ({ id, isReminding }) => {
  const [remindedStatus, setRemindedStatus] = useState(
    isReminding ? true : false
  );
  const [reminding, setReminding] = useState({ isRemind: false });

  const isCompleted = async () => {
    await updateCompleted(id, { ...reminding });
  };

  const onClick = () => {
    setRemindedStatus(remindedStatus ? false : true);
    setReminding({ isRemind: remindedStatus });
    isCompleted();
  };

  return (
    <>
      <Tooltip title="Recordar">
        <Button
          className="!w-full !border-none right-1"
          onClick={onClick}
          icon={
            <CarryOutOutlined
              rotate={remindedStatus ? 12 : 0}
              style={{ color: remindedStatus ? "green" : "" }}
            />
          }
        />
      </Tooltip>
    </>
  );
};

export default ButtonRemind;
