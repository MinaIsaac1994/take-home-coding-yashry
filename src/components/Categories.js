import React from "react";
import { Col, Figure } from "react-bootstrap";
import { connect } from "react-redux";
import {handleCategory} from '../redux/actions/index'
function Categories({ categoriesList,handleCategory}) {
  const chooseCategory = (id) => {
    handleCategory(id)
  };

  return Object.keys(categoriesList).map((category) => {
    const { id, image, name } = categoriesList[category];
    return (
      <Col key={id} onClick={()=>chooseCategory(id)}>
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

function mapStateToProps({ categoriesList }) {
  return {
    categoriesList,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleCategory: () => dispatch(handleCategory()),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Categories);
