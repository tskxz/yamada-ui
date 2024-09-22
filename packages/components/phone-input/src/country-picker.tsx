import type { HTMLUIProps, CSSUIObject } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { Popover, PopoverTrigger } from "@yamada-ui/popover"
import { Portal } from "@yamada-ui/portal"
import { cx } from "@yamada-ui/utils"
import type { ReactElement, ReactNode } from "react"
import { useMemo } from "react"
import { COUNTRIES } from "./constants"
import { CountryPickerIcon } from "./country-picker-icon"
import { CountryList } from "./country-picker-list"
import { Option } from "./option"
import type { OptionProps } from "./option"
import { useCountryPicker, usePhoneInputContext } from "./use-phone-input"
import type { UsePhoneInputProps } from "./use-phone-input"
import "flag-icons/css/flag-icons.min.css"

type CountryPickerBaseItem = Omit<OptionProps, "value" | "children">

export type CountryPickerItem = CountryPickerBaseItem & {
  label?: ReactNode
  value?: string
}

type CountryPickerOptions = {}

export type CountryPickerProps = Omit<
  UsePhoneInputProps<string>,
  "isEmpty" | "maxSelectValues" | "omitSelectedValues"
> &
  CountryPickerOptions

export const CountryPicker = forwardRef<CountryPickerProps, "ul">(
  (props, ref) => {
    const [styles, mergedProps] = useMultiComponentStyle("PhoneInput", props)
    let { className, ...computedProps } = omitThemeProps(mergedProps)

    const {
      formControlProps,
      getPopoverProps,
      getContainerProps,
      getFieldProps,
    } = useCountryPicker(computedProps)

    const computedChildren = useMemo(
      () =>
        COUNTRIES.map((item, i) => {
          return <Option key={i} countryCode={item.id} {...item} />
        }).filter(Boolean) as ReactElement[],
      [],
    )

    return (
      <Popover {...getPopoverProps()}>
        <ui.div
          className={cx("ui-country-picker", className)}
          __css={styles.container}
          {...getContainerProps()}
        >
          <ui.div className="ui-country-picker__inner" __css={styles.inner}>
            <PopoverTrigger>
              <CountrySelectField {...getFieldProps({}, ref)} />
            </PopoverTrigger>
            <CountryPickerIcon {...formControlProps} />
          </ui.div>
          <Portal>
            <CountryList>{computedChildren}</CountryList>
          </Portal>
        </ui.div>
      </Popover>
    )
  },
)

export type CountrySelectFieldProps = HTMLUIProps<"div">

const CountrySelectField = forwardRef<CountrySelectFieldProps, "div">(
  ({ className, isTruncated = true, lineClamp, ...rest }, ref) => {
    const { styles, label } = usePhoneInputContext()
    const css: CSSUIObject = {
      ...styles.field,
    }

    return (
      <ui.div
        ref={ref}
        className={cx("ui-country-picker__field", className)}
        __css={css}
        {...rest}
      >
        <ui.span isTruncated={isTruncated} lineClamp={lineClamp}>
          <ui.span data-label className={`fi fi-${label}`} />
        </ui.span>
      </ui.div>
    )
  },
)
