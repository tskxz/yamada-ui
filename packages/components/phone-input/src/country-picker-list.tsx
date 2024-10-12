import type { HTMLUIProps } from "@yamada-ui/core"
import type { MotionPropsWithoutChildren } from "@yamada-ui/motion"
import { forwardRef, ui } from "@yamada-ui/core"
import { PopoverContent } from "@yamada-ui/popover"
import { useCountryPickerList, usePhoneInputContext } from "./use-phone-input"

export type CountryPickerListProps = {
  contentProps?: MotionPropsWithoutChildren
} & HTMLUIProps<"ul">

export const CountryPickerList = forwardRef<CountryPickerListProps, "ul">(
  ({ children, contentProps, ...rest }, ref) => {
    const { styles } = usePhoneInputContext()

    const { getListProps } = useCountryPickerList()

    return (
      <PopoverContent
        as="div"
        className="ui-country-picker__content"
        {...contentProps}
      >
        <ui.ul
          className="ui-country-picker__list"
          __css={styles.list}
          {...getListProps(rest, ref)}
        >
          {children}
        </ui.ul>
      </PopoverContent>
    )
  },
)

CountryPickerList.displayName = "CountryPickerList"
CountryPickerList.__ui__ = "CountryPickerList"
