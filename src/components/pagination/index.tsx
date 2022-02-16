import { FlexWrapper, IconWrapper } from "../wrappers";
import { getPageNumber, getTotalPages, pageNumberToIndexOffset } from "../../lib/utils/pagination";
import { setCurrentPageIndex } from "../../store/slices/templatesPagination";
import { Span } from "../typography";
import { useAppDispatch, useAppSelector } from "../../store";
import { useFilterTemplatesByName } from "../../lib/utils/filter/templates";
import Colors from "../../lib/colors";
import PlainButton from "../button/plain";
import React from "react";
import styled from "styled-components";



const PaddedText = styled(Span)`
    padding: 4px;
`

const NavTexts = styled(PaddedText)`
    display: none;

    @media only screen and (min-width: 768px) {
        display: inline-block;
    }
`;

const PaginationNavWrapper = styled(IconWrapper)<{
    disabled: boolean
}>`
    padding: 8px 12px;
    cursor: ${({ disabled }) => disabled ? "default" : "pointer"};
    &:hover {
        ${({ disabled }) => !disabled && `background: ${Colors.blueBackgroundAlt}`};
    }
`

const Pagination = () => {
    const dispatch = useAppDispatch()

    const {
        allTemplates: { categorisedTemplates },
        templatesPagination: {
            currentPageIndex,
            pageSize,
        },
        templateSearch: { searchValue },
    } = useAppSelector(state => state)

    const [searchedTemplates] = useFilterTemplatesByName({
        list: categorisedTemplates,
        name: searchValue,
    })

    const totalPages = getTotalPages(searchedTemplates.length, pageSize)
    const pageNumber = getPageNumber(currentPageIndex, totalPages)

    const onNextPage = () => {
        if (currentPageIndex < totalPages - pageNumberToIndexOffset) {
            const increament = 1
            dispatch(setCurrentPageIndex(currentPageIndex + increament))
        }
    }

    const onPrevPage = () => {
        if (currentPageIndex) {
            const decreament = 1
            dispatch(setCurrentPageIndex(currentPageIndex - decreament))
        }
    }

    return (
        <FlexWrapper
            width="100%"
            align="center"
            justify="space-between"
            Px="16px"
            Py="28px"
        >
            <PaginationNavWrapper
                disabled={!currentPageIndex}
                onClick={onPrevPage}
            >
                {!!currentPageIndex && (
                    <i className="fas fa-chevron-left" />
                )}
                <NavTexts>
                    Previous
                </NavTexts>
            </PaginationNavWrapper>
            <FlexWrapper
                width="fit-content"
                align="center"
            >
                <PlainButton Px="10px">
                    {pageNumber}
                </PlainButton>
                <PaddedText>of</PaddedText>
                <PlainButton Px="10px" borderColor="none">
                    {totalPages}
                </PlainButton>
            </FlexWrapper>
            <PaginationNavWrapper
                disabled={!(currentPageIndex < totalPages - pageNumberToIndexOffset)}
                onClick={onNextPage}
            >
                <NavTexts>
                    Next
                </NavTexts>
                {currentPageIndex < totalPages - pageNumberToIndexOffset && (
                    <i className="fas fa-chevron-right" />
                )}
            </PaginationNavWrapper>
        </FlexWrapper>
    )
}

export default Pagination
