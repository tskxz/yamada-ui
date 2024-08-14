import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import type { IconProps } from "@yamada-ui/icon"
import { cx, isArray, isFunction } from "@yamada-ui/utils"
import { type FC, type PropsWithChildren, type ReactNode } from "react"
import { useTreeContext } from "./tree"
import { TreeIcon } from "./tree-icon"
import { useTreeButtonContext, useTreeItemContext } from "./tree-item"

export type TreeButtonOptions = {
  /**
   * Specifies the icon for the tree button. Can be a ReactNode or a function that returns a ReactNode.
   */
  icon?:
    | ReactNode
    | ((props: { isExpanded: boolean; isDisabled: boolean }) => ReactNode)
  /**
   * Specifies the left icon for the tree button. Can be a ReactNode or a function that returns a ReactNode.
   */
  leftIcon?:
    | ReactNode
    | ((props: { isExpanded: boolean; isDisabled: boolean }) => ReactNode)
}

export type TreeButtonProps = HTMLUIProps<"button"> & TreeButtonOptions

export const TreeButton = forwardRef<TreeButtonProps, "button">(
  (
    {
      className,
      icon: customIcon,
      leftIcon: customLeftIcon,
      children,
      ...rest
    },
    ref,
  ) => {
    const {
      isOpen,
      isDisabled = false,
      icon: supplementIcon,
      leftIcon: supplementLeftIcon,
      iconHidden: supplementIconHidden,
      getButtonProps,
    } = useTreeItemContext()
    const { lastLevel, index, level } = useTreeButtonContext()
    const {
      icon: generalIcon,
      leftIcon: generalLeftIcon,
      iconHidden,
      styles,
      selectedIndex,
    } = useTreeContext()

    const selected = isArray(selectedIndex)
      ? selectedIndex.includes(index)
      : selectedIndex === index

    const css: CSSUIObject = {
      ...styles.button,
    }

    return (
      <ui.button
        {...getButtonProps(rest, ref)}
        data-selected={selected}
        className={cx("ui-tree__button", className)}
        __css={css}
      >
        <ui.div
          data-level={level}
          var={[
            {
              name: "level",
              value: level,
            },
          ]}
        />
        {!iconHidden ? (
          <TreeIcon hidden={lastLevel}>
            {getIcon(
              [customIcon, supplementIcon, generalIcon],
              isOpen,
              isDisabled,
            )}
          </TreeIcon>
        ) : null}
        {!iconHidden && !supplementIconHidden ? (
          <TreeLeftIcon styles={styles}>
            {getIcon(
              [customLeftIcon, supplementLeftIcon, generalLeftIcon],
              isOpen,
              isDisabled,
            )}
          </TreeLeftIcon>
        ) : null}
        {children}
      </ui.button>
    )
  },
)

type IconType =
  | ReactNode
  | ((props: { isExpanded: boolean; isDisabled: boolean }) => ReactNode)

export const getIcon = (
  [supplementIcon, customIcon, generalIcon]: IconType[],
  isOpen: boolean,
  isDisabled: boolean,
): ReactNode => {
  const cloneSupplementIcon = isFunction(supplementIcon)
    ? supplementIcon({
        isExpanded: isOpen,
        isDisabled,
      })
    : supplementIcon

  const cloneCustomIcon = isFunction(customIcon)
    ? customIcon({
        isExpanded: isOpen,
        isDisabled,
      })
    : customIcon

  const cloneGeneralIcon = isFunction(generalIcon)
    ? generalIcon({
        isExpanded: isOpen,
        isDisabled,
      })
    : generalIcon

  return cloneSupplementIcon ?? cloneCustomIcon ?? cloneGeneralIcon
}

type TreeLeftIconOptions = PropsWithChildren<IconProps> & {
  styles: Record<string, CSSUIObject>
}

export const TreeLeftIcon: FC<TreeLeftIconOptions> = ({
  className,
  children,
  styles,
}) => {
  const css: CSSUIObject = {
    ...styles.leftIcon,
  }

  if (children)
    return (
      <ui.span
        className={cx("ui-tree__left-icon", className)}
        __css={{ ...css }}
      >
        {children}
      </ui.span>
    )

  return null
}
