import React from 'react';

import {
    HelperTask,
    Col6,
    TextVal
} from '../StyledComponents/_InfoHelper';

export default ({ show_info: { TYPE, MINUTE, QUANTITY, VALIDITY, PEAK_PRICE_DELTA, DISPLAY_QUANTITY} }) => {
    return (
        <HelperTask>
            <Col6>TYPE:  <TextVal>{TYPE}</TextVal></Col6>
            <Col6>MINUTE:  <TextVal>{MINUTE}</TextVal></Col6>
            <Col6>QUANTITY:  <TextVal>{QUANTITY}</TextVal></Col6>
            <Col6>VALIDITY:  <TextVal>{VALIDITY}</TextVal></Col6>
            <Col6>DISPLAY_QUANTITY:  <TextVal>{DISPLAY_QUANTITY}</TextVal></Col6>
            <Col6>PEAK_PRICE_DELTA:  <TextVal>{PEAK_PRICE_DELTA}</TextVal></Col6>
        </HelperTask>
    )
}