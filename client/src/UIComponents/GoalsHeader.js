import '../CSSComponents/GoalsHeader.css';
import CreateGoal from "./CreateGoal.js";
import React from "react";
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

import { BiSearchAlt2 } from 'react-icons/bi';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function GoalsHeader(props) {
    return (
        <div className="goals-header">
            <ToggleButtonGroup type="radio" defaultValue={["newest"]} name="time-filter-buttons" className="time-filters">
                <ToggleButton size='sm' id="filter-newest" value={"newest"} className="filter-button">Newest</ToggleButton>
                <ToggleButton size='sm' id="filter-oldest" value={"oldest"} className="filter-button">Oldest</ToggleButton>
            </ToggleButtonGroup>
            <ToggleButtonGroup type="radio" defaultValue={["all"]} name="status-filter-buttons" className="status-filters">
                <ToggleButton size='sm' id="filter-all" value={"all"} className="filter-button">All</ToggleButton>
                <ToggleButton size='sm' id="filter-completed" value={"completed"} className="filter-button">Completed</ToggleButton>
                <ToggleButton size='sm' id="filter-ongoing" value={"ongoing"} className="filter-button">Ongoing</ToggleButton>
                <ToggleButton size='sm' id="filter-incomplete" value={"incomplete"} className="filter-button">Incomplete</ToggleButton>
            </ToggleButtonGroup>
            <InputGroup className="search">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="search-field"
                />
                <Button size='sm' className="search-button"><BiSearchAlt2 className="magGlass" size={20}/></Button>
            </InputGroup>
            <CreateGoal goals={props.goals} setGoals={props.setGoals}/>
        </div>
    );
}

export default GoalsHeader;