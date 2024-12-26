import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${({theme}) => theme.white};
    max-width: 267px;
    padding: 12px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        margin-bottom: 12px;
    }
    span {
        font-size: 16px;
        color: #7C8087;
    }

    @media (min-width: 768px) {
        max-width: 350px;
        height: 295px;
        padding: 24px;
        justify-content: center;
        img {
            width: 84px;
            height: 84px;
        }
        span {
            font-size: 18px;
        }
    }
`

export const StarsContainer = styled.div`
    @media (min-width: 768px) {
        > svg {
            width: 24px;
            height: 24px;
        }
    }
`

export const PhraseText = styled.div`
    font-size: 19px;
    font-weight: 500;
    color: #1D293F;

    @media (min-width: 768px) {
        font-size: 22px;
        margin-block: 8px;
    }
`
