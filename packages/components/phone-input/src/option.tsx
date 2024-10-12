import type { FC, HTMLUIProps } from "@yamada-ui/core"
import type { UseCountryPickerOptionProps } from "./use-phone-input"
import { forwardRef, ui } from "@yamada-ui/core"
import { useCountryPickerOption, usePhoneInputContext } from "./use-phone-input"

interface OptionOptions {
  countryCode: string
  countryName: string
  dialCode: string
}

export type CountryPickerOptionProps = OptionOptions &
  UseCountryPickerOptionProps

export const CountryPickerOption = forwardRef<CountryPickerOptionProps, "li">(
  ({ id, countryCode, countryName, dialCode }, ref) => {
    const { styles } = usePhoneInputContext()
    const { isSelected, getOptionProps } = useCountryPickerOption({
      countryCode,
      dialCode,
    })

    return (
      <ui.li
        id={id}
        className="ui-country-picker__item"
        __css={styles.item}
        {...getOptionProps({}, ref)}
      >
        <CountryPickerOptionIcon opacity={isSelected ? 1 : 0}>
          <CountryPickerCheckIcon />
        </CountryPickerOptionIcon>

        <ui.div flex={1} height={6} width={6}>
          <ui.span className={`fi fi-${countryCode}`} data-label />
        </ui.div>
        <ui.span flex={3}>{countryName}</ui.span>
        <ui.span flex={1} textAlign="end">
          {dialCode}
        </ui.span>
      </ui.li>
    )
  },
)

CountryPickerOption.displayName = "CountryPickerOption"
CountryPickerOption.__ui__ = "CountryPickerOption"

type OptionIconProps = HTMLUIProps<"span">

const CountryPickerOptionIcon: FC<OptionIconProps> = (props) => {
  const { styles } = usePhoneInputContext()

  return (
    <ui.span
      className="ui-country-picker__item__icon"
      __css={styles.itemIcon}
      {...props}
    />
  )
}

CountryPickerOptionIcon.displayName = "CountryPickerOptionIcon"
CountryPickerOptionIcon.__ui__ = "CountryPickerOptionIcon"

const CountryPickerCheckIcon: FC = () => (
  <svg height="1em" viewBox="0 0 14 14" width="1em">
    <polygon
      fill="currentColor"
      points="5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
    />
  </svg>
)

CountryPickerCheckIcon.displayName = "CountryPickerCheckIcon"
CountryPickerCheckIcon.__ui__ = "CountryPickerCheckIcon"
