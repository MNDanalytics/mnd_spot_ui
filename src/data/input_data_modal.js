export const input_data = [
    {
        type: 'range',
        value: 'MINUTE',
        max_value: 59,
        min_value: 0,
        step: 1,
        name: 'Choose minute:',
    },
    {
        type: 'range',
        value: 'QUANTITY',
        max_value: 15,
        min_value: 1,
        step: 1,
        name: 'Quantity [MW]:',
    }, 
    {
        type: 'range',
        value: 'VALIDITY',
        max_value: 59,
        min_value: 1,
        step: 1,
        name: 'Validity [minutes]:',
    }, 
    {
        type: 'range',
        value: 'DISPLAY_QUANTITY',
        max_value: 100,
        min_value: 0,
        step: 10,
        name: 'Display quantity:',
    },
    {
        type: 'range',
        value: 'PEAK_PRICE_DELTA',
        max_value: 100,
        min_value: 0,
        step: 10,
        name: 'Peak price delta:',
    }
]

export const input_data_ice = [
    {
        type: 'range',
        value: 'MINUTE',
        max_value: 59,
        min_value: 0,
        step: 1,
        name: 'Choose minute:',
    },
    {
        type: 'range',
        value: 'QUANTITY',
        max_value: 15,
        min_value: 1,
        step: 1,
        name: 'Quantity [MW]:',
    }, 
    {
        type: 'range',
        value: 'VALIDITY',
        max_value: 59,
        min_value: 1,
        step: 1,
        name: 'Validity [minutes]:',
    }, 
]