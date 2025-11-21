import { Container } from "react-bootstrap";
import NetHeadTitle from "./NetHeadTitle";
import NetFooter from "./NetFooter";

const NetContainer = () => {
  return (
    <>
      <Container fluid>
        <NetHeadTitle />
        <NetFooter />
      </Container>
    </>
  );
};

export default NetContainer;
