import "./App.css";
// import TaskHeader from "./components/TaskHeader";
// import User from "./components/User";
// import TaskList from "./components/props/TaskList";
import NoteList from "./components/state/NoteList";

function App() {
  return (
    <>
      {/* <TaskHeader name="omid" numOfTask={26} /> */}
      {/* <User user={{ firstName: "Omid", lastName: "Jabbari" }} /> */}
      {/* <TaskList
        tasks={[
          { id: 1, title: "Learn TypeScript", completed: true },
          { id: 2, title: "Build a React app", completed: true },
          { id: 3, title: "Write unit tests", completed: false },
        ]}
      /> */}
      <NoteList />
    </>
  );
}

export default App;
