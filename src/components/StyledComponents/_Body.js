import styled from 'styled-components';

const InsideBlock = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: auto;
    min-height: 600px;
    width: auto;
    margin: 10px;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
    transition: all .5s ease-in-out;
    &:hover{
        background-color: #f9f9f9;
    }
`

const BlockWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    position: relative;
    background-color: #fff;
    box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.42), 
                0 4px 25px 5px rgba(0, 0, 0, 0.12),
                0 8px 10px -5px rgba(0, 0, 0, 0.2);
`

const BlockTitle = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;   
    padding: 20px 0;
    height: auto; 
`

const Title = styled.h1`
    @keyframes fadeInRight{
        0%{
            transform: translateX(100%);
            opacity: 0.5
        }
        50%{
            transform: translateX(-10%);
            opacity: 0.7
        }
        100%{
            transform: translateX(0%);
            opacity: 1
        }
    }
    animation: 1s ease-in-out fadeInRight;
    font-size: 60px;
    margin: 0;
    padding: 0;
    @media(max-width: 768px){
        font-size: 24px;
    }
`

export {
    Title,
    BlockTitle,
    BlockWrapper,
    InsideBlock
}