export enum TemplateCategory {
    ALL = "All templates",
    AGRICULTURE = "Agriculture",
}

export interface ITemplate {
    category: ("Health" |"E-commerce" | "Education")[]
    created: string
    description: string
    link: string
    name: string
}
