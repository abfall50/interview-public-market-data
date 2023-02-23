import "../styles/App.css";
import { SymbolProvider } from "../utils/context/symbolContext";
import Navbar from "../components/Navbar";
import Main from "../components/Main";

function App() {
  return (
    <SymbolProvider>
      <Navbar />
      <Main />
    </SymbolProvider>
  );
}

export default App;
