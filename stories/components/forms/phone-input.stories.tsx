import type { Meta, StoryFn } from "@storybook/react"
import { PhoneInput } from "@yamada-ui/react"

type Story = StoryFn<typeof PhoneInput>

const meta: Meta<typeof PhoneInput> = {
  component: PhoneInput,
  title: "Components / Forms / PhoneInput",
}

export default meta

export const basic: Story = () => {
  return <PhoneInput />
}
