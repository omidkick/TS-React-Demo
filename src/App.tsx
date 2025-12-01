import "./App.css";
import ShapeSelector from "./components/challenge--1/ShapeSelector";
import Accordion from "./components/challenge--2/Accordion";
import Panel from "./components/challenge--3/Panel";
import CategorySelector from "./components/challenge--4/CategorySelector";
import { Private } from "./components/componentProps/Private";
import { Profile } from "./components/componentProps/Profile";
import List from "./components/generics/List";
import ExampleTable from "./components/HTMLprops/ExampleTable";
import WrappingHTMLElements from "./components/HTMLprops/WrappingHTMLElements";
import Counter from "./components/state/Counter";
import UserCard from "./components/utilityType/UserCard";
import DarkModeProvider from "./context/DarkModeContext";
import UserContextProvider from "./context/UserContext";
import Button from "./ui/Button";
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
            <WrappingHTMLElements />
            <ExampleTable />
            <ShapeSelector />

            <Accordion expanded />

            {/* <Panel/> */}
            <Panel collapsable defaultCollapsed />

            <UserCard
              mode="preview"
              user={{ avatarUrl: "/images/avatar.PNG", name: "Omid" }}
            />

            <UserCard
              mode="full"
              user={{
                name: "Omid",
                email: "omid@gmail.com",
                role: "admin",
                avatarUrl: "/images/avatar.PNG",
                // id: 1,
                age: 30,
              }}
            />

            <CategorySelector />
            
            <div className="my-10 flex items-center justify-center gap-10">
              <Button variant="primary" onClick={() => alert("Primary!")}>
                Click Me
              </Button>

              <Button variant="secondary" onClick={() => alert("Secondary!")}>
                Secondary
              </Button>

              <Button variant="link" href="http://localhost:5173/">
                Go to Google
              </Button>
            </div>
          </main>
        </UserContextProvider>
      </DarkModeProvider>
    </>
  );
}

export default App;
