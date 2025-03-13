import Dashbord from "./pages/Dashbord/Dashbord";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashbord/>} />
      </Routes>
    </>
  );
}

export default App;
