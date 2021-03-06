import { FlexWrapper } from "../wrappers";
import { ITemplate } from "../../lib/types";
import React from "react";
import styled from "styled-components";
import TemplateCard from "../templateCard";

const Grid = styled.section`
    width: 100%;
    padding: 28px 0;
    display: grid;
    row-gap: 1.5rem;
    grid-template-columns: auto;

    @media only screen and (min-width: 640px) {
        gap: 1.5rem;
        grid-template-columns: auto auto;
    }

    @media only screen and (min-width: 1024px) {
        grid-template-columns: auto auto auto;
    }

    @media only screen and (min-width: 1400px) {
        grid-template-columns: auto auto auto;
    }

    @media only screen and (min-width: 1400px) {
        grid-template-columns: auto auto auto auto;
    }
`;

const GridCardWrapper = styled(FlexWrapper)`
    justify-content: center;

    @media only screen and (min-width: 640px) {
        justify-content: unset;
    }
`;

interface TemplateListingGridProps {
    templates: ITemplate[]
}

const TemplateListingGrid = ({ templates }: TemplateListingGridProps) => (
    <Grid>
        {templates && templates?.map(template => (
            <GridCardWrapper key={`${template?.name}${template?.created}`}>
                <TemplateCard template={template} />
            </GridCardWrapper>
        ))}
    </Grid>
)

export default TemplateListingGrid
