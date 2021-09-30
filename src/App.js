import { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Categories from "./components/Categories";
import ItemDisplay from "./components/ItemDisplay";
import Filter from "./components/Filter";
import { handleData } from "./redux/actions/index";

function App(props) {
  const { handleData } = props;

  const fetchData = () => {
    handleData();
  };

  useEffect(() => {
    fetchData();
  });
  return (
    <Container>
      <Row>
        <Col className="d-flex flex-column  align-items-center">
          <h4>Our e-commerce store</h4>
          <p>Choose of our categories from below</p>
        </Col>
      </Row>
      <Row className="d-flex justify-content-around">
        <Categories />
      </Row>
      <Row>
        <Col className="col-3">
          <Filter />
        </Col>
        <Col className="col-9">
          <ItemDisplay />
        </Col>
      </Row>
    </Container>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleData: () => dispatch(handleData()),
  };
};
export default connect(null, mapDispatchToProps)(App);
