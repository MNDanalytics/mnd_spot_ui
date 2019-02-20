import styled from 'styled-components';

const HelperTask = styled.div`
    position: absolute;
    top: 36px;
    border-radius: 5px;
    left: 0;
    padding: 10px;
    width: 195px;
    height: auto;
    background: linear-gradient(#9198e5, #007bff);
    opacity: 0.9;
    transition: all .5s;
    z-index: 1;
    animation: showHelper .4s;
    font-size: 15px;
    @keyframes showHelper {
        from {
            opacity: 0;
            transform: scale(0.3);
        } to {
            opacity: 0.9;
            transform: scale(1);
        }
    }
`

const Col6 = styled.div`
    margin: 10px 5px;
`

const TextVal = styled.span`
    color: red;
    font-weight: bold;
    margin-left: 6px;
    font-size: 18px;
`

export {
    HelperTask,
    Col6,
    TextVal
}