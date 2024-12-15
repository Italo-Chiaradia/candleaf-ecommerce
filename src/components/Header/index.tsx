import { Container, Button, UserCartButtons, NavContainer } from './styles'
import { List, X, User, ShoppingCart } from '@phosphor-icons/react'
import CandleafLogo from '../../assets/logo.svg'

import { useState } from 'react'


export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleOpenMenu() {
        setMenuOpen(state => !state);
    }

    return (
        <Container>
            <div>
                <Button onClick={handleOpenMenu}>
                    {
                        menuOpen ? (
                            <X size={32} />
                        ) : (
                            <List size={32} />
                        )
                    }
                </Button>
                <a href="/">
                    <img src={CandleafLogo} alt="" />
                </a>
                <NavContainer menu={menuOpen}>
                    <ul>
                        <li>
                            <a href="/">Discovery</a>
                        </li>
                        <li>
                            <a href="/">About</a>
                        </li>
                        <li>
                            <a href="/">Contact Us</a>
                        </li>
                    </ul>
                </NavContainer>
                <UserCartButtons>
                    <Button>
                        <User size={32} />
                    </Button>
                    <Button>
                        <ShoppingCart size={32} />
                    </Button>
                </UserCartButtons>
            </div>
        </Container>
    )
}
