import styled from 'styled-components'

export const Container = styled.button`
    padding: 8px 44px;
    background-color: ${({theme}) => theme.green};
    color: ${({theme}) => theme.white};
    font-size: 20px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid ${({theme}) => theme.green};

    transition: all .2s;

    &:hover {
        background-color: inherit;
        color: ${({theme}) => theme.green};
    }

    &:disabled {
        background-color: #D6D6D6;
        color: ${({theme}) => theme.black};
        border: none;
        cursor: not-allowed;
    }
`
