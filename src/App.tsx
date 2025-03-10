import "./App.css";
import RecursiveComponent from "./common/RecursiveComponent";
import KanbanBoard from "./components/KanbanBoard";
import { nestedData } from "./constants/RecursiveData";

function App() {
  return (
    <>
      <KanbanBoard />
      {/* <RecursiveComponent data={nestedData} /> */}
    </>
  );
}

export default App;
