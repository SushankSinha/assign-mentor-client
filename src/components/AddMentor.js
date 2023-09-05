import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
import { API } from "../global";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddMentor() {

  const [mentorName, setMentorName] = useState("");
  const [mentorId, setMentorId] = useState("");
  const [allowed, setAllowed] = useState(true);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {

      const response = await axios.post(`${API}/mentor`, {mentorName: mentorName, mentorId: mentorId});

      if(response.status === 201){
        
        alert("Mentor Added!");
        navigate("/");
      }

    } catch (error) {

      alert("Failed to add Mentor")
    }

};

  return (
    <div>
      <h1>Add Mentor</h1>
      <Button style={{ marginLeft: "75%", margin : "5%" }} onClick={() => navigate(-1)}>
        BACK
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
              onChange={(e) => {setMentorId(e.target.value); setAllowed(false) }}
              value={mentorId}
              required = {true}
            />
          </Col>
        </FormGroup>

        <Button disabled = {allowed} onClick={handleSubmit}>Submit</Button>
      </Form>
    </div>
  );
}

export default AddMentor;
