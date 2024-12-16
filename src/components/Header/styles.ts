import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.white};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 16px 24px;
    border-bottom: 1px solid #E5E5E5;
  }
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  
  svg {
    color: ${({theme}) => theme.black};
  }
  &:hover > svg {
    color:${({theme}) => theme.green}; /* Amarelo destaque */
  }
`;

export const UserCartButtons = styled.div`
  display: flex;
  gap: 16px;
`;

interface NavContainerProps {
  $menu?: boolean;
}

export const NavContainerMobile = styled.nav<NavContainerProps>`
  width: 100%;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: ${({ $menu }) => ($menu ? '200px' : '0')};

  ul {
    padding: 24px 64px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      text-align: left;

      a {
        color: ${({theme}) => theme.black};
        font-size: 24px;

        &:hover {
          color: ${({theme}) => theme.green};
        }
      }
    }
  }
`;

export const NavContainerDesktop = styled.nav`
  ul {
    display: flex;
    gap: 6px;
    li {
      width: 130px;
      text-align: center;
      a {
        color: ${({theme}) => theme.black};
        
        &:hover {
          color: ${({theme}) => theme.green};
        }
      }
    }
  }
`;
