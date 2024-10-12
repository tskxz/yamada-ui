import type { ComponentMultiStyle } from "@yamada-ui/core"
import { mergeMultiStyle } from "@yamada-ui/core"
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
      content: {
        w: "100%",
      },
      field: {
        alignItems: "center",
        display: "flex",
        w: 20,
      },
      icon: {
        alignItems: "center",
        cursor: "pointer",
        display: "inline-flex",
        justifyContent: "center",
        pointerEvents: "none",
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
      },
      inner: {
        position: "relative",
      },
      item: {
        alignItems: "center",
        color: "inherit",
        display: "flex",
        flex: "0 0 auto",
        gap: "0.75rem",
        outline: 0,
        textAlign: "start",
        textDecoration: "none",
        userSelect: "none",
        width: "100%",
        _active: {
          bg: ["blackAlpha.200", "whiteAlpha.200"],
        },
        _hover: {
          bg: ["blackAlpha.100", "whiteAlpha.100"],
        },
      },
      itemIcon: {
        alignItems: "center",
        display: "inline-flex",
        flexShrink: 0,
        fontSize: "0.85em",
        justifyContent: "center",
      },
      list: {
        maxH: "xs",
        overflowY: "auto",
        w: "fit-content",
      },
    },
  },
)({ omit: ["button", "command"] })
