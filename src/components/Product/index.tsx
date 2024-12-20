import { Container, ImageWrapper, Footer, TitleContainer, PriceContainer } from './styles'
import SpicedMint from '../../assets/spiced-mint-mobile.png'

export function Product() {
    return (
        <Container>
            <ImageWrapper>
                <img src={SpicedMint} alt="" />
            </ImageWrapper>
            <Footer>
                <TitleContainer>
                    <span>Spiced Mint</span>
                </TitleContainer>
                <PriceContainer>
                    <span>9.99$</span>
                </PriceContainer>
            </Footer>
        </Container>
    )
}
