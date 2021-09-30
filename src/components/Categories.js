import React from "react";
import { Col, Figure } from "react-bootstrap";
import { connect } from "react-redux";
import { chooseCategory } from "../redux/actions/chooseCategory";

function Categories({ categoriesList, chooseCategory, handleCategory }) {
  return Object.keys(categoriesList).map((category) => {
    const { id, image, name } = categoriesList[category];
    const change = (id) => {
      handleCategory(id)
    }
    return (
      <Col
        key={id}
        
      >
        <Figure>
          <Figure.Image
            width={110}
            height={110}
            alt={name}
            src={image}
            thumbnail
          />
          <Figure.Caption className="d-flex justify-content-center">
            {name}
          </Figure.Caption>
        </Figure>
      </Col>
    );
  });
}

function mapStateToProps({ categoriesList, chooseCategory }) {
  return {
    categoriesList,
    chooseCategory,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleCategory: () => dispatch(chooseCategory()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
