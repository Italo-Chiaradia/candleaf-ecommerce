import { 
    Container, 
    Hero, 
    HeroInnerContainer, 
    SectionProducts, 
    ProductsContainer, 
    SectionBenefits, 
    SectionBenefitsContainer,
    SectionTestimonials,
    SectionTestimonialsContainer,
    TestimonialsWrapper,
    SectionPopularProducts,
    SectionPopularProductsContainer
} from './styles'

import { Header } from '../../components/Header'
import { Product } from '../../components/Product'
import { useState } from 'react'
import { CheckCircle } from '@phosphor-icons/react'
import { useMediaQuery } from 'react-responsive'
import { TestimonialCard } from '../../components/TestimonialCard'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import BgImage from '../../assets/bg-image.png'
import BgImageDesktop from '../../assets/bg-image-desktop.png'
import SectionBenefitsImage from '../../assets/section-benefits.png'
import SectionBenefitsImageDesktop from '../../assets/section-benefits-desktop.png'

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
const testimonials = [
    {   
        id: 1,
        name: "Luisa",
        phrase: "“I love it! No more air fresheners”",
        rating: 5
    },
    {
        id: 2,
        name: "Eduardo",
        phrase: "“Recommended for everyone”",
        rating: 5
    },
    {
        id: 3,
        name: "Mart",
        phrase: "“Looks very natural, the smell is awesome”",
        rating: 5
    },
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
                    <h2>Products</h2>
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
                    <header>
                        <h2>Clean and fragrant soy wax</h2>
                        <p>Made for your home and for your wellness</p>
                    </header>
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
            <SectionTestimonials>
                <SectionTestimonialsContainer>
                    <header>
                        <h2>Testimonials</h2>
                        <p>Some quotes from our happy customers</p>
                    </header>
                    <TestimonialsWrapper>
                        {
                            !isDesktop ? (
                                <Swiper
                                    slidesPerView={1.25}
                                    spaceBetween={24}
                                    breakpoints={{
                                    450: {
                                        slidesPerView: 1.5,
                                        spaceBetween: 24,
                                    },
                                    500: {
                                        slidesPerView: 2.25, // Exibe 1 slide por vez
                                        spaceBetween: 24, // Espaço entre os slides
                                    },
                                    685: {
                                        slidesPerView: 2.5,
                                        spaceBetween: 24,
                                    }
                                    }}
                                >
                                    {
                                        testimonials.map(testimonial => (
                                            <SwiperSlide key={testimonial.phrase}>
                                                <TestimonialCard
                                                    key={testimonial.phrase}
                                                    data={testimonial}
                                                />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            ) : (
                                testimonials.map(testimonial => (
                                    <TestimonialCard
                                        key={testimonial.phrase}
                                        data={testimonial}
                                    />
                                
                                ))
                            )

                        }
                    </TestimonialsWrapper>
                    
                    
                </SectionTestimonialsContainer>
            </SectionTestimonials>
            <SectionPopularProducts>
                <SectionPopularProductsContainer>
                    <header>
                        <h2>Popular</h2>
                        <p>Our top selling product that you may like</p>
                    </header>
                    <ProductsContainer>
                        {
                            candles.slice(0, 4).map(candle => {
                                return (
                                    <Product
                                        key={candle.title}
                                        product={candle}
                                    />
                                )
                            })
                        }
                    </ProductsContainer>
                </SectionPopularProductsContainer>
            </SectionPopularProducts>
        </Container>
    )
}
