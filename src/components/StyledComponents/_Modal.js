import styled from 'styled-components';

const BottomSave = styled.button`
    background-color: #007bff;  
    border: none;
    height: 80%;
    color: white;
    font-size: 18px;
    text-align: center;
    border-radius: 4px;
    margin: 0 7% 0 15px;  
    min-width: 150px;
    transition: all .2s;
    &:hover{
        background-color: #0069d9;
    }
    @media(max-width: 768px){
        margin: 0 0 0 10px;
    }
`

const BottomClose = styled.button`
    background-color: #5a6268;  
    border: none;
    height: 80%;
    color: white;
    font-size: 18px;
    text-align: center;
    border-radius: 4px;
    min-width: 100px;
    transition: all .2s;
    &:hover{
        background-color: #3b3737;
    }
    @media(max-width: 768px){
        margin-right: 10px;
    }
`

const BlockBottom = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
    @media(max-width: 768px){
        justify-content: center;
    }
`

const DisplayVal = styled.span`
    display: inline-block;
    position: relative;
    text-align: center;
    width: 40px;
    color: #fff;
    line-height: 20px;
    border-radius: 3px;
    background: #2c3e50;
    padding: 5px 10px;
    margin-left: 4%;

    @media(max-width: 768px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 34px;
        font-size: 14px;
        height: 15px;
        margin: 5px 0 0 34%;
    }

    &:after {
        position: absolute;
        top: 8px;
        left: -7px;
        width: 0;
        height: 0;
        border-top: 7px solid transparent;
        border-right: 7px solid #2c3e50;
        border-bottom: 7px solid transparent;
        content: '';

        @media(max-width: 768px){
            top: -13px;
            left: 21px;
            border-bottom: 7px solid #2c3e50;
            border-left: 7px solid transparent;
            border-right: 7px solid transparent;
        }
    }
`

const Input = styled.input`
    -webkit-appearance: none;
    width: 75%;
    height: 10px;
    border-radius: 5px;
    background: #d7dcdf;
    outline: none;
    padding: 0;
    margin: 0;
    @media(max-width: 768px){
        width: 100%;
        margin-top: 20px;
    }    

    &::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #2c3e50;
    cursor: pointer;
    transition: background .15s ease-in-out;
        &:hover {
        background: #1abc9c;
        }
    }

    &:active::-webkit-slider-thumb {
        background: #1abc9c;
    }

    &::-moz-range-thumb {
        width: 20px;
        height: 20px;
        border: 0;
        border-radius: 50%;
        background: #2c3e50;
        cursor: pointer;
        transition: background .15s ease-in-out;

        &:hover {
        background: #1abc9c;
        }
    }

    &:active::-moz-range-thumb {
        background: #1abc9c;
    }

    &:focus {
        
        &::-webkit-slider-thumb {
        box-shadow: 0 0 0 3px #fff,
                    0 0 0 6px #1abc9c;
        }
  }
`

const Col6 = styled.div`
    width: 50%;
    padding: 0 40px;
    @media(max-width:768px){
        padding: 0 10px;
    }
`

const RowModal = styled.div`
    display: flex;
    width: 100%;
    color: black;
    height: 50px;
    margin: 20px 0;
    font-size: 18px;
    font-weight: 700;
    align-items: center;
    opacity: 1;
    animation: showRowModal .3s;
    @keyframes showRowModal {
        from {
            opacity: 0;
            transform: scale(0)
        } to {
            opacity: 1;
            transform: scale(1)
        }
    }
`

const ModalData = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    max-height: 83%;
    min-height: 430px;
`

const ModalTitle = styled.span`
    font-size: 25px;
    font-weight: bold;
    color: black;
    margin-left: 4%;
`

const OnCloseModal = styled.button`
    padding: 10px 15px;
    font-size: 22px;
    border: none;
    color: white;
    background-color: #007bff;
    margin-right: 4%;
    border-radius: 50%;
    transition: all .2s;
    &:hover{
        background-color: #0069d9;
    }
`

const HeaderModal = styled.div`
    width: 100%;
    height: 8%;
    display: flex;
    justify-content: space-between;
    margin: 4% 0 2% 0;
    align-items: center;
`

const OverlayModal = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: ${props => props.isOpen ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    color: white;
    background-color: rgba(0,0,0, .6);
    z-index: 100;
`

const BodyModal = styled.div`
    position: absolute;
    transform: scale(1);
    width: 65%;
    height: auto;
    padding: 20px;
    overflow: auto;
    background: white;
    border-radius: 5px;
    animation: showModal .4s;
    
    @keyframes showModal{
        from{
            opacity: 0;
            transform: scale(0);
        }   
        to{ 
            opacity: 1;
            transform: scale(1);
        }
    }

    @media(max-width: 768px){
        width: 95%;
        height: 95vh;
    }
`

export { 
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
}