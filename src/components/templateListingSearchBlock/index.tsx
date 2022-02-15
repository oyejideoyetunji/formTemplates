import { FlexWrapper, IconWrapper } from "../../components/wrappers";
import { setAlphabeticOrderSortKey } from "../../store/slices/templateAlphabeticOrderSort";
import { setDateSortKey } from "../../store/slices/templatesDateSort";
import { setTemplatesCategory } from "../../store/slices/templatesCategory";
import { setTemplatesSearchValue } from "../../store/slices/templateSearch";
import { SortKey, TemplateCategory } from "../../lib/types";
import { sortOptions, templatesCategoryOptions } from "../../static/options";
import { Span } from "../../components/typography";
import { useAppDispatch, useAppSelector } from "../../store";
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

const TemplateListingSearchHeader = () => {
    const dispatch = useAppDispatch()

    const {
        templatesCategory: { category: templateCategory },
        templateSearch: { searchValue },
        templatesDateSort: { key: dateSortKey },
        templateAlphabeticOrderSort: { key: nameSortKey },
    } = useAppSelector(state => state)

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setTemplatesSearchValue(event.target.value))
    }
    const onCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setTemplatesCategory(event.target.value as TemplateCategory))
    }
    const onNameSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setAlphabeticOrderSortKey(event.target.value as SortKey))
    }
    const onDateSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setDateSortKey(event.target.value as SortKey))
    }

    return (
        <SearchBlockWrapper
            width="100%"
        >
            <FlexWrapper align="center">
                <Input
                    value={searchValue}
                    onChange={onSearchChange}
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
                    options={templatesCategoryOptions}
                    value={templateCategory}
                    onChange={onCategoryChange}
                    onBorderLabel="Category"
                />
                <Select
                    options={sortOptions}
                    value={nameSortKey}
                    onChange={onNameSortChange}
                    onBorderLabel="Order"
                />
                <Select
                    options={sortOptions}
                    value={dateSortKey}
                    onChange={onDateSortChange}
                    onBorderLabel="Date"
                />
            </SortKeysWrapper>
        </SearchBlockWrapper>
    )
}

export default TemplateListingSearchHeader
