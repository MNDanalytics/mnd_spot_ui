import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { input_data } from '../../data/input_data_modal';

import { 
    BodyModal, 
    OverlayModal, 
    HeaderModal, 
    OnCloseModal, 
    ModalTitle, 
    ModalData, 
    RowModal, 
    Col6,
    Input, 
    BlockBottom, 
    BottomClose, 
    BottomSave,
    DisplayVal 
} from '../../components/StyledComponents/_Modal';

class Modal extends Component{
    
    state = {
        hour: '',
        data: {
            minute: 0,
            deal_type: 0,
            quantity: 0,
            valid: 0,
            quantity_delta: 0,
            price_delta: 0 
        }
    }

    componentWillMount = () => {
        this.root = document.createElement('div');
        document.body.appendChild(this.root);
    }

    componentWillUnmount = () => {
        document.body.removeChild(this.root);
    }

    handleInput = ({ target }, key, hour) => {
        const values = {...this.state.data};
        values[key] = Number(target.value);
        this.setState({ hour, data: values })
    }

    renderInputFields = data => {
        const { hour } = this.props;
        return data.map(({ name, value, step, max_value }, index) => (
            <RowModal key={index}>
                <Col6>{name}</Col6>
                <Col6>
                    <Input
                        type="range"
                        max={max_value}
                        value={this.state.data[value]}
                        step={step}
                        onChange={(e) => this.handleInput(e, `${value}`, hour)}/>
                        <DisplayVal>
                            {this.state.data[value]}
                        </DisplayVal>
                </Col6>
            </RowModal>
        ))
    }

    render(){
        const { closeModal, isOpen, hour, addTaskToRow } = this.props;
        return ReactDOM.createPortal(
            <OverlayModal isOpen={isOpen}>
                <BodyModal>
                    <HeaderModal>
                        <ModalTitle>Task for: {hour}</ModalTitle>
                        <OnCloseModal
                            onClick={() => closeModal()}>&#10006;
                        </OnCloseModal>
                    </HeaderModal>
                    <hr style={{ width: '93%', backgroundColor: 'black' }}></hr>
                    <ModalData>
                        {this.renderInputFields(input_data)}
                    </ModalData>
                    <BlockBottom>
                        <BottomClose
                            onClick={() => closeModal()}>Close
                            </BottomClose>
                        <BottomSave
                            onClick={() => {
                                addTaskToRow(this.state);
                                closeModal();
                            }}>Save Task
                        </BottomSave>
                    </BlockBottom>
                </BodyModal>
            </OverlayModal>,
            this.root
        )
    }

}

export default Modal;