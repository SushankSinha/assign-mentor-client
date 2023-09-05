import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
import { API } from "../global";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MentorCard from "./MentorCard";

function MentorDetails() {

    const [mentorId, setMentorId] = useState("");
    const[data, setdata] = useState([]);
    const [allowed, setAllowed] = useState(true);
    
    const navigate = useNavigate();

    async function handleSubmit(e) {
      e.preventDefault();
  
      try {
  
       const res = await axios.get(`${API}/mentor-details/${mentorId}`);
  
       if(res.status === 200){
        setdata(res.data)
       }

      } catch (error) {
  
        alert("Failed to fetch details")
      }
  };
  
    return (
      <div>
        <h1>Mentor Details</h1>
        <Button style={{ marginLeft: "75%", margin : "5%" }} onClick={() => navigate(-1)}>
          BACK
        </Button>
        <Form>
          <FormGroup row>
            <Label for="id" sm={2}>
              Mentor Id
            </Label>
            <Col sm={10}>
              <Input
                id="id"
                name="id"
                placeholder="Enter Mentor Id"
                type="text"
                onChange={(e) => {setMentorId(e.target.value);setAllowed(false)}}
                value={mentorId}
                required = {true}
              />
            </Col>
          </FormGroup>
            
          <Button disabled = {allowed} onClick={handleSubmit}>Submit</Button>
        </Form>

      {data.map((item, index)=>{
        return(
          <MentorCard key = {index} value = {item} />
        )
      })}

      </div>
    );

}

export default MentorDetails;

