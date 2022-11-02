import "./App.css";
import { WelcomeH2} from "./Welcome";

function App() {
  return (
    <div className="App">
      <WelcomeH2 children="Welcome1" />
      <WelcomeH2 children="Welcome2" />
      <WelcomeH2>Saya content</WelcomeH2>
    </div>
  );
}

export default App;
