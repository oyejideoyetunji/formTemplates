import { FlexWrapper, IconWrapper } from "../wrappers";
import { Span } from "../typography";
import Colors from "../../lib/colors";
import React from "react";

interface NotificationCardProps {
    text: string
}

const NotificationCard = ({ text }: NotificationCardProps) => (
    <FlexWrapper
        width="100%"
        align="center"
        justify="center"
        Py="12px" Px="12px"
        bg={Colors.dangerBackgroundAlt}
    >
        <IconWrapper
            width="60px"
            color={Colors.Warning}
            fontSize="18px"
        >
            <i className="fas fa-exclamation-circle" />
        </IconWrapper>
        <Span fontSize="14px" fontSizeSm="13px" fontWeight="400">
            {text}
        </Span>
    </FlexWrapper>
)

export default NotificationCard
