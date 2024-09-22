import type { CSSUIObject, HTMLUIProps, UIPropGetter } from "@yamada-ui/core"
import { layoutStyleProperties } from "@yamada-ui/core"
import {
  formControlProperties,
  useFormControlProps,
  type FormControlOptions,
} from "@yamada-ui/form-control"
import type { PopoverProps } from "@yamada-ui/popover"
import { createDescendant } from "@yamada-ui/use-descendant"
import { useDisclosure } from "@yamada-ui/use-disclosure"
import { useOutsideClick } from "@yamada-ui/use-outside-click"
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
import { useCallback, useEffect, useId, useRef, useState } from "react"
import type {
  Dispatch,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  RefObject,
  SetStateAction,
} from "react"

export type MaybeValue = string

type PhoneInputContext = Omit<
  UsePhoneInputProps,
  "value" | "defaultValue" | "onChange" | "isEmpty"
> & {
  label: MaybeValue | undefined
  onChange: (newValue: string) => void
  onChangeLabel: (newValue: string, runOmit?: boolean) => void
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  onFocusFirst: () => void
  onFocusLast: () => void
  onFocusNext: () => void
  onFocusPrev: () => void
  focusedIndex: number
  setFocusedIndex: Dispatch<SetStateAction<number>>
  containerRef: RefObject<HTMLDivElement>
  fieldRef: RefObject<HTMLDivElement>
  listRef: RefObject<HTMLUListElement>
  styles: Record<string, CSSUIObject>
}

export const [PhoneInputProvider, usePhoneInputContext] =
  createContext<PhoneInputContext>({
    strict: false,
    name: "PhoneInputContext",
  })

const isTargetOption = (target: EventTarget | null): boolean =>
  isHTMLElement(target) && !!target?.getAttribute("role")?.startsWith("option")

export const {
  DescendantsContextProvider: SelectDescendantsContextProvider,
  useDescendantsContext: useSelectDescendantsContext,
  useDescendants: useSelectDescendants,
  useDescendant: useSelectDescendant,
} = createDescendant<HTMLElement>()

export type UsePhoneInputProps<T extends MaybeValue = string> = Omit<
  HTMLUIProps<"div">,
  "defaultValue" | "onChange" | "offset"
> &
  Omit<
    PopoverProps,
    | "initialFocusRef"
    | "closeOnButton"
    | "trigger"
    | "autoFocus"
    | "restoreFocus"
    | "openDelay"
    | "closeDelay"
  > &
  FormControlOptions & {
    /**
     * The value of the select.
     */
    value?: T
    /**
     * The initial value of the select.
     */
    defaultValue?: T
    /**
     * The callback invoked when value state changes.
     */
    onChange?: (value: T) => void
  }

