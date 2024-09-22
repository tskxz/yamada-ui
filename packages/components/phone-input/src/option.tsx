import type { HTMLUIProps } from "@yamada-ui/core"
import { ui, forwardRef } from "@yamada-ui/core"
import { cx } from "@yamada-ui/utils"
import type { FC } from "react"
import type { UseCountryPickerOptionProps } from "./use-phone-input"
import { useCountryPickerOption, usePhoneInputContext } from "./use-phone-input"

type OptionOptions = {}

export type OptionProps = UseCountryPickerOptionProps & OptionOptions

export const Option = forwardRef<OptionProps, "li">(
  ({ id, className, ...rest }, ref) => {
    const { styles } = usePhoneInputContext()
    const { isSelected, countryCode, countryName, dialCode, getOptionProps } =
      useCountryPickerOption(rest)

    return (
      <ui.li
        id={id}
        className={cx("ui-country-picker__item", className)}
        __css={styles.item}
        {...getOptionProps()}
        ref={ref}
      >
        <OptionIcon opacity={isSelected ? 1 : 0}>
          <CheckIcon />
        </OptionIcon>

        <ui.div flex={1} width={6} height={6}>
          <ui.span data-label className={`fi fi-${countryCode}`} />
        </ui.div>
        <ui.span flex={3}>{countryName}</ui.span>
        <ui.span flex={1} textAlign="end">
          {dialCode}
        </ui.span>
      </ui.li>
    )
  },
)

type OptionIconProps = HTMLUIProps<"span">

const OptionIcon = forwardRef<OptionIconProps, "span">(
  ({ className, ...rest }, ref) => {
    const { styles } = usePhoneInputContext()

    return (
      <ui.span
        ref={ref}
        className={cx("ui-country-picker__item__icon", className)}
        __css={styles.itemIcon}
        {...rest}
      />
    )
  },
)

const CheckIcon: FC = () => (
  <svg viewBox="0 0 14 14" width="1em" height="1em">
    <polygon
      fill="currentColor"
      points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
    />
  </svg>
)
