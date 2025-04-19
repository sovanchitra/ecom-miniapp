import { BrowserRouter, Routes } from "react-router";
import { router } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>{router()}</Routes>
    </BrowserRouter>
  );
}

export default App;
