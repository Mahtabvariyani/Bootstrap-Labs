import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

function HomePage() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Text>
          <Image
            src="https://c0.wallpaperflare.com/preview/290/868/938/test-board-school-blackboard.jpg"
            fluid
          />
          ;
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default HomePage;
