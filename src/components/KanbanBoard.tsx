import { useState } from "react";
import "../App.css";
import Column from "../common/CommonColumn";

export interface Itask {
  id: string;
  taskinfo: string;
  stage: string;
}

export interface IStage {
  stageId: string;
  name: string;
}

const initialColumn: IStage[] = [
  { stageId: "planning", name: "Planning" },
  { stageId: "sprint", name: "Sprint" },
  { stageId: "done", name: "Done" },
];

const KanbanBoard = () => {
  const [tasks, setTask] = useState<Itask[]>([]);
  const [stages, setStages] = useState<IStage[]>(initialColumn);

  const addTask = (value: string, stage: string) => {
    const newTasklist = tasks;
    setTask([
      ...newTasklist,
      {
        id: `${value.slice(0, 3)}-T${Date.now()}`,
        stage: stage,
        taskinfo: value,
      },
    ]);
  };

  const moveTask = (id: string, newStage: string) => {
    const getTask = tasks.find((i) => i.id === id);
    if (getTask) getTask.stage = newStage;
    const updatedTasks = tasks.filter((i) => i.id !== id);
    if (getTask) updatedTasks.push(getTask);
    setTask([...updatedTasks]);
  };

  return (
    <div className="container">
      {stages &&
        stages.map((stage: IStage) => (
          <Column
            key={stage.stageId}
            tasks={tasks}
            title={stage.name}
            stageId={stage.stageId}
            addTask={addTask}
            moveTask={moveTask}
          />
        ))}
    </div>
  );
};

export default KanbanBoard;
