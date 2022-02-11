import { FlexWrapper, PositionWrapper } from "../wrappers";
import { H2, P, Span } from "../typography";
import { ITemplate } from "../../lib/types";
import Colors from "../../lib/colors";
import React from "react";
import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 90%;
    padding: 12px 18px;
    height: 250px;
    border-radius: 2px;
    background: #FFFFFF;
    position: relative;
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);

    @media only screen and (min-width: 640px) {
        width: 100%;
    }
`;

const CardHeader = styled(H2)`
    text-transform:capitalize;
`;

interface TemplateCardProps {
    template: ITemplate
}

const TemplateCard = ({ template }: TemplateCardProps) => (
    <CardWrapper>
        <CardHeader
            fontSize="18px"
            fontSizeSm="16px"
            fontWeight="bold"
        >
            {template?.name}
        </CardHeader>
        <FlexWrapper
            Py="8px"
        >
            <P
                fontSize="15px"
                fontSizeSm="13px"
                fontWeight="400"
            >
                {template?.description}
            </P>
        </FlexWrapper>

        <PositionWrapper
            bg={Colors.lightGreyBackground}
            width="calc(100% - 36px)"
            bottom="12px"
            left="18px"
            Px="8px"
            Py="4px"
        >
            <a href={template?.link} target={"_blank"} rel="noreferrer">
                <Span
                    fontSize="15px"
                    fontSizeSm="13px"
                    fontWeight="400"
                    colour={Colors.green}
                >
                    Use template
                </Span>
            </a>
        </PositionWrapper>
    </CardWrapper>
)

export default TemplateCard
