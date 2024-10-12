import type { CSSUIObject, PropGetter } from "@yamada-ui/core"
import type { HTMLUIProps } from "@yamada-ui/core"
import type { FormControlOptions } from "@yamada-ui/form-control"
import type { ComboBoxProps, PopoverProps } from "@yamada-ui/popover"
import type { Merge } from "@yamada-ui/utils"
import type { FocusEvent, KeyboardEvent, MouseEvent } from "react"
import { layoutStyleProperties } from "@yamada-ui/core"
import {
  formControlProperties,
  useFormControlProps,
} from "@yamada-ui/form-control"
import { createDescendant } from "@yamada-ui/use-descendant"
import { useDisclosure } from "@yamada-ui/use-disclosure"
import {
  ariaAttr,
  createContext,
  dataAttr,
  funcAll,
  getEventRelatedTarget,
  isContains,
  isHTMLElement,
  mergeRefs,
  omitObject,
  pickObject,
  splitObject,
  useUnmountEffect,
  useUpdateEffect,
} from "@yamada-ui/utils"
import { useCallback, useEffect, useRef, useState } from "react"

const isTargetOption = (target: EventTarget | null): boolean =>
  isHTMLElement(target) && !!target.getAttribute("role")?.startsWith("option")

export const {
  DescendantsContextProvider: CountryPickerDescendantsContextProvider,
  useDescendant: useCountryPickerDescendant,
  useDescendants: useCountryPickerDescendants,
  useDescendantsContext: useCountryPickerDescendantsContext,
} = createDescendant()

interface PhoneInputContext extends UsePhoneInputReturn {
  styles: { [key: string]: CSSUIObject | undefined }
}

export const [PhoneInputProvider, usePhoneInputContext] =
  createContext<PhoneInputContext>({
    name: "PhoneInputContext",
    errorMessage: `usePhoneInputContext returned is 'undefined'. Seems you forgot to wrap the components in "<PhoneInput />"`,
  })

export interface UsePhoneInputProps
  extends Merge<
    Omit<HTMLUIProps, "defaultValue" | "onChange">,
    ComboBoxProps
  > {}

export const usePhoneInput = (props: UsePhoneInputProps) => {
  const rest = useFormControlProps(props)

  const [countryCode, setCountryCode] = useState<string | undefined>(undefined)
  const [dialCode, setDialCode] = useState<string | undefined>(undefined)
  const [focusedIndex, setFocusedIndex] = useState<number>(-1)

  const containerRef = useRef<HTMLDivElement>(null)
  const fieldRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const descendants = useCountryPickerDescendants()

  const { isOpen, onClose, onOpen } = useDisclosure()

  const onChangeLabel = useCallback(
    (newValue: string) => {
      const values = descendants.values()

      if (!values.length) return

      const selectedValues = values
        .filter(({ node }) => node.dataset.countryCode === newValue)
        .map(({ node }) => ({
          countryCode: node.dataset.countryCode,
          dialCode: node.dataset.dialCode,
        }))

      setCountryCode(selectedValues[0]?.countryCode)
      setDialCode(selectedValues[0]?.dialCode)
    },
    [descendants, setCountryCode, setDialCode],
  )

  const onChange = useCallback(
    (newValue: string) => {
      onChangeLabel(newValue)
    },
    [onChangeLabel],
  )

  return {
    containerRef,
    countryCode,
    descendants,
    dialCode,
    fieldRef,
    focusedIndex,
    isOpen,
    listRef,
    rest,
    setCountryCode,
    setDialCode,
    setFocusedIndex,
    onChange,
    onChangeLabel,
    onClose,
    onOpen,
  }
}

export type UsePhoneInputReturn = ReturnType<typeof usePhoneInput>

export interface UseCountryPickerProps
  extends Merge<Omit<HTMLUIProps, "defaultValue" | "onChange">, ComboBoxProps>,
    FormControlOptions {}

