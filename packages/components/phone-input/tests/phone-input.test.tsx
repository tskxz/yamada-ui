import { a11y } from "@yamada-ui/test"
import { PhoneInput } from "../src"

describe("<PhoneInput />", () => {
  test("PhoneInput renders correctly", async () => {
    await a11y(<PhoneInput />)
  })
})
