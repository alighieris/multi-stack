import React from 'react';
import { PageTitleContainer, PageTitleStyled, PageSubtitleStyled } from './PageTitle.style';

interface PageTitleProps{
    title: string;
    subtitle?: string | JSX.Element;
}
/* '?' para indicar elemento opicional */
const PageTitle: React.FC<PageTitleProps> = (props) => {

    return( 
        <PageTitleContainer>
            <PageTitleStyled> 
                {props.title}
            </PageTitleStyled>
            <PageSubtitleStyled> 
                {props.subtitle}   
            </PageSubtitleStyled>
            {props.children}      
        </PageTitleContainer>
    )
}
/* children é texto não definido, que é passado dentro das tags de PageTitle */

export default PageTitle;