import { Container, PhraseText, StarsContainer } from './styles.ts'
import Avatar from '../../assets/avatar.png'
import { Star } from '@phosphor-icons/react'

interface TestimonialCardProps {
    data: {
        id: number,
        name: string,
        phrase: string,
        rating: number
    }
}

export function TestimonialCard({data}: TestimonialCardProps) {
    const stars = Array.from({length: 5}, (_, index) => index < data.rating);
    
    return (
        <Container>
            <img src={Avatar} />
            <StarsContainer>
                {
                    stars.map((filled, index) => (
                        filled ? 
                            <Star key={index} size={18} weight="fill" fill="#56B280" /> :
                            <Star key={index} size={18} weight="thin" fill="#56B280" />
                    ))
                }
            </StarsContainer>
            <PhraseText>
                {data.phrase}
            </PhraseText>
            <span>{data.name}</span>
        </Container>   
    )
}
