import React, { useState } from 'react';

import Header from "./UIComponents/Header.js";
// import Calendar from 'react-calendar';
import GoalsList from "./UIComponents/GoalsList.js";
import GoalsCalendarList from "./UIComponents/GoalsCalendarList.js";
import Cal from "./UIComponents/Calendar.js";

import 'react-calendar/dist/Calendar.css';
// import './CSSComponents/Calendar.css';
import './CSSComponents/Grid.css';

import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CollapsibleTable from "./UIComponents/GoalsList2.js";

function App() {
  const [value, setValue] = useState(new Date());

  return (
    <div className="App">
      <Container fluid> 
        <Row><Header/></Row>
        <Row className="mainRow">
          <Col sm={9}>
            <CollapsibleTable/>
          </Col>
          <Col sm={3}>
            <Cal value={value} setValue={setValue}/>
            <GoalsCalendarList value={value}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
