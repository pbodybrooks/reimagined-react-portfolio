import { NavBarContainer, NavButton } from './style';
import React from 'react';


export const Navigation = ({
    onPageClick,
    pages
}) => {
    return (
        <NavBarContainer>
            {pages.map(page => (
                <NavButton onClick={() => onPageClick(page.key)}>{page.displayName}</NavButton>
            ))}
        </NavBarContainer>
    )
}