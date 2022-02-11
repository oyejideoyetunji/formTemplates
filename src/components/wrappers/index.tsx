import styled from "styled-components";

export const FlexWrapper = styled.div<{
    width?: string;
    height?: string;
    direction?: string;
    justify?: string;
    align?: string;
    alignSelf?: string;
    order?: string;
    flex?: string;
    flexWrap?: string;
    P?: string;
    Py?: string;
    Px?: string;
    PTop?: string;
    PBottom?: string;
    PLeft?: string;
    PRight?: string;
    My?: string;
    overflowY?: string;
    overflowX?: string;
    zIndex?: string;
    shadow?: string;
    bg?: string;
}>`
    display: flex;
    box-sizing: border-box;
    ${({ width }) => width && `width: ${width};`}
    ${({ height }) => height && `height: ${height}`};
    ${({ direction }) => direction && `flex-direction: ${direction}`};
    ${({ justify }) => justify && `justify-content: ${justify}`};
    ${({ align }) => align && `align-items: ${align}`};
    ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf}`};
    ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap}`};
    ${({ order }) => order && `order: ${order};`}
    ${({ flex }) => flex && `flex: ${flex};`}
    ${({ P }) => P && `padding: ${P};`}
    ${({ Py }) => Py && `padding-top: ${Py}; padding-bottom: ${Py};`}
    ${({ Px }) => Px && `padding-left: ${Px}; padding-right: ${Px};`}
    ${({ PTop }) => PTop && `padding-top: ${PTop}`};
    ${({ PBottom }) => PBottom && `padding-bottom: ${PBottom};`}
    ${({ PLeft }) => PLeft && `padding-left: ${PLeft}`};
    ${({ PRight }) => PRight && `padding-right: ${PRight};`}
    ${({ My }) => My && `margin-top: ${My}; margin-bottom: ${My};`}
    ${({ overflowX }) => overflowX && ` overflow-x: ${overflowX}`};
    ${({ overflowY }) => overflowY && ` overflow-y: ${overflowY}`};
    ${({ zIndex }) => zIndex && `z-index: ${zIndex}`};
    ${({ shadow }) => shadow && `box-shadow: ${shadow}`};
    ${({ bg }) => bg && `background-color: ${bg}`};
`;

export const PositionWrapper = styled.div<{
    width: string;
    height?: string;
    position?: string;
    top?: string;
    bottom?: string
    left?: string
    right?: string
    bg?: string;
    Py?: string;
    Px?: string;
}>`
  width: ${({ width }) => width};
  ${({ height }) => height && `height: ${height}`};
  position: ${({ position }) => position || "absolute"};
  ${({ top }) => top && `top: ${top}`};
  ${({ bottom }) => bottom && `bottom: ${bottom}`};
  ${({ left }) => left && `left: ${left}`};
  ${({ right }) => right && `right: ${right}`};
  ${({ bg }) => bg && `background-color: ${bg}`};
  ${({ Py }) => Py && `padding-top: ${Py}; padding-bottom: ${Py};`}
  ${({ Px }) => Px && `padding-left: ${Px}; padding-right: ${Px};`}
`;

export const IconWrapper = styled.div<{
    height?: string; width?: string; fontSize?: string;
    color?: string; fontWeight?: string;
    cursor?: string; bg?: string;
    MX?: string; MY?: string;
}>`
    width: ${({ width }) => width || "fit-content"};
    height: ${({ height }) => height || "fit-content"};
    ${({ fontSize }) => fontSize && `font-size: ${fontSize}`};
    ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight || "bold"}`};
    color: ${({ color }) => color};
    ${({ cursor }) => cursor && `cursor: ${cursor}`};
    ${({ MX }) => MX && `margin-left: ${MX}; margin-right: ${MX};`}
    ${({ MY }) => MY && `margin-top: ${MY}; margin-bottom: ${MY};`}
    ${({ bg }) => bg && `background-color: ${bg}`};
    display: flex;
    align-items: center;
    justify-content: center;
`;
