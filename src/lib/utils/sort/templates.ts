import { ITemplate, SortKey } from "../../types";

const UNIT = 1

interface SortTemplatesProps{
    list: ITemplate[]
    key: SortKey
}
const sortTemplatesByNameInAscending = (list: ITemplate[]) => list.sort(
    (itmA, itmB) => itmA.name.toLowerCase() > itmB.name.toLowerCase()
        ? UNIT
        : -UNIT,
)

const sortTemplatesByNameInDescending = (list: ITemplate[]) => list.sort(
    (itmA, itmB) => itmA.name.toLowerCase() > itmB.name.toLowerCase()
        ? -UNIT
        : UNIT,
)

const sortTemplatesByDateInAscending = (list: ITemplate[]) => list.sort(
    (itmA, itmB) => new Date(itmA.created).getTime() - new Date(itmB.created).getTime(),
)

const sortTemplatesByDateInDescending = (list: ITemplate[]) => list.sort(
    (itmA, itmB) => new Date(itmB.created).getTime() - new Date(itmA.created).getTime(),
)

export const sortTemplatesByName = ({ list, key }: SortTemplatesProps) => {
    const sortTemplatesByNameObj = {
        [SortKey.Default]:    (list: ITemplate[]) => list,
        [SortKey.Ascending]:  (list: ITemplate[]) => sortTemplatesByNameInAscending(list),
        [SortKey.Descending]: (list: ITemplate[]) => sortTemplatesByNameInDescending(list),
    }

    return sortTemplatesByNameObj[key](list)
}

export const sortTemplatesByDate = ({ list, key }: SortTemplatesProps) => {
    const sortTemplatesByDateObj = {
        [SortKey.Default]:    (list: ITemplate[]) => list,
        [SortKey.Ascending]:  (list: ITemplate[]) => sortTemplatesByDateInAscending(list),
        [SortKey.Descending]: (list: ITemplate[]) => sortTemplatesByDateInDescending(list),
    }

    return sortTemplatesByDateObj[key](list)
}
