import { useMemo } from "react"

export const pageNumberToIndexOffset = 1
type GetPageIndexProps = {pageSize: number, currentPageIndex: number}
interface GetPageItemsProps<T>{startIndex: number, endIndex: number, list: T[]}



export const getPageNumber = (index: number, totalPages: number) =>
    totalPages && index + pageNumberToIndexOffset

export const getTotalPages = (listSize: number, pageSize: number) =>
    Math.ceil(listSize / pageSize)

export const getPageStartIndex = ({
    pageSize,
    currentPageIndex,
}: GetPageIndexProps) => pageSize * currentPageIndex

export const getPageEndIndex = ({
    pageSize,
    currentPageIndex,
}: GetPageIndexProps) => pageSize * currentPageIndex + pageSize

const getPageItems = <T>({
    startIndex,
    endIndex,
    list,
}: GetPageItemsProps<T>) => list.slice(startIndex, endIndex)

export const usePageItems = <T>({
    startIndex,
    endIndex,
    list,
}: GetPageItemsProps<T>) => {
    const pageItems = useMemo(
        () => getPageItems({ startIndex, endIndex, list }),
        [startIndex, endIndex, list],
    )

    return [pageItems]
}
