import styled from 'styled-components'

export const Container = styled.div`

`

export const Hero = styled.div`
    z-index: 1;
    position: relative;
    display: grid;
    place-items: center;
    width: 100%;
    height: 100vh;
    padding: 76px 15px 0;
    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
`

export const HeroInnerContainer = styled.div`
    background-color: rgba(247, 248, 250, .8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 40px 20px;
    text-align: center;
    color: #1D252C;
    > div {
        max-width: 540px;
    }
    h1 {
        font-size: 40px;
        line-height: 1.3;
        font-weight: 500; 
        margin-bottom: 10px;
    }
    p {
        font-size: 17px;
        margin-bottom: 35px;
    }
    button {
        max-width: 350px;
        padding: 8px 44px;
        font-size: 20px;
        font-weight: 500;
        color: ${({theme}) => theme.white};
        background-color: ${({theme}) => theme.green};
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }
    button:hover {
        filter: brightness(.9);
    }
    h1 > span {
        display: block;
    }
    @media(min-width: 768px) {
        padding: 40px 60px;
    }
    
`