export const useCountryPicker = () => {
  const {
    containerRef,
    countryCode,
    descendants,
    fieldRef,
    focusedIndex,
    isOpen,
    listRef,
    rest,
    setFocusedIndex,
    onChange,
    onClose,
    onOpen,
  } = usePhoneInputContext()

  const { "aria-readonly": _ariaReadonly, ...formControlProps } = pickObject(
    rest,
    formControlProperties,
  )
  const [containerProps, fieldProps] = splitObject(
    omitObject(rest, ["aria-readonly"]),
    layoutStyleProperties,
  )

  const isFocused = focusedIndex > -1

  const timeoutIds = useRef<Set<any>>(new Set([]))

  const onFocusSelected = useCallback(() => {
    const id = setTimeout(() => {
      const values = descendants.enabledValues()

      const selected = values.find(
        ({ node }) => node.dataset.value === countryCode,
      )

      if (selected) setFocusedIndex(selected.index)
    })

    timeoutIds.current.add(id)
  }, [descendants, countryCode, setFocusedIndex])

  const onFocusNext = useCallback(() => {
    const id = setTimeout(() => {
      const next = descendants.enabledNextValue(focusedIndex)

      if (!next) return

      setFocusedIndex(next.index)
    })

    timeoutIds.current.add(id)
  }, [descendants, focusedIndex, setFocusedIndex])

  const onFocusFirst = useCallback(() => {
    const id = setTimeout(() => {
      const first = descendants.enabledFirstValue()

      if (!first) return

      setFocusedIndex(first.index)
    })
    timeoutIds.current.add(id)
  }, [descendants, setFocusedIndex])

  const onFocusLast = useCallback(() => {
    const id = setTimeout(() => {
      const last = descendants.enabledLastValue()

      if (!last) return

      setFocusedIndex(last.index)
    })

    timeoutIds.current.add(id)
  }, [descendants, setFocusedIndex])

  const onFocusPrev = useCallback(() => {
    const id = setTimeout(() => {
      const prev = descendants.enabledPrevValue(focusedIndex)

      if (!prev) return

      setFocusedIndex(prev.index)
    })

    timeoutIds.current.add(id)
  }, [descendants, focusedIndex, setFocusedIndex])

  const onSelect = useCallback(() => {
    let enabledValue = descendants.value(focusedIndex)

    if (!enabledValue) return

    const value = enabledValue.node.dataset.value ?? ""

    onChange(value)

    onClose()
  }, [descendants, focusedIndex, onChange, onClose])

  const onFocusFirstOrSelected = !countryCode ? onFocusFirst : onFocusSelected
  const onFocusLastOrSelected = !countryCode ? onFocusLast : onFocusSelected

  useUnmountEffect(() => {
    timeoutIds.current.forEach((id) => clearTimeout(id))
    timeoutIds.current.clear()
  })

  const onFocus = useCallback(() => {
    if (isOpen) return

    onOpen()
    onFocusFirstOrSelected()
  }, [isOpen, onFocusFirstOrSelected, onOpen])

  const onBlur = useCallback(
    (ev: FocusEvent<HTMLDivElement>) => {
      const relatedTarget = getEventRelatedTarget(ev)

      if (isContains(containerRef.current, relatedTarget)) return

      if (isOpen) onClose()
    },
    [isOpen, onClose, containerRef],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      if (ev.key === " ") ev.key = ev.code

      const actions: { [key: string]: Function | undefined } = {
        ArrowDown: isFocused
          ? () => onFocusNext()
          : !isOpen
            ? funcAll(onOpen, onFocusFirstOrSelected)
            : undefined,
        ArrowUp: isFocused
          ? () => onFocusPrev()
          : !isOpen
            ? funcAll(onOpen, onFocusLastOrSelected)
            : undefined,
        End: isOpen ? onFocusLast : undefined,
        Enter: isFocused
          ? onSelect
          : !isOpen
            ? funcAll(onOpen, onFocusFirstOrSelected)
            : undefined,
        Escape: onClose,
        Home: isOpen ? onFocusFirst : undefined,
        Space: isFocused
          ? onSelect
          : !isOpen
            ? funcAll(onOpen, onFocusFirstOrSelected)
            : undefined,
      }

      const action = actions[ev.key]

      if (!action) return

      ev.preventDefault()
      ev.stopPropagation()
      action()
    },
    [
      isFocused,
      isOpen,
      onOpen,
      onFocusFirstOrSelected,
      onFocusLastOrSelected,
      onSelect,
      onFocusFirst,
      onFocusLast,
      onClose,
      onFocusNext,
      onFocusPrev,
    ],
  )

  const onClick = useCallback(() => {
    if (isOpen) return

    onOpen()

    onFocusFirstOrSelected()
  }, [isOpen, onFocusFirstOrSelected, onOpen])

  useUpdateEffect(() => {
    if (!isOpen) setFocusedIndex(-1)
  }, [isOpen])

  const getContainerProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref: mergeRefs(containerRef, ref),
      ...containerProps,
      ...props,
      ...formControlProps,
      onBlur,
      onClick,
    }),
    [containerProps, formControlProps, onClick, onBlur, containerRef],
  )

  const getPopoverProps = useCallback(
    (): PopoverProps => ({
      closeOnButton: false,
      isOpen,
      trigger: "never",
      onClose,
      onOpen,
    }),
    [onClose, onOpen, isOpen],
  )

  const getFieldProps: PropGetter = useCallback(
    ({ "aria-label": ariaLabel, ...props } = {}, ref = null) => ({
      ref: mergeRefs(fieldRef, ref),
      "aria-label": ariaLabel ?? "Select the country",
      role: "combobox",
      tabIndex: 0,
      ...fieldProps,
      ...props,
      "aria-activedescendant": descendants.value(focusedIndex)?.node.id,
      "aria-controls": listRef.current?.id,
      "aria-expanded": isOpen,
      "data-active": dataAttr(isOpen),
      "data-placeholder": dataAttr(countryCode === undefined),
      onFocus,
      onKeyDown,
    }),
    [
      descendants,
      fieldProps,
      focusedIndex,
      isOpen,
      countryCode,
      onFocus,
      onKeyDown,
      fieldRef,
      listRef,
    ],
  )

  return {
    formControlProps,
    getContainerProps,
    getFieldProps,
    getPopoverProps,
  }
}

