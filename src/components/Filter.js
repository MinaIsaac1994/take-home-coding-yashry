import React from "react";
import { Form } from "react-bootstrap";
import RangeSlider from "./RangeSlider";

export default function Filter() {
  return (
    <Form >
      <Form.Group >
        <Form.Label>Price range</Form.Label>
        <Form.Range min='0' max='1000'/>
      </Form.Group>
      <Form.Group>
        <Form.Check  type='checkbox'/>
      </Form.Group>
    </Form>
  );
}
