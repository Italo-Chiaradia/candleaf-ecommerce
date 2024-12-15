import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    height: 76px;
    padding: 0 24px;
    position: relative;
    border: 1px solid #E5E5E5;
    background-color: ${({theme}) => theme.white};
    > div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const Button = styled.button`
    background-color: inherit;
    border: none;
    cursor: pointer;
    transition: all .2s;
    
    > svg {
        color: ${({theme}) => theme.black}
    }
` 

export const UserCartButtons = styled.div`
    display: flex;
    gap: 16px;
`

interface NavContainer {
    menu?: boolean;
}

export const NavContainer = styled.nav<NavContainer>`
    position: absolute;
    top: ${({menu}) => menu? '100%' : '-200%' };
    left: 0;
    width: 100%;
    padding: 24px 64px;
    transition: all .2s;
    z-index: -1;
    ul li + li {
        margin-top: 16px;
    }
    li  a {
        font-size: 24px;
    }
    li  a:hover {
        color: ${({theme}) => theme.green};
        text-decoration: underline;
    }
   
`
