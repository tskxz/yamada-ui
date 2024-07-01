import { render, a11y, screen } from "@yamada-ui/test"
import { Button } from "../src"

describe("<Button />", () => {
  test("passes a11y test", async () => {
    await a11y(<Button>test</Button>)
  })

  test("renders with icon", () => {
    const { rerender, getByText } = render(
      <Button rightIcon={<>right icon</>} />,
    )
    expect(getByText("right icon")).toBeTruthy()

    rerender(<Button leftIcon={<>left icon</>} />)
    expect(getByText("left icon")).toBeTruthy()
  })

  test("shows loading text if isLoading, loadingText and loadingIcon", () => {
    const { rerender, getByTestId } = render(
      <Button
        data-testid="btn"
        isLoading
        loadingText="Submitting"
        loadingIcon={<>loading start</>}
      >
        Submit
      </Button>,
    )
    expect(getByTestId("btn")).toHaveAttribute("data-loading", "")

    // children text is hidden
    expect(screen.queryByText("Submit")).toBeNull()

    // Submitting" visually hidden label shown
    expect(screen.getByText("Submitting")).toBeInTheDocument()

    // Confirm loading position
    expect(screen.getByText(/loading start/i)).toHaveClass(
      "ui-button__loading--start",
    )

    rerender(
      <Button
        isLoading
        loadingPlacement="end"
        loadingText="Test if loading placement"
        loadingIcon={<>loading end</>}
      >
        Submit
      </Button>,
    )

    expect(screen.getByText(/loading end/i)).toHaveClass(
      "ui-button__loading--end",
    )
  })

  test("has the proper aria attributes", () => {
    const { rerender, getByTestId } = render(
      <Button data-testid="btn">Hello</Button>,
    )

    const button = getByTestId("btn")

    expect(button).not.toHaveAttribute("data-loading", "")
    expect(button).not.toHaveAttribute("data-active", "")

    // isLoading sets data-loading=""
    rerender(<Button isLoading>Hello</Button>)
    expect(button).toHaveAttribute("data-loading", "")

    // isActive sets data-active=""
    rerender(<Button isActive>Hello</Button>)
    expect(button).toHaveAttribute("data-active", "")
  })

  test("has the proper type attribute", () => {
    const { getByTestId, rerender } = render(
      <Button data-testid="btn">Submit</Button>,
    )
    expect(getByTestId("btn")).toHaveAttribute("type", "button")

    rerender(
      <Button data-testid="btn" type="submit">
        Submit
      </Button>,
    )
    expect(getByTestId("btn")).toHaveAttribute("type", "submit")

    rerender(
      <Button data-testid="btn" as="button">
        Submit
      </Button>,
    )
    expect(getByTestId("btn")).toHaveAttribute("type")
  })

  test("has no the type", () => {
    const { getByTestId } = render(
      <Button data-testid="btn" as="span">
        Submit
      </Button>,
    )
    expect(getByTestId("btn")).not.toHaveAttribute("type")
  })

  test("should be disabled", () => {
    const { getByTestId, getByRole, rerender } = render(
      <Button isDisabled data-testid="btn">
        Invalid Button
      </Button>,
    )
    const button = getByRole("button")
    expect(button).toBeDisabled()

    rerender(
      <Button as="div" isDisabled data-testid="btn">
        Invalid Button
      </Button>,
    )

    const buttonAsDiv = getByTestId("btn")
    expect(buttonAsDiv).toHaveAttribute("disabled")
  })
})
