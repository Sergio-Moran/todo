import { useState, useEffect, useCallback, useRef } from "react";
import { Card, Alert } from "antd";
import Add from "./Add";
import Todo from "./Todo";
import { getTasks } from "../api";

const App = () => {
  const [show, setShow] = useState([]);
  const [isActu, setIsActu] = useState("");
  const [text, setText] = useState({
    message: "",
    type: "",
    isTF: false,
  });

  const actu = (actu) => {
    if (actu) {
      setIsActu(false);
      console.log('1');
    } else {
      setIsActu(true);
      console.log('2');
    }
  };

  const getTask = useCallback(async () => {
    const data = await getTasks();
    setShow(data.tasks);
    console.log("render");
  }, []);

  useEffect(() => {
    getTask();
  }, [isActu, getTask]);

  return (
    <div
      className="w-full flex h-screen items-center justify-center"
      style={{
        background: "rgb(34,193,195)",
        background:
          "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
      }}
    >
      <Card
        hoverable
        className="w-96 !rounded-lg !border-gray-300 !drop-shadow-2xl"
      >
        {show.map((render) => {
          return (
            <Todo
              key={render.id}
              id={render.id}
              title={render.title}
              isCheck={render.isCompleted}
              isReminding={render.isRemind}
              actu={actu}
              date={render.remindAt}
            />
          );
        })}
        <Add actu={actu} />
      </Card>
    </div>
  );
};

export default App;
