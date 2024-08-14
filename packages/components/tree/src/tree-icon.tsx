import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import { omitThemeProps, ui, useMultiComponentStyle } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import { ChevronIcon } from "@yamada-ui/icon"
import { cx } from "@yamada-ui/utils"
import { type PropsWithChildren, forwardRef } from "react"
import { useTreeContext } from "./tree"
import { useTreeItemContext } from "./tree-item"

export type TreeIconOptions = PropsWithChildren<IconProps> & {
  hidden?: boolean
}

export type TreeIconProps = Omit<HTMLUIProps<"div">, "onChange"> &
  ThemeProps<"Tree"> &
  TreeIconOptions

export const TreeIcon = forwardRef<HTMLDivElement, TreeIconProps>(
  ({ hidden, ...props }, ref) => {
    const { isOpen, isDisabled, onChange } = useTreeItemContext()
    const { isSelectable } = useTreeContext()
    const [styles, mergedProps] = useMultiComponentStyle("Tree", {
      isDisabled,
      isOpen,
      hidden,
      ...props,
    })

    const { className, children, ...rest } = omitThemeProps(mergedProps)

    const css: CSSUIObject = {
      ...styles.icon,
    }

    if (children)
      return (
        <ui.div
          ref={ref}
          className={cx("ui-tree__icon", className)}
          onClick={() => {
            if (isSelectable) onChange(!isOpen)
          }}
        >
          {children}
        </ui.div>
      )

    return (
      <ChevronIcon
        className={cx("ui-tree__icon", className)}
        __css={css}
        onClick={() => {
          if (isSelectable) onChange(!isOpen)
        }}
        {...rest}
      />
    )
  },
)

TreeIcon.displayName = "TreeIcon"
