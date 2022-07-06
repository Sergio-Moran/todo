import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Space, Tooltip } from "antd";
const { confirm } = Modal;
import { DeleteOutlined } from "@ant-design/icons";
import { deleteTask } from "../api";

const App = ({ title, id, actu }) => {
  const showConfirm = (title, id) => {
    confirm({
      title: "Eliminar",
      icon: <ExclamationCircleOutlined />,
      content: title,
  
      onOk() {
        console.log("OK");
        deleteTasks(id);
      },
  
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  
  const deleteTasks = async (id) => {
    actu(true);
    await deleteTask(id);
    actu(false);
  };
  return (
    <Space wrap>
      <Tooltip title={"Eliminar " + title}>
        <Button
          className="!w-full !border-none"
          onClick={() => showConfirm(title, id)}
          icon={<DeleteOutlined />}
        />
      </Tooltip>
    </Space>
  );
};

export default App;
