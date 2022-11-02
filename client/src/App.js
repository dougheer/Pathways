import React, { useState } from 'react';

import Header from "./UIComponents/Header.js";
// import Calendar from 'react-calendar';
// import GoalsList from "./UIComponents/GoalsList.js";
import GoalsCalendarList from "./UIComponents/GoalsCalendarList.js";
import Cal from "./UIComponents/Calendar.js";
import GoalDescription from "./UIComponents/card.js";

import 'react-calendar/dist/Calendar.css';
// import './CSSComponents/Calendar.css';
import './CSSComponents/Grid.css';

import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ManagerGoalsList from "./UIComponents/ManagerGoalsList.js";
import CollapsibleTable from "./UIComponents/GoalsList2.js";


const managerView = true;

function App() {
  const [value, setValue] = useState(new Date());
  const viewTitle = managerView ? "Manager View": "Employee View";
  if (managerView) {
    return (
      <div className="App">
        <Container fluid> 
          <Row><Header view={managerView} vTitle={viewTitle}/></Row>
          <Row className="mainRow">
            <Col sm={9}>
              <ManagerGoalsList/>
            </Col>
            <Col sm={3}>
              <Row className="calRow"><Cal value={value} setValue={setValue}/></Row>
              {/* <Row className="descRow"><GoalDescription/></Row> */}
              {/* <Row className="descRow"><GoalsCalendarList value={value}/></Row> */}
              <GoalsCalendarList value={value}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <Container fluid> 
          <Row><Header view={managerView} vTitle={viewTitle}/></Row>
          <Row className="mainRow">
            <Col sm={9}>
              <CollapsibleTable/>
            </Col>
            <Col sm={3}>
              <Row className="calRow"><Cal value={value} setValue={setValue}/></Row>
              {/* <Row className="descRow"><GoalDescription/></Row> */}
              {/* <Row className="descRow"><GoalsCalendarList value={value}/></Row> */}
              <GoalsCalendarList value={value}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
export {managerView};