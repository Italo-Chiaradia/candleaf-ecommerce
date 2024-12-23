import { Container, Hero, HeroInnerContainer, SectionProducts, ProductsContainer, SectionBenefits, SectionBenefitsContainer } from './styles'
import { Header } from '../../components/Header'
import { Product } from '../../components/Product'
import BgImage from '../../assets/bg-image.png'
import BgImageDesktop from '../../assets/bg-image-desktop.png'
import SectionBenefitsImage from '../../assets/section-benefits.png'
import SectionBenefitsImageDesktop from '../../assets/section-benefits-desktop.png'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { CheckCircle  } from '@phosphor-icons/react'

const candles = [
    {
        id: 1,
        title: 'Spiced Mint',
        price: '9.99$',
        details: {
            wax: 'Top grade Soy wax that delivers a smoke less, consistent burn',
            fragrance: 'Premium quality ingredients with natural essentials oils',
            burningTime: '70-75 hours',
            dimension: '10cm x 5cm',
            weight: '400g'
        }

    },
    {
        id: 2,
        title: 'Sweet Strawberry',
        price: '9.99$',
        details: {
            wax: 'Top grade Soy wax that delivers a smoke less, consistent burn',
            fragrance: 'Premium quality ingredients with natural essentials oils',
            burningTime: '70-75 hours',
            dimension: '10cm x 5cm',
            weight: '400g'
        }

    },
    {
        id: 3,
        title: 'Cool Bluberries',
        price: '9.99$',
        details: {
            wax: 'Top grade Soy wax that delivers a smoke less, consistent burn',
            fragrance: 'Premium quality ingredients with natural essentials oils',
            burningTime: '70-75 hours',
            dimension: '10cm x 5cm',
            weight: '400g'
        }

    },
    {
        id: 4,
        title: 'Juicy Lemon',
        price: '9.99$',
        details: {
            wax: 'Top grade Soy wax that delivers a smoke less, consistent burn',
            fragrance: 'Premium quality ingredients with natural essentials oils',
            burningTime: '70-75 hours',
            dimension: '10cm x 5cm',
            weight: '400g'
        }

    },
    {
        id: 5,
        title: 'Fragrant Cinnamon',
        price: '9.99$',
        details: {
            wax: 'Top grade Soy wax that delivers a smoke less, consistent burn',
            fragrance: 'Premium quality ingredients with natural essentials oils',
            burningTime: '70-75 hours',
            dimension: '10cm x 5cm',
            weight: '400g'
        }

    },
    {
        id: 6,
        title: 'Summer Cherries',
        price: '9.99$',
        details: {
            wax: 'Top grade Soy wax that delivers a smoke less, consistent burn',
            fragrance: 'Premium quality ingredients with natural essentials oils',
            burningTime: '70-75 hours',
            dimension: '10cm x 5cm',
            weight: '400g'
        }

    },
    {
        id: 7,
        title: 'Clean Lavander',
        price: '9.99$',
        details: {
            wax: 'Top grade Soy wax that delivers a smoke less, consistent burn',
            fragrance: 'Premium quality ingredients with natural essentials oils',
            burningTime: '70-75 hours',
            dimension: '10cm x 5cm',
            weight: '400g'
        }

    },
    {
        id: 8,
        title: 'Whispering Embers',
        price: '9.99$',
        details: {
            wax: 'Top grade Soy wax that delivers a smoke less, consistent burn',
            fragrance: 'Premium quality ingredients with natural essentials oils',
            burningTime: '70-75 hours',
            dimension: '10cm x 5cm',
            weight: '400g'
        }

    }
]

export function Home() {
    const [quantityProducts, setQuantityProducts] = useState(4);
    const isDesktop = useMediaQuery({query: '(min-width: 768px)'});
    function toggleProductsView() {
        setQuantityProducts(prevState => prevState === candles.length ? candles.length / 2 : candles.length)
    }

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
            <SectionProducts>
                <header>
                    <h1>
                        Products
                    </h1>
                    <p>
                        Order it for you or for your beloved ones 
                    </p>
                </header>
                <ProductsContainer>
                    {
                        candles.slice(0, quantityProducts).map(candle => {
                            return (
                                <Product
                                    key={candle.title}
                                    product={candle}
                                />
                            )
                        })
                    }

                </ProductsContainer>
                    <button onClick={toggleProductsView}>
                        {quantityProducts === candles.length ? 'See less' : 'See more'}
                    </button>
            </SectionProducts>
            <SectionBenefits>
                <SectionBenefitsContainer>
                    <div>
                        <h1>Clean and fragrant soy wax</h1>
                        <p>Made for your home and for your wellness</p>
                    </div>
                    {
                        !isDesktop?(
                            <img src={SectionBenefitsImage} />
                        ) : (
                            <img src={SectionBenefitsImageDesktop} />
                        )
                    }
                    <div>
                        <ul>
                            <li>
                                <span>
                                    <CheckCircle />
                                </span>
                                <span>
                                    <strong>Eco-sustainable:</strong> All recyclable materials, 0% CO2 emissions
                                </span>
                            </li>
                            <li>
                                <span>
                                    <CheckCircle />
                                </span>
                                <span>
                                    <strong>Hyphoallergenic:</strong> 100% natural, human friendly ingredients 
                                </span>
                            </li>
                            <li>
                                <span>
                                    <CheckCircle />
                                </span>
                                <span>
                                    <strong>Handmade:</strong> All candles are craftly made with love.
                                </span>
                            </li>
                            <li>
                                <span>
                                    <CheckCircle />
                                </span>
                                <span>
                                    <strong>Long burning:</strong> No more waste. Created for last long.
                                </span>
                            </li>
                        </ul>
                        <button>
                            Learn more
                        </button>
                    </div>
                </SectionBenefitsContainer>
            </SectionBenefits>
        </Container>
    )
}
