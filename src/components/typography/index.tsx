import styled from "styled-components";

interface TypographyProps {
    colour?: string;
    cursor?: string;
    fontWeight?: string;
    block?: boolean;
    fontSize?: string;
    fontSizeSm?: string;
    width?: string;
    textAlign?: "left" | "right" | "center";
    wordSpacing?: string;
}

export const H1 = styled.h1<TypographyProps>`
    font-size: ${({ fontSizeSm }) => fontSizeSm || "1.8rem"};
    font-weight: ${props => props.fontWeight || "bold"};
    ${props => props.colour && `color: ${props.colour}`};
    ${props => props.block && "display: block"};
    text-align: ${props => props.textAlign};
    ${props => props.cursor && `cursor: ${props.cursor}`};
    ${props => props.width && `width: ${props.width}`};

    @media only screen and (min-width: 768px){
        font-size: ${props => props.fontSize || "2.8rem"};
    }
`;

export const H2 = styled.h2<TypographyProps>`
    font-size: ${({ fontSizeSm }) => fontSizeSm || "1.1rem"};
    font-weight: ${props => props.fontWeight || "bold"};
    ${props => props.colour && `color: ${props.colour}`};
    ${props => props.block && "display: block"};
    text-align: ${props => props.textAlign};
    ${props => props.cursor && `cursor: ${props.cursor}`};
    ${props => props.width && `width: ${props.width}`};

    @media only screen and (min-width: 768px){
        font-size: ${props => props.fontSize || "1.5rem"};
    }
`;

export const P = styled.p<TypographyProps>`
font-size: ${({ fontSizeSm }) => fontSizeSm || "15px"};
    font-weight: ${props => props.fontWeight || "normal"};
    ${props => props.colour && `color: ${props.colour}`};
    ${props => props.block && "display: block"};
    text-align: ${props => props.textAlign};
    ${props => props.cursor && `cursor: ${props.cursor}`};
    ${props => props.width && `width: ${props.width}`};

    @media only screen and (min-width: 768px){
        font-size: ${props => props.fontSize || "16px"};
    }
`;

export const Span = styled.span<TypographyProps>`
    font-size: ${props => props.fontSizeSm || "14px"};
    font-weight: ${props => props.fontWeight || "normal"};
    ${props => props.colour && `color: ${props.colour}`};
    ${props => props.block && "display: block"}
    text-align: ${props => props.textAlign};
    ${props => props.cursor && `cursor: ${props.cursor}`};
    ${props => props.width && `width: ${props.width}`};
    ${({ wordSpacing }) => wordSpacing && `word-spacing: ${wordSpacing}`};

    @media only screen and (min-width: 768px){
        font-size: ${props => props.fontSize || "15px"};
    }
`;
