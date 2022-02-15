import Colors from "../../lib/colors";
import styled from "styled-components";

const PlainButton = styled.button<{
    width?: string;
    Px?: string;
    Py?: string;
    borderColor?: string;
    backgroundColor?: string
}>`
    outline: none;
    border: none;
    width: ${({ width }) => width || "fit-content"};
    ${({ Py }) => `padding-top: ${Py || "4px"}; padding-bottom: ${Py || "4px"};`}
    ${({ Px }) => `padding-left: ${Px || "8px"}; padding-right: ${Px || "8px"};`}
    border: 1px solid ${({ borderColor }) => borderColor || Colors.black};
    border-radius: 4px;
    background: ${({ backgroundColor }) => backgroundColor || "transparent"}

`
export default PlainButton
