import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Space, Tooltip } from "antd";
const { confirm } = Modal;
import { DeleteOutlined } from "@ant-design/icons";

const showConfirm = (title) => {
  confirm({
    title: "Eliminar",
    icon: <ExclamationCircleOutlined />,
    content: title,

    onOk() {
      console.log("OK");
    },

    onCancel() {
      console.log("Cancel");
    },
  });
};

const App = ({ title }) => {
  return (
    <Space wrap>
      <Tooltip title={"Eliminar " + title}>
        <Button
          className="!w-full !border-none"
          onClick={() => showConfirm(title)}
          icon={<DeleteOutlined />}
        />
      </Tooltip>
    </Space>
  );
};

export default App;
