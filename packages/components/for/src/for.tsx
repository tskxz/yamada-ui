import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  forwardRef,
  ui,
  omitThemeProps,
  useComponentStyle,
} from "@yamada-ui/core"
import { cx, Dict } from "@yamada-ui/utils"

type ForOptionsType = string | number | Dict | undefined

interface ForOptions {
  each: ForOptionsType[] | readonly ForOptionsType[] | undefined
  fallback?: React.ReactNode
  children: (
    item: Exclude<ForOptionsType, undefined>,
    index: number,
  ) => React.ReactNode
}

export interface ForProps
  extends Omit<HTMLUIProps, "children">,
    ThemeProps<"For">,
    ForOptions {}

/**
 * `For` is component.
 *
 * @see Docs https://yamada-ui.com/components/other/for
 */
export const For = forwardRef<ForProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentStyle("For", props)
  const { className, each, children, fallback, ...rest } =
    omitThemeProps(mergedProps)

  const css: CSSUIObject = {
    ...styles,
  }

  if (!each || each.length === 0) {
    return fallback || null
  }

  return (
    <ui.div ref={ref} className={cx("ui-for", className)} __css={css} {...rest}>
      {each.map((item, index) => {
        return children(item as Exclude<ForOptionsType, undefined>, index)
      })}
    </ui.div>
  )
})

For.displayName = "For"
For.__ui__ = "For"
