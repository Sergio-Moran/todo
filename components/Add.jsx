import React, { useState } from "react";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Input } from "antd";

const Add = ({ renders }) => {
  const initialValues = {
    id: "",
    task: "",
  };

  const [task, setTask] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTask({ ...task, [name]: value });
  };

  const add = () => {
    renders(task);
  };
  return (
    <div className="flex items-center justify-end">
      <Input name="id" hidden />
      <Input
        placeholder="Agregar Tarea"
        className="!rounded-lg !m-1"
        name="task"
        onChange={handleChange}
      />
      <Button
        className="!border-none"
        onClick={add}
        icon={<PlusCircleOutlined style={{color:'green'}} />}
      />
    </div>
  );
};

export default Add;
