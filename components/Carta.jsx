import { useState, useEffect } from "react";
import { Card } from "antd";
import Add from "./Add";
import Todo from "./Todo";

const App = () => {
  const [show, setShow] = useState([]);
  useEffect(() => {
    const getTask = async () => {
      const response = await fetch("http://localhost:3015/tasks");
      const data = await response.json();
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
            <Todo key={render.id} id={render.id} description={render.description} title={render.title} />
          );
        })}
        <Add renders={renders} />
      </Card>
    </div>
  );
};

export default App;
