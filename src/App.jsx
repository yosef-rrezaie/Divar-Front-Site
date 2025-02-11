import { BrowserRouter } from "react-router-dom";
import "./styles/fonts.css";
import Router from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
