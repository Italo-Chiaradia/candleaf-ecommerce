import { Container } from './styles.ts'
import React from 'react'

interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
}

export function Button({onClick, disabled, children}: ButtonProps) {
    return (
        <Container 
            onClick={onClick} 
            disabled={disabled}
        >
            {children}
        </Container>
    )
}
