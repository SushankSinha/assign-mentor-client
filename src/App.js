import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AddMentor from "./components/AddMentor";
import AddStudent from "./components/AddStudent";
import AssignMentor from "./components/AssignMentor";
import UpdateMentor from "./components/UpdateMentor";
import MentorDetails from "./components/MentorDetails";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route
            path="/mentor"
            element={<AddMentor/>}/>
          <Route
            path="/student"
            element={<AddStudent/>}/>
          <Route
            path="/assign-mentor"
            element={<AssignMentor/>}/>
          <Route
            path="/update-mentor"
            element={
              <UpdateMentor />
            }/>
          <Route
            path="/mentor-details"
            element={
              <MentorDetails />
            }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
