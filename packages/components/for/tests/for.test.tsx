import { a11y, render } from "@yamada-ui/test"
import { For } from "../src"
import { Box, Text } from "../../lucide/src"

describe("<For />", () => {
  test("For renders correctly", async () => {
    await a11y(
      <For each={[{ name: "one" }, { name: "two" }, { name: "three" }]}>
        {(item, index) => (
          <Box borderWidth="1px" key={index} p="4">
            <Text fontWeight="bold">{item.name}</Text>
          </Box>
        )}
      </For>,
    )
  })
})
