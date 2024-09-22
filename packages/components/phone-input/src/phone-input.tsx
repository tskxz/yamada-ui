import type { ThemeProps } from "@yamada-ui/core"
import {
  ui,
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import type { InputProps } from "@yamada-ui/input"
import { Input, InputGroup, InputLeftAddon } from "@yamada-ui/input"
import { CountryPicker } from "./country-picker"
import type { UsePhoneInputProps } from "./use-phone-input"
import {
  PhoneInputProvider,
  SelectDescendantsContextProvider,
  useCountryPicker,
} from "./use-phone-input"

type PhoneInputOptions = {
  inputProps?: InputProps
}

export type PhoneInputProps = ThemeProps<"PhoneInput"> &
  Omit<
    UsePhoneInputProps<string>,
    "isEmpty" | "maxSelectValues" | "omitSelectedValues"
  > &
  PhoneInputOptions

export const PhoneInput = forwardRef<PhoneInputProps, "div">((props, ref) => {
  const [styles, mergedProps] = useMultiComponentStyle("PhoneInput", props)
  let {
    defaultValue = "",
    inputProps,
    ...computedProps
  } = omitThemeProps(mergedProps)

  const { onClose, descendants, dialCode, ...rest } = useCountryPicker({
    ...computedProps,
    defaultValue,
  })

  return (
    <SelectDescendantsContextProvider value={descendants}>
      <PhoneInputProvider
        value={{
          ...rest,
          onClose,
          styles,
        }}
      >
        <ui.div
          style={{
            display: "flex",
            alignItems: "center",
          }}
          gap={5}
          ref={ref}
        >
          <CountryPicker />
          <InputGroup>
            <InputLeftAddon>{dialCode}</InputLeftAddon>
            <Input htmlSize={24} width="auto" type="tel" {...inputProps} />
          </InputGroup>
        </ui.div>
      </PhoneInputProvider>
    </SelectDescendantsContextProvider>
  )
})
