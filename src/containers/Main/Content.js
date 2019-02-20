import React, { Component } from 'react';

import { rows } from '../../data/state';

import { findByHour } from '../../helpers/helpers';

import Row from '../Row/Row';
import Body from '../../components/Main/Body';

class Content extends Component{

    state = {
        rows
    }
    
    handleCheckRow = (hour, disabled) => {
        const rows = [...this.state.rows];
        const row = findByHour(rows, hour);
        let activeRow = row.disabled = !disabled;
        if(activeRow) row.tasks = [];
        this.setState({ rows });
    }

    addTaskToRow = (data) => {
        console.log(data);
        const rows = [...this.state.rows];
        const row = findByHour(rows, data.HOUR);
        row.tasks.push(data);
        this.setState({ rows })
    }

    removeTaskFromRow = (hour, minute) => {
        const rows = [...this.state.rows];
        const row = findByHour(rows, hour);
        row.tasks = row.tasks.filter(elem => elem.MINUTE !== minute);
        this.setState({ rows });
    }

    showInfo = (hour, minute) => {
        const rows = [...this.state.rows];
        const row = findByHour(rows, hour);
        const task = row.tasks.find(item => item.MINUTE === minute);
        return { ...task }
    }

    renderRows = (rows = []) => {
        return rows.map(({ hour, disabled, tasks }) => (
            <Row 
                checkActive={(hour, disabled) => this.handleCheckRow(hour, disabled)}
                key={hour} 
                active={disabled}
                tasks={tasks} 
                hour={hour}
                addTaskToRow={data => this.addTaskToRow(data)}
                delTask = {(hour, minute) => this.removeTaskFromRow(hour, minute)}
                showInfo = {(hour, minute) => this.showInfo(hour, minute)}
                />
        )); 
    }

    dataForApi = () => {
        const rows = [...this.state.rows];
        const list_hour = [];
        rows.forEach(row => {
            row.tasks.forEach(task => {
                list_hour.push(task);
            })
        })
        return list_hour;
    }

    sendData = async () => {
        try{
            const data = this.dataForApi();
            console.log(data);
            const response = await fetch('/orders_management/', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            const blala = await response.json();
            console.log(blala)
        }
        catch(e){
            console.log(`Error ${e}`)
        }
    }

    componentDidMount = async () => {
        const data = await this.getDataApi();
        const rows = this.reFormat(data);
        this.setState({ rows });
    }

    reFormat = (data=[]) => {
        const _rows = [...rows];
        data.forEach(item => {
            _rows.forEach(row => {
                if(item.HOUR === row.id){
                    row.tasks.push(item)
                }
            })
        })
        return _rows;
    }

    getDataApi = async () => {
        const response = await fetch('/orders_management/')
        const data = await response.json();
        return data
    }

    render(){
        console.log(this.state);
        return (
            <Body>
                {this.renderRows(this.state.rows)}
                <button type='submit' onClick={this.sendData}>Save</button>
            </Body>
        )
    }

}

export default Content;