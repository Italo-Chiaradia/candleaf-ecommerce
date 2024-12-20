import { Container, Button, UserCartButtons, NavContainerMobile, NavContainerDesktop } from './styles'
import { List, X, User, ShoppingCart } from '@phosphor-icons/react'
import CandleafLogo from '../../assets/logo.svg'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive';


export function Header() {
    const isDesktop = useMediaQuery({query: '(min-width: 1224px)'});
    const [menuOpen, setMenuOpen] = useState(false);

    function handleOpenMenu() {
        setMenuOpen(state => !state);
    }

    return (
        <Container>
            <div>
                {
                    !isDesktop ? (
                        <Button onClick={handleOpenMenu}>
                            {
                                menuOpen ? (
                                    <X size={32} />
                                ) : (
                                    <List size={32} />
                                )
                            }
                        </Button>
                    ) : null
                }
                
                <a href="/">
                    <img src={CandleafLogo} alt="" />
                </a>
                {
                    isDesktop ? ( 
                        <NavContainerDesktop>
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
                        </NavContainerDesktop>
                    ) : null
                }
                <UserCartButtons>
                    <Button>
                        <User size={32} />
                    </Button>
                    <Button>
                        <ShoppingCart size={32} />
                    </Button>
                </UserCartButtons>
            </div>
            {
                !isDesktop ? (
                    <NavContainerMobile $menu={menuOpen}>
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
                    </NavContainerMobile>
                ) : null
            }
        </Container>
    )
}
