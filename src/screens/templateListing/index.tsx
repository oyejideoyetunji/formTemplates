import { fetchAllTemplates } from "../../store/slices/allTemplates";
import { FlexWrapper, IconWrapper } from "../../components/wrappers";
import { getPageEndIndex, getPageStartIndex, usePageItems } from "../../lib/utils/pagination";
import { H2, P, Span } from "../../components/typography";
import { isEmpty } from "../../lib/validations"
import { ITemplate } from "../../lib/types";
import { templateListingCallout } from "../../static/text";
import { useAppDispatch, useAppSelector } from "../../store";
import { useFilterTemplatesByName } from "../../lib/utils/filter/templates";
import Colors from "../../lib/colors";
import NotificationCard from "../../components/notificationCard";
import Pagination from "../../components/pagination";
import React, { useEffect } from "react";
import styled from "styled-components";
import TemplateListingGrid from "../../components/templateListingGrid";
import TemplateListingSearchHeader from "../../components/templateListingSearchBlock";

export const ScreenWraper = styled.main`
    width: 100%;
    margin: 20px 0 20px;
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
    const dispatch = useAppDispatch()

    useEffect(() => {
        let isMounted = true
        if (isMounted) {
            dispatch(fetchAllTemplates())
        }

        return () => { isMounted = false }
    }, [fetchAllTemplates])

    const {
        allTemplates: {
            templates,
            categorisedTemplates,
            fetchingTemplates,
            fetchTemplatesError,
        },
        templatesPagination: {
            pageSize,
            currentPageIndex,
        },
        templatesCategory: { category: templateCategory },
        templateSearch: { searchValue },
    } = useAppSelector(state => state)

    const [searchedTemplates] = useFilterTemplatesByName({
        list: categorisedTemplates,
        name: searchValue,
    })

    const [pageItems] = usePageItems<ITemplate>({
        startIndex: getPageStartIndex({ pageSize, currentPageIndex }),
        endIndex:   getPageEndIndex({ pageSize, currentPageIndex }),
        list:       searchedTemplates,
    })

    return (
        <ScreenWraper>
            <TemplateListingSearchHeader />
            <FlexWrapper width="100%" Py="18px">
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
                    {`${templateCategory} Templates`}
                </H2>
                <Span
                    colour={Colors.GreyText}
                >
                    {`${searchedTemplates.length} templates`}
                </Span>
            </FlexWrapper>

            <FlexWrapper
                width="100%"
                height="100vh"
                overflowY="auto"
                Py="18px"
                className="base-scroll"
            >
                {
                    fetchingTemplates
                        ? (
                            <FlexWrapper width="100%" justify="center">
                                <IconWrapper fontSize="3rem" color={Colors.Primary}>
                                    <i className="fas fa-spinner fa-spin" />
                                </IconWrapper>
                            </FlexWrapper>
                        )
                        : !isEmpty(fetchTemplatesError)
                            ? (
                                <FlexWrapper width="100%" justify="center" Py="18px">
                                    <P color={Colors.Danger}>
                                        {fetchTemplatesError}
                                    </P>
                                </FlexWrapper>
                            )
                            : templates.length
                                ? pageItems
                                    ? (
                                        <TemplateListingGrid templates={pageItems} />
                                    ) :
                                    (
                                        <FlexWrapper width="100%" justify="center" Py="18px">
                                            <P
                                                color={Colors.GreyText}
                                            >
                                                Empty search results
                                            </P>
                                        </FlexWrapper>
                                    )
                                : (
                                    <FlexWrapper width="100%" justify="center" Py="18px">
                                        <P
                                            color={Colors.GreyText}
                                        >
                                            No template record found
                                        </P>
                                    </FlexWrapper>
                                )
                }
            </FlexWrapper>
            <Pagination />
        </ScreenWraper>
    )
}

export default TemplateListing
