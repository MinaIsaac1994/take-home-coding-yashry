import React from "react";
import { Container, Card, Button } from "react-bootstrap";

export default function ItemDisplay() {
  const categories = [
    {
      id: 1,
      name: "Books",
      image: "http://placeimg.com/640/480/city",
    },
    {
      id: 2,
      name: "Home",
      image: "http://placeimg.com/640/480/city",
    },
    {
      id: 3,
      name: "Kids",
      image: "http://placeimg.com/640/480/city",
    },
    {
      id: 4,
      name: "Health",
      image: "http://placeimg.com/640/480/city",
    },
    {
      id: 5,
      name: "Clothing",
      image: "http://placeimg.com/640/480/city",
    },
  ];
  return (
    <Container className="d-flex p-2  justify-content-around align-items-center    flex-wrap fluid">
      {categories.map((product) => {
        return (
          <Card
            border="primary"
            style={{ width: "18rem", margin: "1rem" }}
            key={product.id}
          >
            <Card.Img
              className="bd-highlight"
              variant="top"
              src={product.image}
            />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
}
