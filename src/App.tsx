import "./App.css";
// import Account from "./components/state/Account";
// import NoteList from "./components/state/NoteList";
import Counter from "./components/state/Counter";
// import TaskHeader from "./components/TaskHeader";
// import User from "./components/User";
// import TaskList from "./components/props/TaskList";

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
      {/* <Account containerStyles="p-6 bg-gray-200 shadow rounded-md max-w-md mx-auto mb-10" />
      <NoteList /> */}

      <Counter />
    </>
  );
}

export default App;
