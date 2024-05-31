import {
  autoUpdate,
  useFloating as useFloatingOriginal,
  offset,
  shift,
  flip,
} from "@floating-ui/react-dom"
import type { Middleware, Placement } from "@floating-ui/react-dom"
import type { Token } from "@yamada-ui/core"
import { useValue } from "@yamada-ui/use-value"
import type { PropGetter } from "@yamada-ui/utils"
import { mergeRefs } from "@yamada-ui/utils"
import { useCallback } from "react"

export const floatingProperties: any[] = [
  "enabled",
  "offset",
  "gutter",
  "shift",
  "flip",
  "matchWidth",
  "boundary",
  "eventListeners",
  "strategy",
  "placement",
  "middlewares",
]

export type UseFloatingProps = {
  /**
   * Whether the floating-ui should be enabled.
   *
   * @default true
   */
  enabled?: boolean
  /**
   * The main and cross-axis offset to displace floating element from its reference element.
   */
  offset?: Parameters<typeof offset>
  /**
   * shift's argument
   *
   * @see https://floating-ui.com/docs/shift
   */
  shift?: Parameters<typeof shift>
  /**
   * If `true`, the floating will change its placement and flip when it's about to overflow its boundary area.
   *
   * @default true
   */
  flip?: boolean
  /**
   * If `true`, the floating will match the width of the reference at all times.
   * It's useful for `autocomplete`, `date-picker` and `select` patterns.
   *
   * @default false
   */
  matchWidth?: boolean
  /**
   * If provided, determines whether the floating will reposition itself on `scroll`  and `resize` of the window.
   *
   * @default true
   */
  eventListeners?: boolean
  /**
   * The CSS positioning strategy to use.
   *
   * @default 'absolute'
   */
  strategy?: "absolute" | "fixed"
  /**
   * The placement of the floating relative to its reference.
   *
   * @default 'bottom'
   */
  placement?: Token<Placement>
  /**
   * Array of floating-ui middlewares.
   * Check the docs to see the list of possible middlewares you can pass.
   *
   * @see Docs https://floating-ui.org/docs/v2/middlewares/
   */
  middlewares?: Array<Middleware>
}

export const useFloating = ({
  enabled = true,
  eventListeners = true,
  matchWidth,
  offset: offsetOption,
  flip: isFlip = true,
  shift: shiftOption,
  strategy = "absolute",
  placement: _placement = "bottom",
  middlewares,
}: UseFloatingProps = {}) => {
  const placement = useValue(_placement)

  const {
    update: updateFloating,
    refs,
    floatingStyles,
  } = useFloatingOriginal({
    strategy,
    placement,
    transform: true,
    open: enabled,
    middleware: [
      offsetOption ? offset(...offsetOption) : undefined,
      isFlip ? flip() : undefined,
      shiftOption ? shift(...shiftOption) : undefined,
      ...(middlewares || []),
    ],
    whileElementsMounted: eventListeners ? autoUpdate : undefined,
  })

  const referenceRef = refs.setReference

  const getReferenceProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref: mergeRefs(ref, referenceRef),
    }),
    [referenceRef],
  )

  const floatingRef = refs.setFloating

  const getPopperProps: PropGetter = useCallback(
    (props = {}, ref = null) => ({
      ...props,
      ref: mergeRefs(floatingRef, ref),
      style: {
        ...props.style,
        position: strategy,
        minWidth: matchWidth ? "max-content" : undefined,
        inset: "0 auto auto 0",
        ...floatingStyles,
      },
    }),
    [strategy, floatingRef, matchWidth, floatingStyles],
  )

  return {
    update: () => updateFloating(),
    referenceRef,
    floatingRef,
    getPopperProps,
    getReferenceProps,
  }
}

export type UseFloatingReturn = ReturnType<typeof useFloating>
