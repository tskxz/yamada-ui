import type { HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import type { MotionPropsWithoutChildren } from "@yamada-ui/motion"
import { PopoverContent } from "@yamada-ui/popover"
import { cx } from "@yamada-ui/utils"
import { usePhoneInputContext, useCountryPickerList } from "./use-phone-input"

export type CountryListProps = HTMLUIProps<"ul"> & {
  contentProps?: MotionPropsWithoutChildren
}

export const CountryList = forwardRef<CountryListProps, "ul">(
  ({ className, children, contentProps, ...rest }, ref) => {
    const { styles } = usePhoneInputContext()

    const { getListProps } = useCountryPickerList()

    return (
      <PopoverContent
        as="div"
        className="ui-country-picker__content"
        {...contentProps}
      >
        <ui.ul
          className={cx("ui-country-picker__list", className)}
          __css={{ ...styles.list }}
          {...getListProps(rest, ref)}
        >
          {children}
        </ui.ul>
      </PopoverContent>
    )
  },
)
