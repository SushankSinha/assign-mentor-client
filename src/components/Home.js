import React from 'react'
import {Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { DisplayAllStudents } from './DisplayAllStudents';

function Home() {

    const navigate = useNavigate();

  return (
    <div>
    <h1 style={{ margin : "2%" }}>Welcome to Student - Mentor Desk </h1>
    <div style={{justifyContent : "center", display : 'flex', flexDirection : 'row'}}>
      <Button style={{ margin : "2%" }} onClick={() => navigate("/mentor")}>
        Add Mentor
      </Button>
      <Button style={{ margin : "2%"  }} onClick={() => navigate("/student")}>
        Add Student
      </Button>
      <Button style={{ margin : "2%" }} onClick={() => navigate("/assign-mentor")}>
      Assign Mentor
      </Button>
      <Button style={{ margin : "2%" }} onClick={() => navigate("/update-mentor")}>
      Update Mentor
      </Button>
      <Button style={{ margin : "2%" }} onClick={() => navigate("/mentor-details")}>
      Get Mentor Details
      </Button>
      </div>
      <br/>
    
      <DisplayAllStudents />

    </div>
  )
}

export default Home