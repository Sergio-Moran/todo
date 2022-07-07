import React, { useState } from "react";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { saveTask } from "../api";

const Add = ({ actu }) => {
  const [newTask, setNewTask] = useState({
    title: "",
    userId: "00168443-ecd1-4f5e-9421-8b33f5b5f99d",
  });

  const handleChange = (name, value) => {
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const createTask = async () => {
    if (newTask.title) {
      actu(true);
      await saveTask(newTask);
      actu(false);
    } else {
      console.log("no viene");
    }
  };

  return (
    <div className="flex items-center justify-end">
      <Input
        placeholder="Agregar Tarea"
        className="!rounded-lg !m-1"
        id={"title"}
        allowClear
        onChange={(e) => handleChange(e.target.id, e.target.value)}
      />
      <Button
        className="!border-none"
        onClick={createTask}
        icon={<PlusCircleOutlined />}
      />
    </div>
  );
};

export default Add;
