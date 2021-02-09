import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Container,
} from "reactstrap";

function CardComp(props) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <CardImg variant="top" src={props.imgUrl} />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardText>{props.desc}</CardText>
          <Button variant="primary">Go somewhere</Button>
        </CardBody>
      </Card>
    </>
  );
}

export default CardComp;
