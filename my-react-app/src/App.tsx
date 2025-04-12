import Users from "./components/Users";
import TapBar from "./components/TapBar/TapBar.tsx";
import TapBarContent from "./components/TapBarContent/TapBarContent.tsx";

function App() {
  return (
    <>
      <Users />
      <TapBar>
        <TapBarContent />
      </TapBar>
    </>
  );
}

export default App;