export type UseCountryPickerReturn = ReturnType<typeof useCountryPicker>

export const useCountryPickerList = () => {
  const { focusedIndex, listRef } = usePhoneInputContext()

  const descendants = useCountryPickerDescendantsContext()
  const selectedValue = descendants.value(focusedIndex)

  const beforeFocusedIndex = useRef<number>(-1)

  useEffect(() => {
    if (!listRef.current || !selectedValue) return

    if (beforeFocusedIndex.current === selectedValue.index) return

    const parent = listRef.current
    const child = selectedValue.node

    const parentHeight = parent.clientHeight
    const viewTop = parent.scrollTop
    const viewBottom = viewTop + parentHeight

    const childHeight = child.clientHeight
    const childTop = child.offsetTop
    const childBottom = childTop + childHeight

    const isInView = viewTop <= childTop && childBottom <= viewBottom

    const isScrollBottom = beforeFocusedIndex.current < selectedValue.index

    if (!isInView) {
      if (childBottom <= parentHeight) {
        listRef.current.scrollTo({ top: 0 })
      } else {
        if (!isScrollBottom) {
          listRef.current.scrollTo({ top: childTop + 1 })
        } else {
          listRef.current.scrollTo({ top: childBottom - parentHeight })
        }
      }
    }

    beforeFocusedIndex.current = selectedValue.index
  }, [listRef, selectedValue])

  const getListProps: PropGetter<"ul"> = useCallback(
    () => ({
      ref: listRef,
      "aria-multiselectable": false,
      position: "relative",
      role: "listbox",
      tabIndex: -1,
    }),
    [listRef],
  )

  return {
    getListProps,
  }
}

export type UseCountryPickerListReturn = ReturnType<typeof useCountryPickerList>

export interface UseCountryPickerOptionProps
  extends Omit<HTMLUIProps<"li">, "value"> {
  countryCode: string
  dialCode: string
}

export const useCountryPickerOption = ({
  countryCode: optionCountryCode,
  dialCode,
}: UseCountryPickerOptionProps) => {
  const {
    countryCode,
    fieldRef,
    focusedIndex,
    setFocusedIndex,
    onChange,
    onChangeLabel,
    onClose,
  } = usePhoneInputContext()

  const itemRef = useRef<HTMLLIElement>(null)

  const { index, register } = useCountryPickerDescendant()

  const isSelected = optionCountryCode === countryCode

  const isFocused = index === focusedIndex

  const onClick = useCallback(
    (ev: MouseEvent<HTMLLIElement>) => {
      ev.preventDefault()
      ev.stopPropagation()

      if (!isTargetOption(ev.currentTarget)) {
        if (fieldRef.current) fieldRef.current.focus()

        return
      }

      setFocusedIndex(index)
      onChange(optionCountryCode)

      if (fieldRef.current) fieldRef.current.focus()

      onClose()
    },
    [setFocusedIndex, index, onChange, fieldRef, optionCountryCode, onClose],
  )

  useEffect(() => {
    if (isSelected) onChangeLabel(optionCountryCode)
  }, [optionCountryCode, isSelected, onChangeLabel])

  const getOptionProps: PropGetter<"li"> = useCallback(
    () => ({
      ref: mergeRefs(itemRef, register),
      "aria-checked": ariaAttr(isSelected),
      "aria-disabled": ariaAttr(false),
      "data-country-code": optionCountryCode,
      "data-dial-code": dialCode,
      "data-disabled": dataAttr(false),
      "data-focus": dataAttr(isFocused),
      "data-value": optionCountryCode,
      role: "option",
      tabIndex: -1,
      onClick,
    }),
    [optionCountryCode, dialCode, isFocused, isSelected, onClick, register],
  )

  return {
    isFocused,
    isSelected,
    getOptionProps,
  }
}

export type UseCountryPickerOptionReturn = ReturnType<
  typeof useCountryPickerOption
>