export const useCountryPicker = <T extends string>({
  closeOnBlur = true,
  closeOnEsc = true,
  placement = "bottom-start",
  duration = 0.2,
  isOpen: isOpenProp,
  onOpen: onOpenProp,
  onClose: onCloseProp,
  ...rest
}: UsePhoneInputProps<T>) => {
  rest = useFormControlProps(rest)

  const { "aria-readonly": _ariaReadonly, ...formControlProps } = pickObject(
    rest,
    formControlProperties,
  )
  const [containerProps, fieldProps] = splitObject(
    omitObject(rest, ["value", "defaultValue", "onChange", "aria-readonly"]),
    layoutStyleProperties,
  )

  const descendants = useSelectDescendants()

  const [focusedIndex, setFocusedIndex] = useState<number>(-1)

  const containerRef = useRef<HTMLDivElement>(null)
  const fieldRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const timeoutIds = useRef<Set<any>>(new Set([]))

  const [label, setLabel] = useState<T | undefined>(undefined)
  const [dialCode, setDialCode] = useState<T | undefined>(undefined)

  const isFocused = focusedIndex > -1

  const onFocusFirst = useCallback(() => {
    const id = setTimeout(() => {
      const first = descendants.enabledFirstValue()

      if (!first) return

      setFocusedIndex(first.index)
    })

    timeoutIds.current.add(id)
  }, [descendants])

  const onFocusLast = useCallback(() => {
    const id = setTimeout(() => {
      const last = descendants.enabledLastValue()

      if (!last) return

      setFocusedIndex(last.index)
    })

    timeoutIds.current.add(id)
  }, [descendants])

  const onFocusSelected = useCallback(() => {
    const id = setTimeout(() => {
      const values = descendants.enabledValues()

      const selected = values.find(
        ({ node }) => node.dataset.countryCode === label,
      )

      if (selected) setFocusedIndex(selected.index)
    })

    timeoutIds.current.add(id)
  }, [descendants, label])

  const onFocusNext = useCallback(() => {
    const id = setTimeout(() => {
      const next = descendants.enabledNextValue(focusedIndex)

      if (!next) return

      setFocusedIndex(next.index)
    })

    timeoutIds.current.add(id)
  }, [descendants, focusedIndex, setFocusedIndex])

  const onFocusPrev = useCallback(() => {
    const id = setTimeout(() => {
      const prev = descendants.enabledPrevValue(focusedIndex)

      if (!prev) return

      setFocusedIndex(prev.index)
    })

    timeoutIds.current.add(id)
  }, [descendants, focusedIndex, setFocusedIndex])

  const onFocusFirstOrSelected = !label ? onFocusFirst : onFocusSelected
  const onFocusLastOrSelected = !label ? onFocusLast : onFocusSelected

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

      setLabel(selectedValues[0]?.countryCode as T)
      setDialCode(selectedValues[0]?.dialCode as T)
    },
    [descendants],
  )

  const onChange = useCallback(
    (newValue: string) => {
      onChangeLabel(newValue)
    },
    [onChangeLabel],
  )

  const {
    isOpen,
    onOpen: onInternalOpen,
    onClose,
  } = useDisclosure({
    isOpen: isOpenProp,
    onOpen: onOpenProp,
    onClose: onCloseProp,
  })

  const onOpen = useCallback(() => {
    onInternalOpen()
  }, [onInternalOpen])

  const onSelect = useCallback(() => {
    let enabledValue = descendants.value(focusedIndex)

    if (!enabledValue) return

    const value = enabledValue.node.dataset.value ?? ""

    onChange(value)

    onClose()
  }, [descendants, focusedIndex, onChange, onClose])

  const onClick = useCallback(() => {
    if (isOpen) return

    onOpen()

    onFocusFirstOrSelected()
  }, [isOpen, onFocusFirstOrSelected, onOpen])

  const onFocus = useCallback(() => {
    if (isOpen) return

    onOpen()
    onFocusFirstOrSelected()
  }, [isOpen, onFocusFirstOrSelected, onOpen])

  const onBlur = useCallback(
    (ev: FocusEvent<HTMLDivElement>) => {
      const relatedTarget = getEventRelatedTarget(ev)

      if (isContains(containerRef.current, relatedTarget)) return

      if (!closeOnBlur) return

      if (isOpen) onClose()
    },
    [closeOnBlur, isOpen, onClose],
  )

  const onKeyDown = useCallback(
    (ev: KeyboardEvent<HTMLDivElement>) => {
      if (ev.key === " ") ev.key = ev.code

      const actions: Record<string, Function | undefined> = {
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
        Space: isFocused
          ? onSelect
          : !isOpen
            ? funcAll(onOpen, onFocusFirstOrSelected)
            : undefined,
        Enter: isFocused
          ? onSelect
          : !isOpen
            ? funcAll(onOpen, onFocusFirstOrSelected)
            : undefined,
        Home: isOpen ? onFocusFirst : undefined,
        End: isOpen ? onFocusLast : undefined,
        Escape: closeOnEsc ? onClose : undefined,
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
      closeOnEsc,
      onClose,
      onFocusNext,
      onFocusPrev,
    ],
  )

  useOutsideClick({
    ref: containerRef,
    handler: onClose,
    enabled: isOpen && closeOnBlur,
  })

  useUpdateEffect(() => {
    if (!isOpen) setFocusedIndex(-1)
  }, [isOpen])

  useUnmountEffect(() => {
    timeoutIds.current.forEach((id) => clearTimeout(id))
    timeoutIds.current.clear()
  })

  const getPopoverProps = useCallback(
    (props?: PopoverProps): PopoverProps => ({
      ...rest,
      ...props,
      isOpen,
      onOpen,
      onClose,
      placement,
      duration,
      trigger: "never",
      closeOnButton: false,
      closeOnBlur,
    }),
    [duration, closeOnBlur, onClose, onOpen, placement, rest, isOpen],
  )

  const getContainerProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => ({
      ref: mergeRefs(containerRef, ref),
      ...containerProps,
      ...props,
      ...formControlProps,
      onClick,
      onBlur,
    }),
    [containerProps, formControlProps, onBlur, onClick],
  )

  const getFieldProps: UIPropGetter = useCallback(
    (props = {}, ref = null) => ({
      "aria-label": "Select the country",
      role: "combobox",
      ref: mergeRefs(fieldRef, ref),
      tabIndex: 0,
      ...fieldProps,
      ...props,
      "data-active": dataAttr(isOpen),
      "data-placeholder": dataAttr(label === undefined),
      "aria-controls": listRef.current?.id,
      "aria-activedescendant": descendants.value(focusedIndex)?.node.id,
      "aria-expanded": isOpen,
      onFocus,
      onKeyDown,
    }),
    [descendants, fieldProps, focusedIndex, isOpen, label, onFocus, onKeyDown],
  )

  return {
    descendants,
    label,
    dialCode,
    focusedIndex,
    isOpen,
    containerRef,
    fieldRef,
    listRef,
    formControlProps,
    onChangeLabel,
    onChange,
    onOpen,
    onClose,
    onFocusFirst,
    onFocusLast,
    onFocusSelected,
    onFocusNext,
    onFocusPrev,
    setFocusedIndex,
    getPopoverProps,
    getContainerProps,
    getFieldProps,
  }
}

