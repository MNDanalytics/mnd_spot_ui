import React, { Component } from 'react';

import { rows } from '../../data/state';

import Row from '../Row/Row';
import Body from '../../components/Main/Body';

class Content extends Component{

    state = {
        rows,
    }

    handleCheckRow = (hour, disabled) => {
        const rows = [...this.state.rows];
        const row = rows.find(item => item.hour === hour);
        let activeRow = row.disabled = !disabled;
        if(activeRow) row.tasks = [];
        this.setState({ rows });
    }

    addTaskToRow = ({ hour, data }) => {
        const rows = [...this.state.rows];
        const row = rows.find(item => item.hour === hour);
        row.tasks.push(data);
        this.setState({ rows });
    }

    removeTaskFromRow = (hour, minute) => {
        const rows = [...this.state.rows];
        const row = rows.find(item => item.hour === hour);
        row.tasks = row.tasks.filter(elem => elem.minute !== minute);
        this.setState({ rows });
    }

    renderRows = rows => {
        return rows ? rows.map(({ hour, disabled, tasks }) => (
            <Row 
                checkActive={(hour, disabled) => this.handleCheckRow(hour, disabled)}
                key={hour} 
                active={disabled}
                tasks={tasks} 
                hour={hour}
                addTaskToRow={data => this.addTaskToRow(data)}
                delTask = {(hour, minute) => this.removeTaskFromRow(hour, minute)}
                />
        )) 
        : null;
    }

    render(){
        console.log(this.state.rows)
        return (
            <Body>
                {this.renderRows(this.state.rows)}
            </Body>
        )
    }

}

export default Content;