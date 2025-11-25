import "./App.css";
import { Private } from "./components/componentProps/Private";
import { Profile } from "./components/componentProps/Profile";
import List from "./components/generics/List";
import Counter from "./components/state/Counter";
import DarkModeProvider from "./context/DarkModeContext";
import UserContextProvider from "./context/UserContext";
import MainHeader from "./ui/MainHeader";

function App() {
  return (
    <>
      <DarkModeProvider>
        <UserContextProvider>
          <MainHeader />
          <main className="main-content">
            <Counter />
            <List
              items={[{ id: 2, name: "OMID" }]}
              onClick={(item) => console.log(item)}
            />

            <Private isLoggedIn={true} Component={Profile} />
          </main>
        </UserContextProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
