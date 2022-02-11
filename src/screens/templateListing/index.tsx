import { FlexWrapper } from "../../components/wrappers";
import { H2, Span } from "../../components/typography";
import { TemplateCategory } from "../../lib/types";
import { templateListingCallout } from "../../static/text";
import { Templates } from "../../templates";
import Colors from "../../lib/colors";
import NotificationCard from "../../components/notificationCard";
import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import TemplateListingGrid from "../../components/templateListingGrid";
import TemplateListingSearchHeader from "../../components/templateListingSearchBlock";

export const ScreenWraper = styled.main`
    width: 100%;
    margin: 40px 0;
    padding-left: 1rem;
    padding-right: 1rem;

    > * {
        padding-left: 1rem;
        padding-right: 1rem;

        @media only screen and (min-width: 768px) {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
        }

        @media only screen and (min-width: 1024px) {
            padding-left: 2rem;
            padding-right: 2rem;
        }

        @media only screen and (min-width: 1280px) {
            padding-left: 3rem;
            padding-right: 3rem;
        }

        @media only screen and (min-width: 1536px) {
            padding-left: 4rem;
            padding-right: 4rem;
        }
    }
`;

const TemplateListing = () => {

    const [templateCategory, setTemplateCategory] = useState(TemplateCategory.ALL);
    const [templates] = useState([])

    const onTemplateCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target
        setTemplateCategory(value as TemplateCategory)
    }

    return (
        <ScreenWraper>
            <TemplateListingSearchHeader
                onTemplateCategoryChange={onTemplateCategoryChange}
            />
            <FlexWrapper width="100%" Py="38px">
                <NotificationCard
                    text={templateListingCallout}
                />
            </FlexWrapper>
            <FlexWrapper
                width="100%"
                align="center"
                justify="space-between"
                Py="18px"
            >
                <H2
                    fontSize="1.2rem"
                    fontSizeSm="1rem"
                    fontWeight="400"
                >
                    {templateCategory}
                </H2>
                <Span
                    colour={Colors.GreyText}
                >
                    {`${templates.length} templates`}
                </Span>
            </FlexWrapper>

            <FlexWrapper
                width="100%"
                height="100vh"
                overflowY="auto"
                Py="28px"
                className="base-scroll"
            >
                <TemplateListingGrid templates={Templates}/>
            </FlexWrapper>
        </ScreenWraper>
    )
}

export default TemplateListing
