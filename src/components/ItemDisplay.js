import React, { Component } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";

class ItemDisplay extends Component {
  render() {
    const { filterProducts } = this.props;
    console.log(filterProducts)
    return (
      <Container className="d-flex p-2  justify-content-around align-items-center    flex-wrap fluid">
        {Object.keys(filterProducts).map((product) => {
          const { id, image, name } = filterProducts[product];
          return (
            <Card
              border="primary"
              style={{ width: "18rem", margin: "1rem" }}
              key={id}
            >
              <Card.Img className="bd-highlight" variant="top" src={image} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
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
}

function mapStateToProps({ products, chooseCategory }) {
  let prodByCat;
  if (chooseCategory) {
    prodByCat = Object.keys(products).map(prod => products[prod]);
    prodByCat.filter(prod => prod.id===chooseCategory)
  }
  let filterProducts= prodByCat? prodByCat: products
  return {
    filterProducts,
  };
}

export default connect(mapStateToProps)(ItemDisplay);
