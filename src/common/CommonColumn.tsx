import React, { useEffect, useState } from "react";
import { Itask } from "../components/KanbanBoard";
import Card from "./Card";

interface IColumn {
  tasks: Itask[];
  title: string;
  stageId: string;
  addTask: (val: string, stage: string) => void;
  moveTask: (id: string, stage: string) => void;
}

const Column: React.FC<IColumn> = ({
  tasks,
  title,
  addTask,
  stageId,
  moveTask,
}) => {
  const [taskName, setTaskName] = useState<string>("");
  const [stageTasks, setStageTasks] = useState<Itask[]>([]);
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(e.target.value);
  };

  const btnClick = () => {
    if (taskName) {
      addTask(taskName, stageId);
      setTaskName("");
    } else {
      alert("mention task");
    }
  };

  const nextHandler = (id: string) => {
    const getTask = stageTasks.filter((i) => i.id === id);
    if (stageId === "planning") {
      moveTask(getTask[0].id, "sprint");
    } else if (stageId === "sprint") {
      moveTask(getTask[0].id, "done");
    } else {
      console.log("not a valid action");
    }
  };

  const prevHandler = (id: string) => {
    const getTask = stageTasks.filter((i) => i.id === id);
    if (stageId === "done") {
      moveTask(getTask[0].id, "sprint");
    } else if (stageId === "sprint") {
      moveTask(getTask[0].id, "planning");
    } else {
      console.log("not a valid action");
    }
  };

  useEffect(() => {
    if (tasks) {
      setStageTasks(
        tasks.filter((i) => i.stage.toUpperCase() === stageId.toUpperCase())
      );
    }
  }, [stageId, tasks]);

  return (
    <div className="colStyle">
      <span>{title}</span>
      <div
        style={{
          padding: "20px",
          borderBottom: "1px solid black",
          display: "flex",
          justifyContent: "space-between",
          gap: "10%",
        }}
      >
        <input name="taskInput" onChange={inputHandler} value={taskName} />
        <button
          style={{
            paddingLeft: "10px",
            paddingRight: "10px",
            border: "1px solid red",
            marginRight: "10px",
          }}
          onClick={btnClick}
        >
          Add
        </button>
      </div>
      {stageTasks &&
        stageTasks.map((taskItem: Itask) => {
          return (
            <Card
              key={taskItem.id}
              taskInfo={taskItem.taskinfo}
              nextAction={
                taskItem.stage !== "done"
                  ? () => nextHandler(taskItem.id)
                  : undefined
              }
              prevAction={
                taskItem.stage !== "planning"
                  ? () => prevHandler(taskItem.id)
                  : undefined
              }
            />
          );
        })}
    </div>
  );
};

export default Column;
