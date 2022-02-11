import { PositionWrapper } from "../wrappers";
import { Span } from "../typography";
import Colors from "../../lib/colors";
import React, { InputHTMLAttributes, ReactNode } from "react";
import styled from "styled-components";

const StyledInput = styled.input<{
    hasLabel?: boolean;
    childNodeWidth?: string;
    childNodeLeft?: string
    childNodeRight?: string
}>`
    display: block;
    width: 100%;
    ${({ hasLabel }) => hasLabel && "margin-top: 4px"};
    padding: 9px ${({ childNodeRight, childNodeWidth }) => childNodeRight ? childNodeWidth : "12px"
} 9px ${({ childNodeLeft, childNodeWidth }) => childNodeLeft ? childNodeWidth : "12px"
};
    outline: none;
    border: 1px solid ${Colors.borderGrey};
    border-radius: 2px;

    &:focus {
        border: 1px solid ${Colors.Primary};
    }

`;


const InputWrapper = styled.div`
    width: 100%;
    height: fit-content;
    position: relative;
`;

const Wrapper = styled.div<{ width?: string; }>`
    width: ${({ width }) => width || "100%"};
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
`;

interface InputProps {
    label?: string;
    width?: string;
    childNode?: ReactNode;
    childNodeWidth?: string;
    childNodeTop?: string;
    childNodeBottom?: string
    childNodeLeft?: string
    childNodeRight?: string
}

export default function Input(props: InputProps & InputHTMLAttributes<HTMLInputElement>) {

    const {
        width,
        label,
        childNode, childNodeWidth, childNodeTop, childNodeBottom, childNodeLeft, childNodeRight,
        ...rest
    } = props

    return (
        <Wrapper width={width}>
            {label && <Span fontSize="14px">{label}</Span>}
            <InputWrapper>
                <PositionWrapper
                    width={childNodeWidth || "fit-content"}
                    top={childNodeTop} bottom={childNodeBottom}
                    left={childNodeLeft} right={childNodeRight}
                >
                    {childNode}
                </PositionWrapper>
                <StyledInput
                    hasLabel={!!label}
                    childNodeWidth={childNodeWidth}
                    childNodeLeft={childNodeLeft}
                    childNodeRight={childNodeRight}
                    {...rest}
                />
            </InputWrapper>
        </Wrapper>
    )
}
