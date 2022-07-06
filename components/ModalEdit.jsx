import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import { Input } from "antd";
import { FormOutlined } from "@ant-design/icons";
import { getTask, updateCompleted } from "../api";

const App = ({ id, actu }) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [task, setTask] = useState({
    title: "",
    description: "",
    remindAt: "",
  });

  useEffect(() => {
    const getTaskEdit = async () => {
      const contents = await getTask(id);
      setTask({
        title: contents.task.title,
        description: contents.task.description,
        remindAt: contents.task.remindAt,
      });
    };
    getTaskEdit();
  }, [id, setTask]);

  const showModal = () => {
    setVisible(true);
    console.log(task);
  };

  const isCompleted = async () => {
    await updateCompleted(id, { ...task });
  };

  const handleOk = async () => {
    setLoading(true);
    actu(true)
    setTimeout(() => {
      actu(false)
      setLoading(false);
      setVisible(false);
    }, 3000);

    isCompleted();
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handlChange = (name, value) => {
    setTask({
      ...task,
      [name]: value,
    });
  };

  return (
    <>
      <Button
        className="!w-full !border-none right-1"
        onClick={showModal}
        icon={<FormOutlined />}
      />
      <Modal
        visible={visible}
        title="Editar Tarea"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancelar
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Editar
          </Button>,
        ]}
      >
        <Input
          placeholder={task.title}
          id={"title"}
          onChange={(e) => handlChange(e.target.id, e.target.value)}
          className="!rounded-lg !m-1"
        />
        <Input
          placeholder={task.description}
          id={"description"}
          onChange={(e) => handlChange(e.target.id, e.target.value)}
          className="!rounded-lg !m-1"
        />
        <Input
          type="date"
          id={"remindAt"}
          value={task.remindAt ? task.remindAt.split("T")[0] : ""}
          onChange={(e) =>
            handlChange(e.target.id, e.target.value.split("T")[0])
          }
          className="!rounded-lg !m-1 !flex"
        />
      </Modal>
    </>
  );
};

export default App;
