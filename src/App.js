import {Card, CardBody, Col, Container, FormGroup, Input, Label, Row} from "reactstrap";

// Images
import nba from './assets/images/nba.png';
import Pair from "./components/Pair";

const App = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={12}>
          <Card>
              <CardBody className="text-center">
                  <img alt="NBA Logo" src={nba} height="80px"/>
                  <h1>FIND THE PAIR'S</h1>
                  <hr/>
                  <p>This application will allow you to find the pairs of <strong>NBA</strong> players whose summed height (in) is equal to the value you enter. </p>

                  <br/>

                  <FormGroup>
                      <Row className="justify-content-center">
                          <Col md={6}>
                              <Label for="user_height">
                                  Enter the height you are looking for (in)
                              </Label>
                              <Input className="text-center" id="user_height" name="user_height" placeholder="Ex: 100 in" type="number"/>
                          </Col>
                      </Row>
                  </FormGroup>

                  <br/>

                  <h1>Results</h1>
                  <p>Results</p>

                  <Pair />
              </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
