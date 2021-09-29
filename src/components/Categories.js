import React, { useState, useEffect } from "react";
import { Col, Figure } from "react-bootstrap";
import { fetchGategories } from "../utils/api";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchGategories()
      .then((data) => setCategories(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }
  return categories.map((category) => (
    <Col key={category.id}>
      <Figure>
        <Figure.Image
          width={110}
          height={110}
          alt={category.name}
          src={category.image}
          thumbnail
        />
        <Figure.Caption className="d-flex justify-content-center">
          {category.name}
        </Figure.Caption>
      </Figure>
    </Col>
  ));
}
