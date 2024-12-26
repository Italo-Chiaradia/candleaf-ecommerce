import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
`

export const Hero = styled.div`
    z-index: 1;
    position: relative;
    display: grid;
    place-items: center;
    width: 100%;
    height: 100vh;
    padding: 76px 15px 0;
    > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
`

export const HeroInnerContainer = styled.div`
    background-color: rgba(247, 248, 250, .8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 40px 20px;
    text-align: center;
    color: #1D252C;
    > div {
        max-width: 540px;
    }
    h1 {
        font-size: 40px;
        line-height: 1.3;
        font-weight: 500; 
        margin-bottom: 10px;
    }
    p {
        font-size: 17px;
        margin-bottom: 35px;
    }
    h1 > span {
        display: block;
    }
    @media(min-width: 768px) {
        padding: 40px 60px;
    }
    
`

export const SectionProducts = styled.section`
    max-width: 1111px;
    margin: 0 auto;
    padding: 50px 14px;
    text-align: center;
    h2 {
        font-size: 40px;
        font-weight: 500;
        margin-bottom: 15px;
        color: #0B254B;
    }
    p {
        font-size: 18px;
        font-weight: 500;
        color: #5E6E89;
    }
    > button {
        margin-top: 64px;
    }
`

export const ProductsContainer = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (min-width: 1224px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: start;
    }

`

export const SectionBenefits = styled.section`
    width: 100%;
    padding: 100px 14px;
    background-color: #F7F8FA;

    @media (min-width: 1224px) {
        padding-block: 133px;
    }
`

export const SectionBenefitsContainer = styled.div`
    max-width: 1111px;
    margin: 0 auto;
    display: grid;
    grid-template-areas:
        "header header"
        "image image"
        "benefits benefits";
    grid-row-gap: 64px;
    > header {
        grid-area: header;
        text-align: center;
    }
    > img {
        grid-area: image;
        max-width: 100%;
        height: auto;
        margin: 0 auto;
        box-shadow: 0 4px 94px rgba(123, 123, 123, .35);
    }
    > div:last-child {
        width: fit-content;
        margin: 0 auto;
        grid-area: benefits;
        text-align: center;
    }
    > div:last-child > ul {
        text-align: left;
    }
    > div:last-child > button {
        margin-top: 64px;
    }
    h2 {
        font-size: 40px;
        font-weight: 500;
        color: #1D252C;
        margin-bottom: 16px;
    }
    p {
        font-size: 16px;
        color: ${({theme}) => theme.green};
    }
    li {
        display: flex;
        gap: 8px;
    }
    li svg {
        margin-top: 4px;
    }
    li + li {
        margin-top: 24px;
    }

    @media (min-width: 1224px) {
        grid-template-columns: 540px 540px;
        grid-template-areas:
            "header image"
            "header image"
            "benefits image";
        align-items: center;
        grid-column-gap: 38px;
        grid-row-gap: 38px;
        > header {
            text-align: left;
        }
        > div:last-child {
            width: 100%;
            margin: 0;
            text-align: left;
        }
    }

`

export const SectionTestimonials = styled.section`
    width: 100%;
    padding: 100px 0;
    text-align: center;
    background-color: rgba(86,178,128, .10);

`

export const SectionTestimonialsContainer = styled.section`
    header {
        text-align: center;
        margin-bottom: 47px;
    }
    header > h2 {
        font-size: 40px;
        font-weight: 500;
        color: #0B254B;
    }
    header > p {
        font-size: 18px;
        font-weight: 500;
        color: #5E6E89;
    }
`

export const TestimonialsWrapper = styled.div`
    @media (min-width: 768px) {
        display: flex;
        gap: 32px;
        justify-content: center;
        flex-wrap: wrap;
    }
`

export const SectionPopularProducts = styled.section`
    width: 100%;
    padding: 50px 14px 100px 14px;
    text-align: center;
`

export const SectionPopularProductsContainer = styled.div`
    max-width: 1111px;
    margin: 0 auto;
    header {
        text-align: center;
        margin-bottom: 47px;
    }
    header > h2 {
        font-size: 40px;
        font-weight: 500;
        color: #0B254B;
    }
    header > p {
        font-size: 18px;
        font-weight: 500;
        color: #5E6E89;
    }

`
