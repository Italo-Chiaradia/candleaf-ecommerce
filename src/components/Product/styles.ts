import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 15px 0 rgba(123, 123, 123, 0.15);
    cursor: pointer;
    transition: transform 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940), box-shadow 0.5s;

    &:hover {
        transform: translateY(-25px);
        box-shadow: 0 4px 20px 0 rgba(123, 123, 123, 0.3);
    }
`;


export const ImageWrapper = styled.div`
    width: 100%;
    height: 98px;
    background-color: #F7F8FA;
    @media (min-width: 1224px) {
        max-width: 255px;
        height: 154px;
        img {
            width: 100%;
            height: auto;
            margin-top: 25px;
        }
    }
`

export const Footer = styled.footer`
    padding: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 61px;
    background-color: ${({theme}) => theme.white};
    @media (min-width: 1224px) {
        max-width: 255px;
        height: 76px;
    }
`

export const TitleContainer = styled.div`
    > span {
        font-size: 16px;
        color: #1D293F;
        font-weight: 500;
    }
    text-align: left;
`

export const PriceContainer = styled.div`
    > span {
        font-size: 17px;
        color: ${({theme}) => theme.green};
        font-weight: 500;
    }
    text-align: right;
`
