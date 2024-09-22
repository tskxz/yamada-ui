import type { Meta, StoryFn } from "@storybook/react"
import { PhoneInput } from "@yamada-ui/react"

type Story = StoryFn<typeof PhoneInput>

const meta: Meta<typeof PhoneInput> = {
  title: "Components / Forms / PhoneInput",
  component: PhoneInput,
}

export default meta

export const basic: Story = () => {
  return <PhoneInput></PhoneInput>
}
