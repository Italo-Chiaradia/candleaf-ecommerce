import styled from 'styled-components'

export const Container = styled.footer`
    position: relative;
    padding: 32px 13px 130px 13px;
    color: ${({theme}) => theme.white};
    background-color: ${({theme}) => theme.black};
`

export const Wrapper = styled.div`
    max-width: 1111px;
    margin: 0 auto;
    border-top: 1.5px solid ${({theme}) => theme.white};
    padding-top: 16px;
    > div:first-child {
        margin-bottom: 52px;
    }
    > div:first-child > p {
        margin-top: 16px;
    }
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`

export const FooterLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    font-size: 18px;
    font-weight: 500;
    > div {
        display: flex;
        gap: 15px;
        flex-direction: column;
    }
    > div > span:first-child {
        color: ${({theme}) => theme.green};
    }
    > div > a:hover {
        color: ${({theme}) => theme.green};
    }
    @media (min-width: 768px) {
        margin-top: 43px;
    }
`

export const Rights = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-block: 16px;
    background-color: lightgray;
    color: ${({theme}) => theme.black};
    font-size: 16px;
    text-align: center;
`
