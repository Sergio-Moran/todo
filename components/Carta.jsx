import { useState, useEffect } from "react";
import { Card } from "antd";
import Add from "./Add";
import Todo from "./Todo";
import { getTasks } from "../api";

const App = () => {
  const [show, setShow] = useState([]);
  useEffect(() => {
    const getTask = async () => {
      const data = await getTasks();
      setShow(data.tasks);
    };
    getTask();
  }, []);

  const renders = (task) => {
    const aux = [...data, task];
    setShow(aux);
  };
  return (
    <div className="w-full flex h-screen items-center justify-center">
      <Card hoverable className="w-96 !rounded-lg !border-gray-300">
        {show.map((render) => {
          return (
            <Todo key={render.id} id={render.id} title={render.title} isCheck={render.isCompleted}/>
          );
        })}
        <Add renders={renders} />
      </Card>
    </div>
  );
};

export default App;
