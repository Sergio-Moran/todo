import { Button, Modal } from "antd";
import { useState } from "react";
import { Input } from "antd";
import { FormOutlined } from "@ant-design/icons";

const App = ({ description, id, title }) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
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
        <Input placeholder={title} className="!rounded-lg !m-1" />
        <Input placeholder={description} className="!rounded-lg !m-1" />
      </Modal>
    </>
  );
};

export default App;
