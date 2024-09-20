import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
} from "@yamada-ui/core"
import { createContext } from "@yamada-ui/utils"
import React from "react"

type TourContext = TourOptions & {
  styles: Record<string, CSSUIObject>
}

const [TourProvider, useTour] = createContext<TourContext>({
  strict: false,
  name: "TourContext",
})
export { useTour }

type Step = {
  target: React.MutableRefObject<React.ReactElement | null>
  cover?: React.ReactElement | string
  title: string
  description: string
}
type TourOptions = {
  open: boolean
  current: number
  onClose?: () => void
  onNext?: () => void
  onPrev?: () => void
  steps: Step[]
  component?: (steps: Step[], current: number) => React.ReactNode
}

/**
 * `Tour` is component.
 *
 * @see Docs https://yamada-ui.com/components/overlay/tour
 */
export type TourProps = HTMLUIProps<"div"> & ThemeProps<"Tour"> & TourOptions

export const Tour = forwardRef<TourProps, "div">((props) => {
  const [styles, mergedProps] = useMultiComponentStyle("Tour", props)
  const { ...rest } = omitThemeProps(mergedProps)

  return <TourProvider value={{ styles, ...rest }}></TourProvider>
})

// type TourMaskProps = HTMLUIProps<"div">

// export const TourMask = forwardRef<any, "div">((props, ref) => {
//   return (
//     <div>
//       <div></div>
//     </div>
//   )
// })

// type TourPanelProps = HTMLUIProps<"div"> & TourOptions

// export const TourPanel = forwardRef<TourPanelProps, "div">((props, ref) => {
//   const rest = useTour()
//   const { steps, current, component } = rest
//   return typeof component === "function" ? (
//     component(steps, current)
//   ) : (
//     <DefaultPanel {...rest} />
//   )
// })

// type DefaultPanelProps = TourPanelProps
// export const DefaultPanel = forwardRef<DefaultPanelProps, "div">(
//   (props, ref) => {
//     return <Popover></Popover>
//   },
// )
