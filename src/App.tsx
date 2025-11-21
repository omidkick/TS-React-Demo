import "./App.css";
import Counter from "./components/state/Counter";
import DarkModeProvider from "./context/DarkModeContext";
import MainHeader from "./ui/MainHeader";

function App() {
  return (
    <>
      <DarkModeProvider>
        <MainHeader />
        <main className="main-content">
          <Counter />
        </main>
      </DarkModeProvider>
    </>
  );
}

export default App;