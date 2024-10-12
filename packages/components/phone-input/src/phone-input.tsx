import type { HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import type { InputProps } from "@yamada-ui/input"
import type { MotionProps } from "@yamada-ui/motion"
import type { PortalProps } from "@yamada-ui/portal"
import type { CountrySelectFieldProps } from "./country-picker"
import type { CountryPickerListProps } from "./country-picker-list"
import {
  forwardRef,
  omitThemeProps,
  ui,
  useComponentMultiStyle,
} from "@yamada-ui/core"
import { Input, InputGroup, InputLeftAddon } from "@yamada-ui/input"
import { CountryPicker } from "./country-picker"
import {
  CountryPickerDescendantsContextProvider,
  PhoneInputProvider,
  usePhoneInput,
} from "./use-phone-input"

interface PhoneInputOptions {
  containerProps?: Omit<HTMLUIProps, "children">
  contentProps?: Omit<MotionProps, "children">
  fieldProps?: Omit<CountrySelectFieldProps, "children">
  inputProps?: Omit<InputProps, "children">
  listProps?: Omit<CountryPickerListProps, "children">
  portalProps?: Omit<PortalProps, "children">
}

export interface PhoneInputProps
  extends HTMLUIProps,
    ThemeProps<"PhoneInput">,
    PhoneInputOptions {}

/**
 * `PhoneInput` is component.
 *
 * @see Docs https://yamada-ui.com/components/forms/phone-input
 */
export const PhoneInput = forwardRef<PhoneInputProps, "div">((props, ref) => {
  const [styles, mergedProps] = useComponentMultiStyle("PhoneInput", props)

  const {
    containerProps,
    contentProps,
    fieldProps,
    inputProps,
    listProps,
    portalProps,
  } = omitThemeProps(mergedProps)

  const {
    containerRef,
    countryCode,
    descendants,
    dialCode,
    fieldRef,
    focusedIndex,
    isOpen,
    listRef,
    rest: restProps,
    setCountryCode,
    setDialCode,
    setFocusedIndex,
    onChange,
    onChangeLabel,
    onClose,
    onOpen,
  } = usePhoneInput({})

  return (
    <CountryPickerDescendantsContextProvider value={descendants}>
      <PhoneInputProvider
        value={{
          containerRef,
          countryCode,
          descendants,
          dialCode,
          fieldRef,
          focusedIndex,
          isOpen,
          listRef,
          rest: restProps,
          setCountryCode,
          setDialCode,
          setFocusedIndex,
          styles,
          onChange,
          onChangeLabel,
          onClose,
          onOpen,
        }}
      >
        <ui.div
          ref={ref}
          style={{
            alignItems: "center",
            display: "flex",
          }}
          gap={5}
        >
          <CountryPicker
            containerProps={containerProps}
            contentProps={contentProps}
            fieldProps={fieldProps}
            listProps={listProps}
            portalProps={portalProps}
          />
          <InputGroup>
            <InputLeftAddon>{dialCode}</InputLeftAddon>
            <Input type="tel" htmlSize={24} width="auto" {...inputProps} />
          </InputGroup>
        </ui.div>
      </PhoneInputProvider>
    </CountryPickerDescendantsContextProvider>
  )
})

PhoneInput.displayName = "PhoneInput"
PhoneInput.__ui__ = "PhoneInput"
