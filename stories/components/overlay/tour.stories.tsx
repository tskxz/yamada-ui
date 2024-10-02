import type { Meta, StoryFn } from "@storybook/react"
import { Button, Tour } from "@yamada-ui/react"
import { useRef } from "react"

type Story = StoryFn<typeof Tour>

const meta: Meta<typeof Tour> = {
  title: "Components / Overlay / Tour",
  component: Tour,
}

export default meta

export const basic: Story = () => {
  const ref1 = useRef<any>(null)

  return (
    <>
      <Button ref={ref1}>Target Button</Button>
      <Tour
        open
        steps={[{ title: "Hello Tour1", description: "test1", target: ref1 }]}
        current={0}
      />
    </>
  )
}