export type UseCountryPickerReturn = ReturnType<typeof useCountryPicker>

export const useCountryPickerList = () => {
  const { listRef, focusedIndex } = usePhoneInputContext()

  const descendants = useSelectDescendantsContext()

  const beforeFocusedIndex = useRef<number>(-1)
  const selectedValue = descendants.value(focusedIndex)

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

  const id = useId()

  const getListProps: UIPropGetter<"ul"> = useCallback(
    (props = {}, ref = null) => ({
      id,
      ref: mergeRefs(listRef, ref),
      role: "listbox",
      tabIndex: -1,
      position: "relative",
      ...props,
    }),
    [id, listRef],
  )

  return {
    getListProps,
  }
}

export type UseCountryPickerListReturn = ReturnType<typeof useCountryPickerList>

export type UseCountryPickerOptionProps = Omit<HTMLUIProps<"li">, "value"> & {
  countryCode?: string

  dialCode?: string

  countryName?: string
}

export const useCountryPickerOption = (props: UseCountryPickerOptionProps) => {
  const {
    label,
    fieldRef,
    focusedIndex,
    onChange,
    onChangeLabel,
    onClose,
    setFocusedIndex,
  } = usePhoneInputContext()

  let { children, countryCode, dialCode, countryName, ...computedProps } = {
    ...props,
  }

  const itemRef = useRef<HTMLLIElement>(null)

  const { index, register } = useSelectDescendant()

  const isSelected = (countryCode ?? "") === label
  const isFocused = index === focusedIndex
  // console.log(focusedIndex, index)

  const onClick = useCallback(
    (ev: MouseEvent<HTMLLIElement>) => {
      ev.preventDefault()
      ev.stopPropagation()

      if (!isTargetOption(ev.currentTarget)) {
        if (fieldRef.current) fieldRef.current.focus()

        return
      }

      setFocusedIndex(index)

      onChange(countryCode ?? "")

      if (fieldRef.current) fieldRef.current.focus()

      onClose()
    },
    [setFocusedIndex, index, onChange, countryCode, fieldRef, onClose],
  )

  useEffect(() => {
    if (isSelected) onChangeLabel(countryCode ?? "")
  }, [countryCode, isSelected, onChangeLabel])

  const getOptionProps: UIPropGetter<"li"> = useCallback(
    (props = {}, ref = null) => {
      return {
        role: "option",
        tabIndex: -1,
        ...props,
        ...computedProps,
        ref: mergeRefs(itemRef, ref, register),
        "data-value": countryCode ?? "",
        "data-country-code": countryCode ?? "",
        "data-dial-code": dialCode ?? "",
        "data-focus": dataAttr(isFocused),
        "data-disabled": dataAttr(false),
        "aria-checked": ariaAttr(isSelected),
        "aria-disabled": ariaAttr(false),
        onClick: onClick,
      }
    },
    [
      countryCode,
      computedProps,
      isFocused,
      isSelected,
      onClick,
      register,
      dialCode,
    ],
  )

  return {
    countryCode,
    countryName,
    dialCode,
    isSelected,
    isFocused,
    children,
    getOptionProps,
  }
}

export type UseCountryPickerOptionReturn = ReturnType<
  typeof useCountryPickerOption
>
