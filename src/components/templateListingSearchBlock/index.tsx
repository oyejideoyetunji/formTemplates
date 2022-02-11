import { FlexWrapper, IconWrapper } from "../../components/wrappers";
import { Span } from "../../components/typography";
import Colors from "../../lib/colors";
import Input from "../../components/input";
import React, { ChangeEvent } from "react";
import Select from "../../components/select";
import styled from "styled-components";

const SearchBlockWrapper = styled(FlexWrapper)`
    flex-direction: column;

    @media only screen and (min-width: 860px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

const SortKeysWrapper = styled(FlexWrapper)`
    flex-wrap: wrap;

    > span {
        display: none;
        padding-right: 16px;
    }

    > *:not(span) {
        padding-right: 6px;
        margin: 8px 0;
        width: 120px;
    }

    @media only screen and (min-width: 768px) {
        flex-wrap: nowrap;

        > *:not(span) {
            width: 150px;
        }

        > span {
            display: inline-block;
        }
    }

    @media only screen and (min-width: 860px) {
        justify-content: flex-end;
    }
`;

interface TemplateListingSearchHeaderProps {
    onTemplateCategoryChange(event: ChangeEvent<HTMLSelectElement>): void
}

const TemplateListingSearchHeader = (
    props: TemplateListingSearchHeaderProps,
) => {

    const noop = () => { null }

    return (
        <SearchBlockWrapper
            width="100%"
        >
            <FlexWrapper align="center">
                <Input
                    width="260px"
                    placeholder="Search template"
                    childNode={
                        <FlexWrapper width="30px" justify="flex-end">
                            <IconWrapper
                                fontWeight="300" fontSize="15px"
                                color={Colors.GreyText}
                                cursor="pointer"
                            >
                                <i className="fas fa-search" />
                            </IconWrapper>
                        </FlexWrapper>
                    }
                    childNodeWidth="30px"
                    childNodeTop="9px"
                    childNodeRight="8px"

                />
            </FlexWrapper>
            <SortKeysWrapper Py="24px" align="center">
                <Span colour={Colors.GreyText} fontSize="14px" fontWeight="300">
                    Sort by:
                </Span>
                <Select
                    options={[]}
                    value=""
                    onChange={props.onTemplateCategoryChange}
                    onBorderLabel="Category"
                />
                <Select
                    options={[]}
                    value=""
                    onChange={noop}
                    onBorderLabel="label"
                />
                <Select
                    options={[]}
                    value=""
                    onChange={noop}
                    onBorderLabel="label"
                />
            </SortKeysWrapper>
        </SearchBlockWrapper>
    )
}

export default TemplateListingSearchHeader
