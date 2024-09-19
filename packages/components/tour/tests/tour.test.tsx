import { a11y } from "@yamada-ui/test"
import { Tour } from "../src"

describe("<Tour />", () => {
  test("Tour renders correctly", async () => {
    await a11y(<Tour />)
  })
})
