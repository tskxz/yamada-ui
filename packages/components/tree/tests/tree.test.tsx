import { a11y } from "@yamada-ui/test"
import { Tree } from "../src"

describe("<Tree />", () => {
  test("Tree renders correctly", async () => {
    await a11y(<Tree />)
  })
})
