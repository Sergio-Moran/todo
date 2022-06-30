import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Space, Tooltip } from "antd";
const { confirm } = Modal;
import { DeleteOutlined } from "@ant-design/icons";

const showConfirm = (description) => {
  confirm({
    title: "Eliminar",
    icon: <ExclamationCircleOutlined />,
    content: description,

    onOk() {
      console.log("OK");
    },

    onCancel() {
      console.log("Cancel");
    },
  });
};

const App = ({ description }) => {
  return (
    <Space wrap>
      <Tooltip title={"Eliminar "+description}>
        <Button
          className="!w-full !border-none"
          onClick={()=>showConfirm(description)}
          icon={<DeleteOutlined />}
        />
      </Tooltip>
    </Space>
  );
};

export default App;
