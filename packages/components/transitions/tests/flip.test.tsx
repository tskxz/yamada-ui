import type { AiryIdent } from "../src"
import { a11y, render, TestIcon, waitFor } from "@yamada-ui/test"
import { noop } from "@yamada-ui/utils"
import { useState } from "react"
import { Flip } from "../src"

describe("<Flip />", () => {
  test("passes a11y test", () => {
    a11y(<Flip from={<p>ON</p>} to={<p>OFF</p>} />)
  })

  test("should render Flip with value and onChange", async () => {
    const TestComponent = () => {
      const [value, onChange] = useState<AiryIdent>("to")

      return (
        <Flip
          from={<TestIcon />}
          to={<TestIcon />}
          value={value}
          onChange={onChange}
        />
      )
    }

    const { container, user } = render(<TestComponent />)

    const button = container.querySelector("button") as HTMLButtonElement
    expect(button).toHaveAttribute("data-value", "to")

    await user.click(button)

    await waitFor(() => {
      expect(button).toHaveAttribute("data-value", "from")
    })
  })

  test("should be read only", () => {
    const { container, user } = render(
      <Flip from={<TestIcon />} isReadOnly to={<TestIcon />} />,
    )

    const button = container.querySelector("button") as HTMLButtonElement
    expect(button).toHaveAttribute("data-value", "from")

    user.click(button)
    expect(button).toHaveAttribute("data-value", "from")
  })

  test("should be disabled", () => {
    const { container, user } = render(
      <Flip from={<TestIcon />} isDisabled to={<TestIcon />} />,
    )

    const button = container.querySelector("button") as HTMLButtonElement
    expect(button).toHaveAttribute("data-disabled")
    expect(button).toHaveAttribute("data-value", "from")

    user.click(button)

    expect(button).toHaveAttribute("data-value", "from")
  })

  test("should be render Flip with orientation", () => {
    const { container } = render(
      <Flip
        from={<TestIcon />}
        isDisabled
        orientation="vertical"
        to={<TestIcon />}
      />,
    )

    const button = container.querySelector("button") as HTMLButtonElement
    expect(button).toHaveClass("ui-flip__vertical")
  })

  test("should warn when dimensions of from element and to element don't match", () => {
    const mockElementDimensions = (
      height: { from: number; to: number },
      width: { from: number; to: number },
    ) => {
      Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
        configurable: true,
        get() {
          return this.className.includes("ui-flip__from")
            ? height.from
            : height.to
        },
      })

      Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
        configurable: true,
        get() {
          return this.className.includes("ui-flip__from")
            ? width.from
            : width.to
        },
      })
    }

    const consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(noop)

    mockElementDimensions({ from: 16, to: 32 }, { from: 16, to: 32 })

    render(
      <Flip
        from={<TestIcon data-testid="test-icon" />}
        to={<TestIcon data-testid="test-icon" />}
      />,
    )

    expect(consoleWarnSpy).toHaveBeenCalledOnce()

    consoleWarnSpy.mockRestore()
  })
})
