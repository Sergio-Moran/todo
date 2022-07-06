import { useState, useEffect, useCallback } from "react";
import { Card } from "antd";
import Add from "./Add";
import Todo from "./Todo";
import { getTasks } from "../api";

const App = () => {
  const [show, setShow] = useState([]);
  const [isActu, setIsActu] = useState('');

  const actu = (actu) => {
    if (actu) {
      setIsActu(false);
    } else {
      setIsActu(true);
    }
  };

  const getTask = useCallback(async () => {
    const data = await getTasks();
    setShow(data.tasks);
    console.log('render');
  }, []);

  useEffect(() => {
    getTask();
  }, [isActu, getTask]);

  const renders = () => {
    /* const aux = [...data, task];
    setShow(aux); */
  };
  return (
    <div className="w-full flex h-screen items-center justify-center">
      <Card hoverable className="w-96 !rounded-lg !border-gray-300">
        {show.map((render) => {
          return (
            <Todo
              key={render.id}
              id={render.id}
              title={render.title}
              isCheck={render.isCompleted}
              actu={actu}
            />
          );
        })}
        <Add renders={renders} />
      </Card>
    </div>
  );
};

export default App;
