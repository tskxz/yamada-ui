import { renderHook } from "@yamada-ui/test"
import { useFloating } from "../src"

describe("useFloating", () => {
  test("return exact style", () => {
    const { result } = renderHook(() => useFloating())
    expect(result.current.getPopperProps().style).toMatchObject({
      inset: "0 auto auto 0",
      left: 0,
      minWidth: undefined,
      position: "absolute",
      top: 0,
    })
  })
})
