import type { HTMLUIProps } from "@yamada-ui/core"
import { forwardRef, ui } from "@yamada-ui/core"
import { ChevronIcon } from "@yamada-ui/icon"
import { usePhoneInputContext } from "./use-phone-input"

export type CountryPickerIconProps = HTMLUIProps

export const CountryPickerIcon = forwardRef<CountryPickerIconProps, "div">(
  (props, ref) => {
    const { styles } = usePhoneInputContext()

    return (
      <ui.div
        ref={ref}
        className="ui-country-picker__icon"
        __css={styles.icon}
        {...props}
      >
        <ChevronIcon />
      </ui.div>
    )
  },
)

CountryPickerIcon.displayName = "CountryPickerIcon"
CountryPickerIcon.__ui__ = "CountryPickerIcon"
