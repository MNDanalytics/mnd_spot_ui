import React, { Component } from 'react';

import Helper from '../../components/Helper/InfoHelper';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

import { toNumHour } from '../../helpers/helpers';

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
        isOpenModal: false,
        taskHelperId: null
    }

    toggleModalView = () => {
        this.setState({ isOpenModal: !this.state.isOpenModal })
    }

    showHelper(index){
        this.setState({ taskHelperId: index })
    }

    hideHelper(){
        this.setState({ taskHelperId: null })
    }

    renderTasks = (tasks = []) => {
        const { delTask, hour, showInfo } = this.props;   
        return tasks.map(({ MINUTE }, index) => (
            <Task
                onMouseEnter={() => this.showHelper(index)}
                onMouseLeave={() => this.hideHelper()} 
                key={index}>
                {MINUTE}
                <BtnDelTask
                    onClick={() => delTask(toNumHour(hour), MINUTE)}>
                    &#10006;
                </BtnDelTask>
                {this.state.taskHelperId === index 
                    && 
                    <Helper 
                        show_info={showInfo(toNumHour(hour), MINUTE)} />}
            </Task>
        ))
    }

    renderModal = () => {
        const { hour, addTaskToRow } = this.props;

        return this.state.isOpenModal &&
            <Modal 
                addTaskToRow={(data) => addTaskToRow(data)}
                hour={hour} 
                isOpen={this.state.isOpenModal} 
                closeModal={this.toggleModalView}>
            </Modal>
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
                        onChange={() => checkActive(toNumHour(hour), active)} 
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

Row.propTypes = {
    active: PropTypes.bool.isRequired,
    addTaskToRow: PropTypes.func.isRequired,
    checkActive: PropTypes.func.isRequired,
    delTask: PropTypes.func.isRequired,
    hour: PropTypes.string.isRequired,
    showInfo: PropTypes.func.isRequired,
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            TYPE: PropTypes.string.isRequired,
            MINUTE: PropTypes.number.isRequired,
            PEAK_PRICE_DELTA: PropTypes.number,
            QUANTITY: PropTypes.number.isRequired,
            VALIDITY: PropTypes.number.isRequired,
        })
    )
}

export default Row;