import type { CSSUIObject, HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { ChevronIcon } from "@yamada-ui/icon"
import { cx, getValidChildren, isValidElement } from "@yamada-ui/utils"
import { cloneElement } from "react"
import { usePhoneInputContext } from "./use-phone-input"

export type CountryPickerIconProps = HTMLUIProps<"div">

export const CountryPickerIcon = forwardRef<CountryPickerIconProps, "div">(
  ({ className, children, __css, ...rest }, ref) => {
    const { styles } = usePhoneInputContext()

    const css: CSSUIObject = {
      ...styles.icon,
      ...__css,
    }

    const validChildren = getValidChildren(children)

    const cloneChildren = validChildren.map((child) =>
      cloneElement(child, {
        focusable: false,
        "aria-hidden": true,
        style: {
          maxWidth: "1em",
          maxHeight: "1em",
          color: "currentColor",
        },
      }),
    )

    return (
      <ui.div
        ref={ref}
        className={cx("ui-country-picker__icon", className)}
        __css={css}
        {...rest}
      >
        {isValidElement(children) ? cloneChildren : <ChevronIcon />}
      </ui.div>
    )
  },
)
