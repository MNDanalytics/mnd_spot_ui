import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Select from 'react-select';

import { input_data, input_data_ice } from '../../data/input_data_modal';

import { toNumHour } from '../../helpers/helpers';

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

import { options } from '../../data/options_data';

class Modal extends Component{

    constructor(props){
        super(props)
        this.root = document.createElement('div');
        document.body.appendChild(this.root);
        this.state = {
            data: {
                HOUR: props.hour,
                MINUTE: 0,
                TYPE: options[0].value,
                QUANTITY: 1,
                VALIDITY: 1,
                DISPLAY_QUANTITY: 0, 
                PEAK_PRICE_DELTA: 0
            }
        }
    }
    
    // componentDidMount = () => {
    //     const data = {...this.state.data}
    //     data.HOUR = this.props.hour;
    //     data.TYPE = options[0].value;
    //     this.setState({ data })
    // }

    componentWillUnmount = () => {
        document.body.removeChild(this.root);
    }

    handleInput = ({ target }, key ) => {
        const values = {...this.state.data};
        values[key] = Number(target.value);
        this.setState({ data: values })
    }

    saveData = () => {
        const { closeModal, addTaskToRow } = this.props;
        const { data } = this.state;
        data.HOUR = toNumHour(data.HOUR);
        addTaskToRow(data);
        closeModal();
    }

    handleOption = (option = {}) => {
        const data = {...this.state.data}
        data.TYPE = option.value;
        this.setState({ data })
    }

    renderInputRows = data => {
        return data.map(({ type, min_value, name, value, step, max_value }, index) => (
            <RowModal key={index}>
                <Col6>{name}</Col6>
                <Col6>
                    <Input
                        type={type}
                        min={min_value}
                        max={max_value}
                        value={this.state.data[value]}
                        step={step}
                        onChange={(e) => this.handleInput(e, `${value}`)}/>
                        <DisplayVal>
                            {this.state.data[value]}
                        </DisplayVal>
                </Col6>
            </RowModal>
        ))
    }

    render(){
        const { closeModal, isOpen, hour } = this.props;
        const { data: { TYPE } } = this.state;
        console.log(TYPE);
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
                        <RowModal>
                            <Col6>Deal type:</Col6>
                            <Col6>
                                <Select 
                                    autoFocus
                                    options={options}
                                    onChange={this.handleOption}
                                    value={this.state.data.TYPE}
                                    isSearchable={true}
                                    placeholder={this.state.data.TYPE}
                                    autoSize={true}
                                />
                            </Col6>
                        </RowModal>
                        {TYPE === 'ICEBERG_ORDER' ? this.renderInputRows(input_data) : this.renderInputRows(input_data_ice)}
                    </ModalData>
                    <BlockBottom>
                        <BottomClose
                            onClick={() => closeModal()}>Close
                            </BottomClose>
                        <BottomSave
                            onClick={() => {this.saveData(hour)}}>Save Task
                        </BottomSave>
                    </BlockBottom>
                </BodyModal>
            </OverlayModal>,
            this.root
        )
    }
}

Modal.propTypes = {
    addTaskToRow: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
    hour: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired
}

export default Modal;