import { FlexWrapper, IconWrapper } from "../wrappers";
import { setAlphabeticOrderSortKey } from "../../store/slices/templateAlphabeticOrderSort";
import { setDateSortKey } from "../../store/slices/templatesDateSort";
import { setTemplatesCategory } from "../../store/slices/templatesCategory";
import { setTemplatesSearchValue } from "../../store/slices/templateSearch";
import { SortKey, TemplateCategory } from "../../lib/types";
import { sortOptions, templatesCategoryOptions } from "../../static/options";
import { Span } from "../typography";
import { useAppDispatch, useAppSelector } from "../../store";
import Colors from "../../lib/colors";
import Input from "../input";
import React, { ChangeEvent } from "react";
import Select from "../select";
import styled from "styled-components";

const SearchBlockWrapper = styled(FlexWrapper)`
    flex-direction: column;

    @media only screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`;

const SortColumnWrapper = styled(FlexWrapper)`
    flex-direction: column;

    @media only screen and (min-width: 768px) {
        flex-direction: row;
        align-items: center;
    }

    @media only screen and (min-width: 1024px) {
        justify-content: flex-end;
    }
`;

const SortKeysWrapper = styled(FlexWrapper)`
    flex-wrap: wrap;

    > *{
        margin: 8px 0;
        width: 150px;
        padding-right: 6px;
    }

    @media only screen and (min-width: 768px) {
        flex-wrap: nowrap;
        padding-left: 12px;

        > :last-child {
            padding-right: 0;
        }
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
                        >
                            <i className="fas fa-search" />
                        </IconWrapper>
                    </FlexWrapper>
                }
                childNodeWidth="30px"
                childNodeTop="9px"
                childNodeRight="8px"
            />
            <SortColumnWrapper Py="24px">
                <Span colour={Colors.GreyText} fontSize="14px" fontWeight="300">
                    Sort by:
                </Span>
                <SortKeysWrapper align="center" Py="8px">
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
            </SortColumnWrapper>
        </SearchBlockWrapper>
    )
}

export default TemplateListingSearchHeader
