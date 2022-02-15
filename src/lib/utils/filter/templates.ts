import { isEmpty } from "../../validations";
import { ITemplate, TemplateCategory } from "../../types";
import { useMemo } from "react";

interface FilterTemplatesByCategoryProps{
    list: ITemplate[]
    category: TemplateCategory
}

interface FilterTemplatesByNameProps {
    list: ITemplate[]
    name: string
}

export const filterTemplatesByCategory = ({
    list,
    category,
}: FilterTemplatesByCategoryProps) => category === TemplateCategory.ALL
    ? list
    : list.filter(
        template => template.category.includes(category),
    )

export const filterTemplatesByName = ({
    list,
    name,
}: FilterTemplatesByNameProps) => isEmpty(name)
    ? list
    : list.filter(
        template => template.name.toLowerCase().includes(name.toLowerCase()),
    )

export const useFilterTemplatesByName = ({
    list,
    name,
}: FilterTemplatesByNameProps) => {
    const filteredTemplates = useMemo(
        () => filterTemplatesByName({
            list,
            name,
        }),
        [list, name],
    )

    return [filteredTemplates]
}
