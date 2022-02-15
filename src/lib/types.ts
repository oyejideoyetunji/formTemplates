export enum TemplateCategory {
    ALL = "All",
    Education = "Education",
    Ecommerce = "E-commerce",
    Health = "Health",
}

export enum SortKey {
    Default = "Default",
    Ascending = "Ascending",
    Descending = "Descending",
}

export interface Option<L, V>{
    label: L
    value: V
}

export interface ITemplate {
    category: TemplateCategory[]
    created: string
    description: string
    link: string
    name: string
}

export interface AllTemplatesState {
    templates: ITemplate[]
    categorisedTemplates: ITemplate[]
    fetchingTemplates: boolean
    fetchTemplatesError: string
}

export interface TemplatesPaginationState {
    pageSize: number
    currentPageIndex: number
}
