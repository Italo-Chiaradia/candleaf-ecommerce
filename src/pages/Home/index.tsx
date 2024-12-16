import { Container, Hero, HeroInnerContainer } from './styles'
import { Header } from '../../components/Header'
import BgImage from '../../assets/bg-image.png'
import BgImageDesktop from '../../assets/bg-image-desktop.png'
import {useMediaQuery} from 'react-responsive'
export function Home() {
    const isDesktop = useMediaQuery({query: '(min-width: 768px)'});
    return (
        <Container>
            <Header />
            <Hero>
                {
                    !isDesktop ? (
                        <img src={BgImage} />
                    ) : (
                        <img src={BgImageDesktop} />
                    )
                }    
                
                <HeroInnerContainer>
                    <div>
                        <h1>
                            <span>🌱</span> 
                            The nature candle
                        </h1>
                        <p>
                            All hand made with natural soy wax, Candleaf is a companion for all your pleasure moments
                        </p>
                    </div>
                    <button>
                        Discovery our collection
                    </button>
                </HeroInnerContainer>
            </Hero>
        </Container>
    )
}
