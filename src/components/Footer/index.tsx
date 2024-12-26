import { Container, Wrapper, FooterLinks, Rights } from './styles.ts'
import CandleafLogoFooterDesktop from '../../assets/logo-footer-desktop.svg'
import CandleafLogoFooter from '../../assets/logo-footer.svg'
import { useMediaQuery } from 'react-responsive';


export function Footer() {
    const isDesktop = useMediaQuery({query: '(min-width: 768px)'}); 
    return (
        <Container>
            <Wrapper>
                <div>
                    {
                        !isDesktop ? (
                            <img src={CandleafLogoFooter} />
                        ) : (
                            <img src={CandleafLogoFooterDesktop} />
                        )
                    }   
                    <p>
                        Your natural candle made for your home and for your wellness.
                    </p>
                </div>
                <FooterLinks>
                    <div>
                        <span>Discovery</span>
                        <a href="#">New season</a>
                        <a href="#">Most searched</a>
                        <a href="#">Most sold</a>
                    </div>
                    <div>
                        <span>Info</span>
                        <a href="#">Contact Us</a>
                        <a href="#">Privacy Policies</a>
                        <a href="#">Terms & Conditions</a>
                    </div>
                    <div>
                        <span>About</span>
                        <a href="#">Help</a>
                        <a href="#">Shipping</a>
                        <a href="#">Affiliate</a>
                    </div>
                </FooterLinks>
            </Wrapper>
            <Rights>
                <span>©Candleaf All Rights Reserved.</span>
            </Rights>
        </Container>
    )
}
