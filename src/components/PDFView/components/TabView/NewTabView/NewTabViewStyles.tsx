import { Flex, chakra } from "@chakra-ui/react";

export const hoverStyle = {
    '_hover': {
        cursor: 'pointer',
        opacity: 0.6
    }
}

export const NewTabViewWrapper = chakra(Flex, {
    baseStyle: {
        width: "100%",
        height: "inherit",
        justifyContent: "center",
        alignItems: "center",
        color: "blue.200",
        borderRadius: "10px",
        fontWeight: "500",
        ...hoverStyle
    },
});

