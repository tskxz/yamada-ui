import { Button } from "@yamada-ui/button"
import type { CSSUIObject, HTMLUIProps, ThemeProps } from "@yamada-ui/core"
import {
  forwardRef,
  useMultiComponentStyle,
  omitThemeProps,
  ui,
} from "@yamada-ui/core"
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverTrigger,
  PopoverAnchor,
} from "@yamada-ui/popover"
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

  return (
    <TourProvider value={{ styles, ...rest }}>
      <TourPanel />
    </TourProvider>
  )
})

type TourMaskProps = HTMLUIProps<"div">

export const TourMask = forwardRef<TourMaskProps, "div">(() => {
  return (
    <div>
      <div></div>
    </div>
  )
})

type TourPanelProps = HTMLUIProps<"div">

export const TourPanel = forwardRef<TourPanelProps, "div">(() => {
  const rest = useTour()
  const { steps, current, component } = rest
  return typeof component === "function" ? (
    component(steps, current)
  ) : (
    <DefaultPanel {...rest} />
  )
})

type DefaultPanelProps = HTMLUIProps<"div"> & TourOptions
export const DefaultPanel = forwardRef<DefaultPanelProps, "div">((props) => {
  const { steps, current } = props
  const { title, description } = steps[current]
  const { target } = steps[current]

  if (!target.current) {
    return null
  }

  return (
    <Popover>
      <PopoverTrigger>
        <Button>Open Popover</Button>
      </PopoverTrigger>
      <PopoverAnchor>
        <ui.div></ui.div>
      </PopoverAnchor>
      <PopoverContent>
        <PopoverHeader>{title}</PopoverHeader>
        <PopoverBody>{description}</PopoverBody>
        <PopoverFooter>
          <Button>Prev</Button>
          <Button>Next</Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
})
