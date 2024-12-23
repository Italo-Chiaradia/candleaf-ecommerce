import { Container, ImageWrapper, Footer, TitleContainer, PriceContainer } from './styles'
import SpicedMint from '../../assets/candles/spiced-mint-mobile.png'

interface productProps {
    product: {
        id: number,
        title: string,
        price: string,
        details: {
            wax: string,
            fragrance: string,
            burningTime: string,
            dimension: string,
            weight: string
        }
    }
}

export function Product({product}: productProps) {
    return (
        <Container>
            <ImageWrapper>
                <img src={SpicedMint} alt="" />
            </ImageWrapper>
            <Footer>
                <TitleContainer>
                    <span>{product.title}</span>
                </TitleContainer>
                <PriceContainer>
                    <span>{product.price}</span>
                </PriceContainer>
            </Footer>
        </Container>
    )
}
