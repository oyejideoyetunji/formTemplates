import { isEmpty } from "../../lib/validations";
import { PositionWrapper } from "../wrappers";
import { Span } from "../typography";
import Colors from "../../lib/colors";
import React, { ChangeEvent } from "react";
import styled from "styled-components";


const SelectComp = styled.select<{
    hasLabel: boolean;
    radius?: string;
}>`
    display: block;
    ${({ hasLabel }) => hasLabel && "margin-top: 4px"};
    border: 1px solid ${Colors.borderGrey};
    padding: 7px 12px;
    width: 100%;
    outline: none;
    border-radius: ${({ radius }) => radius || "2px"};
    background-color: transparent;

    &:focus {
        border: 1px solid ${Colors.Primary};
    }
`;

const Wrapper = styled.div<{ width?: string; }>`
    width: ${({ width }) => width || "100%"};
    display: flex;
    flex-direction: column;
    position: relative;
`;

const OnBorderLabelWrapper = styled(PositionWrapper)`
    background-color: ${Colors.white};
    padding: 0 4px;
`;

type Option = {
    label: string;
    value: string | number;
}

interface SelectProps {
    options: Option[];
    value: string | number;
    width?: string;
    name?: string;
    label?: string;
    onBorderLabel?: string;
    radius?: string;
    onChange(event: ChangeEvent<HTMLSelectElement>): void;
}

export default function Select(props: SelectProps) {

    return (
        <Wrapper width={props.width}>
            {!isEmpty(props.onBorderLabel) && (
                <OnBorderLabelWrapper
                    width="fit-content"
                    height="fit-content"
                    left="10px"
                    top="-12px"
                >
                    <Span colour={Colors.GreyText} fontWeight="300" fontSize="14px">
                        {props.onBorderLabel}
                    </Span>
                </OnBorderLabelWrapper>
            )}
            {!isEmpty(props.label) && <Span fontSize="14px">{props.label}</Span>}
            <SelectComp
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                hasLabel={!isEmpty(props.label)}
                radius={props.radius}
            >
                {props.options.map(option => <option
                    value={option.value} key={option.value}
                >
                    {option.label}
                </option>)}
            </SelectComp>
        </Wrapper>
    )
}
