import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function WidgetCard({ value }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{value.author}</Card.Title>
        <Card.Title>{value.title}</Card.Title>
        <Button href={value.url} variant="primary">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}
export default WidgetCard;
