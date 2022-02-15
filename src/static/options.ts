import { Option, SortKey, TemplateCategory } from "../lib/types";

export const templatesCategoryOptions: Option<TemplateCategory, TemplateCategory>[] =
[
    {
        label: TemplateCategory.ALL,
        value: TemplateCategory.ALL,
    },
    {
        label: TemplateCategory.Ecommerce,
        value: TemplateCategory.Ecommerce,
    },
    {
        label: TemplateCategory.Education,
        value: TemplateCategory.Education,
    },
    {
        label: TemplateCategory.Health,
        value: TemplateCategory.Health,
    },
]

export const sortOptions: Option<SortKey, SortKey>[] =
[
    {
        label: SortKey.Default,
        value: SortKey.Default,
    },
    {
        label: SortKey.Ascending,
        value: SortKey.Ascending,
    },
    {
        label: SortKey.Descending,
        value: SortKey.Descending,
    },
]
