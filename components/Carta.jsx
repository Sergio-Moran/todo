import { useState, useEffect, useCallback } from "react";
import { Card } from "antd";
import Add from "./Add";
import Todo from "./Todo";
import { getTasks } from "../api";
import { data } from "autoprefixer";

const App = () => {
  const [show, setShow] = useState([]);
  const [isActu, setIsActu] = useState("");

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
    console.log("render");
  }, []);

  const compareDates = () => {
    let today = new Date(); /* .toISOString().split("T")[0] */
    show.map((dates) => {
      if (dates.remindAt) {
        let date = new Date(dates.remindAt); 
        if (today == date.setDate(date.getDate() - 7)) {
          console.log('Falta una semana');
        } else if (today == date.setDate(date.getDate() - 3)) {
          console.log("Faltan 3 dias");
        } else if (today == date) {
          console.log("Se entrega hoy");
        } else if(today > date){
          console.log("Tarea incompleta");
        }
      }
    });
  };

  useEffect(() => {
    getTask();
  }, [isActu, getTask]);

  const renders = () => {
    /* const aux = [...data, task];
    setShow(aux); */
  };
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
            />
          );
        })}
        <Add renders={compareDates} />
      </Card>
    </div>
  );
};

export default App;
