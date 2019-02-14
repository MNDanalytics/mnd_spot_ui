import React, { Component } from 'react';

import Modal from '../Modal/Modal';

import {
    BlockRow,
    BlockButton,
    BlockCheck,
    BlockHour,
    BlockTasks,
    Input,
    Task, 
    BtnDelTask,
    BtnAdd,
    Label
} from '../../components/StyledComponents/_Row';

class Row extends Component{
    state = {
        isOpenModal: false
    }

    toggleModalView = () => {
        this.setState({ isOpenModal: !this.state.isOpenModal })
    }

    renderTasks = tasks => {
        const { delTask, hour } = this.props;
        
        return tasks ? tasks.map(({ minute }, index) => (
            <Task key={index}>
                {minute}
                <BtnDelTask
                    onClick={() => delTask(hour, minute)}>
                    &#10006;
                </BtnDelTask>
            </Task>
        )) : null
    }

    renderModal = () => {
        const { hour, addTaskToRow } = this.props;

        return this.state.isOpenModal ?
            <Modal 
                addTaskToRow={(data) => addTaskToRow(data)}
                hour={hour} 
                isOpen={this.state.isOpenModal} 
                closeModal={this.toggleModalView}>
            </Modal>
            : null
    }

    render(){
        const { 
            hour, 
            tasks, 
            active, 
            checkActive,
            } = this.props;

        return (
            <BlockRow>
                <BlockHour>
                    {hour}
                </BlockHour>
                <BlockCheck>
                    <Input 
                        checked={active} 
                        onChange={() => checkActive(hour, active)} 
                        type='checkbox' 
                        id={`check_row_${hour}`}/>
                    <Label 
                        htmlFor={`check_row_${hour}`}/>
                </BlockCheck>
                <BlockTasks 
                    active={active}>
                    {this.renderTasks(tasks)}
                </BlockTasks>
                <BlockButton>
                    <BtnAdd
                        disabled={active}
                        onClick={this.toggleModalView}>Add
                    </BtnAdd>
                </BlockButton>
                {this.renderModal()}
            </BlockRow>
        )
    }
}

export default Row;