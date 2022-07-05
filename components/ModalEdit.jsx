import { Button, Modal, DatePicker, Space } from "antd";
import { useEffect, useState } from "react";
import { Input } from "antd";
import { FormOutlined } from "@ant-design/icons";
import { getTask } from "../api";

const App = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const getTaskEdit = async () => {
      const contents = await getTask(id);
      setTask({
        title: contents.task.title,
        description: contents.task.description,
      });
    };
    getTaskEdit();
  }, [id, setTask]);

  const showModal = () => {
    setVisible(true);
    console.log(task);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
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
        <Input placeholder={task.title} className="!rounded-lg !m-1" />
        <Input placeholder={task.description} className="!rounded-lg !m-1" />
        <Space direction="horizontal">
          <DatePicker className="!rounded-lg !m-1 !left-40" onChange={onChange} />
        </Space>
      </Modal>
    </>
  );
};

export default App;
