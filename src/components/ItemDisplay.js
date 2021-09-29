import React, { useState, useEffect } from "react";
import { fetchItems } from "../utils/api";
import { Container, Card, Button } from "react-bootstrap";

export default function ItemDisplay() {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchItems()
      .then((data) => setItems(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  return (
    <Container className="d-flex p-2  justify-content-around align-items-center    flex-wrap fluid">
      {items.map((product) => {
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
