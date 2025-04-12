import Users from "./components/Users/Users.tsx";
import TapBar from "./components/TapBar/TapBar.tsx";
import TapBarContent from "./components/TapBarContent/TapBarContent.tsx";
import "./index.scss";

function App() {
  return (
    <section className="app-container">
      <Users />
      <TapBar>
        <TapBarContent />
      </TapBar>
    </section>
  );
}

export default App;
