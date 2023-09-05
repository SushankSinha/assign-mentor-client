import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

function StudentCard({ value}) {

  return (
    <div style = {{margin : "2%", textAlign : "left"}} className="main-card">
      <Card
        style={{
          width: "250px",
          height: "500px",
        }}
      >
        <CardBody>
          <div className="card-style">
            <CardTitle tag="h5">{value.studentName}</CardTitle>
          </div>
        </CardBody>
        <img
          style={{ objectFit: "contain", margin : "2% auto" }}
          alt={value.studentName}
          src={value.studentPhoto}
          width="90%"
          height="200px"
        />
        <CardBody>
          <CardText>Class : {value.studentDivision}</CardText>
          <CardText>Roll No. : {value.studentRoll}</CardText>
          <CardText>Mentor Assigned : {value.mentorName}</CardText>
          <CardText>Mentor Id : {value.mentorId}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default StudentCard;
