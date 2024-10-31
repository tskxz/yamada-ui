import type { Meta, StoryFn } from "@storybook/react"
import { For } from "@yamada-ui/react"

type Story = StoryFn<typeof For>

const meta: Meta<typeof For> = {
  component: For,
  title: "Components / Other / For",
}

export default meta

export const basic: Story = () => {
  return <For></For>
}
