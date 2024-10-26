import type { HTMLUIProps } from "@yamada-ui/core"
import type { UseAutocompleteOptionGroupProps } from "./use-autocomplete-option-group"
import { forwardRef, ui } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import { useAutocompleteContext } from "./autocomplete-context"
import { useAutocompleteOptionGroup } from "./use-autocomplete-option-group"

interface AutocompleteOptionGroupOptions
  extends UseAutocompleteOptionGroupProps {
  /**
   * Props for autocomplete option group element.
   */
  labelProps?: HTMLUIProps<"header">
}

export interface AutocompleteOptionGroupProps
  extends HTMLUIProps,
    AutocompleteOptionGroupOptions {}

export const AutocompleteOptionGroup = forwardRef<
  AutocompleteOptionGroupProps,
  "div"
>(
  (
    {
      className,
      children,
      color,
      h,
      height,
      minH,
      minHeight,
      labelProps,
      ...rest
    },
    ref,
  ) => {
    const { styles } = useAutocompleteContext()
    const { label, getContainerProps, getGroupProps, getLabelProps } =
      useAutocompleteOptionGroup(rest)

    h ??= height
    minH ??= minHeight

    return (
      <ui.section
        className={cx(
          "ui-autocomplete__item",
          "ui-autocomplete__item--group",
          className,
        )}
        __css={{ color, h: "fit-content", w: "100%" }}
        {...getContainerProps()}
      >
        <ui.header
          className="ui-autocomplete__item__group-label"
          lineClamp={1}
          __css={styles.groupLabel}
          {...getLabelProps(labelProps)}
        >
          {label}
        </ui.header>

        <ui.div
          {...getGroupProps({}, ref)}
          className="ui-autocomplete__item__group"
          __css={{ h, minH, ...styles.group }}
        >
          {children}
        </ui.div>
      </ui.section>
    )
  },
)

AutocompleteOptionGroup.displayName = "AutocompleteOptionGroup"
AutocompleteOptionGroup.__ui__ = "AutocompleteOptionGroup"
