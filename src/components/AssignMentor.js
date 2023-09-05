import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
import { API } from "../global";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AssignMentor() {

  const [studentName, setStudentName] = useState("");
  const [studentDivision, setStudentDivision] = useState("");
  const [studentRoll, setStudentRoll] = useState("");
  const [mentorName, setMentorName] = useState("");
  const [mentorId, setMentorId] = useState("");
  const [allowed, setAllowed] = useState(true);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {

      const response = await axios.put(`${API}/update-mentor`, {mentorName : mentorName, mentorId : mentorId, studentName: studentName, studentRoll: studentRoll, studentDivision : studentDivision});

      if(response.status === 201){
        
        alert("Mentor Updated!");
        navigate("/");
      }

    } catch (error) {

      alert("Failed to add Student")
    }
};

  return (
    <div>
      <h1>Assign Mentor</h1>
      <Button style={{ marginLeft: "75%", margin : "5%" }} onClick={() => navigate(-1)}>
        BACK
      </Button>
      <Button style={{ marginLeft: "70%", margin : "5%" }} onClick={() => navigate("/")}>
        HOME
      </Button>
      <Form>
      <FormGroup row>
          <Label for="mentorName" sm={2}>
            Mentor Name
          </Label>
          <Col sm={10}>
            <Input
              id="mentorName"
              name="mentorName"
              placeholder="Enter Mentor Name"
              type="text"
              onChange={(e) => setMentorName(e.target.value)}
              value={mentorName}
              required = {true}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="mentorId" sm={2}>
            Mentor Id
          </Label>
          <Col sm={10}>
            <Input
              id="mentorId"
              name="mentorId"
              placeholder="Enter Mentor Id"
              type="text"
              onChange={(e) => setMentorId(e.target.value)}
              value={mentorId}
              required = {true}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="studentName" sm={2}>
            Student Name
          </Label>
          <Col sm={10}>
            <Input
              id="studentName"
              name="studentName"
              placeholder="Enter Student Name"
              type="text"
              onChange={(e) => setStudentName(e.target.value)}
              value={studentName}
              required = {true}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="studentRoll" sm={2}>
            Student Roll
          </Label>
          <Col sm={10}>
            <Input
              id="studentRoll"
              name="studentRoll"
              placeholder="Enter Student Roll"
              type="text"
              onChange={(e) => setStudentRoll(e.target.value)}
              value={studentRoll}
              required = {true}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="studentDivision" sm={2}>
            Student Division
          </Label>
          <Col sm={10}>
            <Input
              id="studentDivision"
              name="studentDivision"
              placeholder="Enter Student Division"
              type="text"
              onChange={(e) => {setStudentDivision(e.target.value); setAllowed(false) }}
              value={studentDivision}
              required = {true}
            />
          </Col>
        </FormGroup>

        <Button disabled = {allowed} onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default AssignMentor;

