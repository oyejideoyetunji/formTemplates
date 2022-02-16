import { ITemplate } from "../../lib/types";
import { render, screen } from "@testing-library/react";
import React from "react";
import TemplateCard from "./index";


test("renders content properly", () => {
    const template = {
        "category": [
            "Health",
            "E-commerce",
            "Education",
        ],
        "created":     "2022-02-16T09:59:35.047322",
        "description": "exercitation laborum. culpa aliqua. cupidatat",
        "link":        "https://formpl.us/templates",
        "name":        "tempor Lorem aliquip",
    } as ITemplate

    render(<TemplateCard template={template} />)

    const cardHeader = screen.getByText(template.name)
    const descriptionText = screen.getByText(template.description)

    expect(cardHeader).toBeDefined()
    expect(descriptionText).toBeDefined()
})
