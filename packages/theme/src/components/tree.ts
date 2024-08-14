import type { ComponentMultiStyle } from "@yamada-ui/core"

export const Tree: ComponentMultiStyle<"Tree"> = {
  baseStyle: {
    container: {
      w: "100%",
    },
    item: {
      overflowAnchor: "none",
    },
    content: {
      py: "3",
      px: "4",
    },
    button: ({ isSelected }) => ({
      transitionProperty: "common",
      transitionDuration: "normal",
      _focusVisible: {
        boxShadow: "outline",
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
      py: "3",
      px: "4",
      display: "inline-flex",
      alignItems: "center",
      outline: 0,
      width: "100%",
      bg: isSelected ? ["blackAlpha.200", "whiteAlpha.100"] : undefined,
      div: {
        width: "calc(var(--ui-level)*1.5rem)",
      },
    }),
    panel: {},
    icon: ({ isOpen, hidden, isDisabled }) => ({
      fontSize: "1.25em",
      color: ["blackAlpha.600", "whiteAlpha.700"],
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "transform 0.2s",
      transformOrigin: "center",
      opacity: isDisabled ? 0.4 : 1,
      transform: isOpen ? "rotate(-180deg)" : undefined,
      visibility: hidden ? "hidden" : undefined,
    }),
    leftIcon: {
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  variants: {
    basic: {
      item: {},
      button: {},
    },
    outline: {
      container: {
        borderWidth: "1px",
      },
      item: {
        _notLast: { borderBottomWidth: "1px" },
      },
      button: {},
      panel: {
        borderTopWidth: "1px",
      },
    },
    unstyled: {},
  },

  defaultProps: {
    variant: "basic",
  },
}
