import styled from 'styled-components';

const BtnAdd = styled.button`
    padding: 0.65rem .9rem;
    color: white;
    font-size: 18px;
    background-color: ${props => props.disabled ? 'rgba(89,94,101,0.2)' : '#007bff'};
    border: none;
    border-radius: 5px;
    transition: .15s ease-in-out;
    box-shadow: 0 2px 2px 0 rgba(116, 96, 238, 0.14), 
                0 3px 1px -2px rgba(116, 96, 238, 0.2), 
                0 1px 5px 0 rgba(116, 96, 238, 0.12);
    &:hover{
        background-color: ${props => props.disabled ? '#8c8989' : '#0069d9'};
    }
`

const BlockButton = styled.div`
    height: 100%;
    width: 100px;
    margin: 0 30px;
    display: flex;
    align-items: center;
    @media(max-width:768px){
        display: block;
        position: absolute;
        right: 10px;
        bottom: 5px;
        height: 35%;
        margin: 0;
        width: 20%;
    }
`

const BtnDelTask = styled.span`
    position: absolute;
    padding: 0;
    right: 3px;
    top: 1px;
    background-color: inherit;
    border: none;
    color: whitesmoke;
    font-size: 12px;
    cursor: pointer;
    &:hover{
        color: red;
    }
    @media(max-width: 768px){
        font-size: 10px;
    }
`

const Task = styled.label`
    height: 80%;
    min-height: 30px;
    width: 10%;
    background-color: #4150bd;
    margin: 0 0 0 10px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: whitesmoke;
    font-size: 16px;
    font-weight: 700;
    transition: all .2s ease-in-out;
    position: relative;
    opacity: 1;
    transform: scale(1);
    max-width: 80px;
    animation: showTask .4s;
    &:hover{
        background-color: #5767dc;
    }

    @keyframes showTask{
        0% {
            opacity: 0;
            transform: scale(0);
        }
        100%{
            opacity: 1;
            transform: scale(1);
        }
    }
    @media(max-width: 768px){
        width: 18%;
    }
`

const BlockTasks = styled.div`
    display: flex;
    align-items: center;
    height: 60%;
    min-height: 40px;
    min-width: 300px;
    width: 85%;
    background: ${props => props.active ? 'rgba(89,94,101,0.2)' : 'white'};
    border-radius: 5px;
    margin: 0 30px;
    transition: all .2s ease-in-out;
    border: 1px solid #ccc;
    @media(max-width: 768px){
        margin: 40px 10px 0 10px;
    }
`

const Label = styled.label`
    width:75px;
    height:25px;
    background-color:#4150bd;
    border-radius:50px;
    padding:5px;
    transition:0.5s ease;
    perspective:1000;
    cursor:pointer;
    &::before{
        content:'';
        width:25px;
        height:25px;
        background:#fff;
        position:absolute;
        border-radius:50%;
        box-shadow:0 5px 5px rgba(0,0,0,.7);
        transition:0.4s;
        left:5px;
        transition-timing-function: cubic-bezier(0.42,0,0.58,1);
    }
`

const Input = styled.input`
    opacity: 0;
    &:checked + ${Label}{
        background-color: rgba(89,94,101,0.2);
    }
    &:checked + ${Label}:before{
        left: 55px;
    }
`

const BlockCheck = styled.div`
    width: 5.2%;
    min-width: 115px;
    display: flex;
    margin: 0 30px;
    align-items: center;
    @media(max-width: 768px){
        position: absolute;
        bottom: 20px;
        margin: 0;
        left: -7px;
    }
`

const BlockHour = styled.div`
    height: 100%;
    width: 4.8%;
    min-width: 115px;
    display: flex;
    align-items: center;
    margin: 0 30px;
    font-size: 18px;
    font-weight: 600;
    @media(max-width: 768px){
        position: absolute;
        top: 10px;
        height: 15%;
        margin: 0 14px;
    }
`

const BlockRow = styled.div`
    width: 100%;
    background: #e9eaec;
    display: flex;
    align-items: center;
    min-height: 70px;
    height: auto;
    margin-top: 20px; 
    border-radius: 2px;
    box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 
                0 4px 25px 5px rgba(0, 0, 0, 0.12),
                0 8px 10px -5px rgba(0, 0, 0, 0.2);
    @media(max-width: 768px){
        min-height: 150px;
        display: block;
        position: relative;
    }
`

export {
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
}