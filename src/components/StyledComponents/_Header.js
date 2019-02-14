import styled from 'styled-components';

const BlockUp = styled.header`
    width: 100%;
    height: 100px;
    min-height: 80px;
    position: relative;
    background-color: #000;
    opacity: 0.7;
    transition: opacity .2s ease-in-out;
    &:hover{
        opacity: 0.8;
    }
`

const BlockImg = styled.div`
    position: absolute;
    left: 7%;
    min-width: 100px;
    top: 50%;
    transform: translateY(-50%);
`

const Logo = styled.img.attrs({alt: 'logo_mnd'})`
    animation: showLogo 1.4s;

    @keyframes showLogo{
        from{
            transform: scale(0.5) rotate(0);
        } to{
            transform: scale(1) rotate(360deg);
        }
    } 
`

const BlockTitle = styled.div`
    width: auto;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 768px){
        transform: translate(-35%, -50%)
    }
`

const Title = styled.h1`
    color: #fff;
    text-align: center;
    font-weight: 400;
    animation: showTitle .7s;

    @keyframes showTitle{
        from {
            transform: scale(0.5);
            opacity: 0.4;
        } to {
            transform: scale(1);
            opacity: 1;
        }
    }
`

export {
    Title, 
    BlockTitle,
    Logo,
    BlockImg,
    BlockUp
}