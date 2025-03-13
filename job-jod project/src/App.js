import Activejob from "./component/Active Job/Activejob";
import Alljob from "./component/All job/Alljob";
import Candidate from "./component/Cadidate/Cadidate";
import Companies from "./component/Companies/Companies";
import Exoiedjob from "./component/Exoied Job/Exoiedjob";
import Pendingjob from "./component/Pending Job/Pendingjob";
import Dashbord from "./pages/Dashbord/Dashbord";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashbord />} />
        <Route path="/candidate" element={<Candidate />} />
        <Route path="/pendingjob" element={<Pendingjob />} />
        <Route path="/exoiedjob" element={<Exoiedjob />} />
        <Route path="/alljob" element={<Alljob />} />
        <Route path="/activejob" element={<Activejob />} />
        <Route path="/companies" element={<Companies />} />
      </Routes>
    </>
  );
}

export default App;
