import { mergeMultiStyle, type ComponentMultiStyle } from "@yamada-ui/core"
import { Menu } from "./menu"
import { NativeSelect } from "./native-select"

export const PhoneInput: ComponentMultiStyle<"PhoneInput"> = mergeMultiStyle(
  NativeSelect,
  Menu,
  {
    baseStyle: {
      container: {
        h: "fit-content",
      },
      inner: {
        position: "relative",
      },
      content: {
        w: "100%",
      },
      list: {
        w: "fit-content",
        maxH: "xs",
        overflowY: "auto",
      },
      item: {
        width: "100%",
        textDecoration: "none",
        color: "inherit",
        userSelect: "none",
        display: "flex",
        alignItems: "center",
        textAlign: "start",
        flex: "0 0 auto",
        outline: 0,
        gap: "0.75rem",
        _hover: {
          bg: ["blackAlpha.100", "whiteAlpha.100"],
          _disabled: {
            bg: ["white", "black"],
          },
        },
        _active: {
          bg: ["blackAlpha.200", "whiteAlpha.200"],
        },
      },
      itemIcon: {
        flexShrink: 0,
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "0.85em",
      },
      field: {
        w: 20,
        display: "flex",
        alignItems: "center",
      },
      icon: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        cursor: "pointer",
      },
    },
  },
)({ omit: ["button", "command"] })
