import React, { useState }from "react";
import CollapsibleTable from "./GoalsList.js";

import Carousel from 'react-bootstrap/Carousel';

import '../CSSComponents/ManagerGoalsList.css';

import EmployeesList from './EmployeesList.js';

function ManagerGoalsList(props) {

    const [slide, changeSlide] = useState(0);

    function change() {
        changeSlide(1 - slide);
    }

    return (
        <Carousel activeIndex={slide} controls="false" variant="dark">
            <Carousel.Item>
                <CollapsibleTable view={props.view} transition={change}/>
            </Carousel.Item>
            <Carousel.Item>
                <EmployeesList transition={change}/>
            </Carousel.Item>
        </Carousel>
    ); 
}


export default ManagerGoalsList;