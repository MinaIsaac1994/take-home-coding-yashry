import React from "react";
import { Col, Figure } from "react-bootstrap";
import { connect } from "react-redux";
import { chooseCategory } from "../redux/actions/chooseCategory";

function Categories({ categoriesList, chooseCategory, dispatchCategory }) {

 
  return Object.keys(categoriesList).map((category) => {
    const { id, image, name } = categoriesList[category];
   
    return (
      <Col
        key={id}
       onClick={()=>dispatchCategory(id)}
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
    dispatchCategory: (id) => dispatch(chooseCategory(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
