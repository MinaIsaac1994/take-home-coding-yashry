import React from "react";
import { Col, Figure } from "react-bootstrap";

export default function Categories() {
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

  return categories.map((category) => (
    <Col key={category.id}>
      <Figure>
        <Figure.Image 
          width={110}
          height={110}
          alt={category.name} 
          src={category.image}
          thumbnail />
        <Figure.Caption className="d-flex justify-content-center">
          {category.name}
        </Figure.Caption>
      </Figure>
    </Col>
  ));
}
