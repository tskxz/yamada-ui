import type { HTMLUIProps } from "@yamada-ui/core"
import type { MotionProps } from "@yamada-ui/motion"
import type { PortalProps } from "@yamada-ui/portal"
import type { ReactElement } from "react"
import type { CountryPickerListProps } from "./country-picker-list"
import type { UseCountryPickerProps } from "./use-phone-input"
import { forwardRef, ui } from "@yamada-ui/core"
import { Popover, PopoverTrigger } from "@yamada-ui/popover"
import { Portal } from "@yamada-ui/portal"
import { cx } from "@yamada-ui/utils"
import { useMemo } from "react"
import { COUNTRIES } from "./constants"
import { CountryPickerIcon } from "./country-picker-icon"
import { CountryPickerList } from "./country-picker-list"
import { CountryPickerOption } from "./option"
import { useCountryPicker, usePhoneInputContext } from "./use-phone-input"
import "flag-icons/css/flag-icons.min.css"

interface CountryPickerOptions {
  containerProps?: Omit<HTMLUIProps, "children">
  contentProps?: Omit<MotionProps, "children">
  fieldProps?: Omit<CountrySelectFieldProps, "children">
  listProps?: Omit<CountryPickerListProps, "children">
  portalProps?: Omit<PortalProps, "children">
}
export type CountryPickerProps = CountryPickerOptions & UseCountryPickerProps

export const CountryPicker = forwardRef<CountryPickerProps, "div">(
  (
    { containerProps, contentProps, fieldProps, listProps, portalProps },
    ref,
  ) => {
    const { styles } = usePhoneInputContext()

    const {
      formControlProps,
      getContainerProps,
      getFieldProps,
      getPopoverProps,
    } = useCountryPicker()

    const children = useMemo(
      () =>
        COUNTRIES.map((item, i) => {
          return <CountryPickerOption key={i} countryCode={item.id} {...item} />
        }).filter(Boolean) as ReactElement[],
      [],
    )

    return (
      <Popover {...getPopoverProps()}>
        <ui.div
          className={cx("ui-country-picker")}
          __css={styles.container}
          {...getContainerProps(containerProps, ref)}
        >
          <ui.div className="ui-country-picker__inner" __css={styles.inner}>
            <PopoverTrigger>
              <CountryPickerField {...getFieldProps(fieldProps, ref)} />
            </PopoverTrigger>
            <CountryPickerIcon {...formControlProps} />
          </ui.div>
          <Portal {...portalProps}>
            <CountryPickerList contentProps={contentProps} {...listProps}>
              {children}
            </CountryPickerList>
          </Portal>
        </ui.div>
      </Popover>
    )
  },
)

CountryPicker.displayName = "CountryPicker"
CountryPicker.__ui__ = "CountryPicker"

export type CountrySelectFieldProps = HTMLUIProps

const CountryPickerField = forwardRef<CountrySelectFieldProps, "div">(
  ({ isTruncated = true, lineClamp, ...rest }, ref) => {
    const { countryCode, styles } = usePhoneInputContext()

    return (
      <ui.div
        ref={ref}
        className="ui-country-picker__field"
        __css={styles.field}
        {...rest}
      >
        <ui.span isTruncated={isTruncated} lineClamp={lineClamp}>
          <ui.span className={`fi fi-${countryCode}`} data-label />
        </ui.span>
      </ui.div>
    )
  },
)

CountryPickerField.displayName = "CountryPickerField"
CountryPickerField.__ui__ = "CountryPickerField"
