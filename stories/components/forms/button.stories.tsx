import type { Meta, StoryFn } from "@storybook/react"
import {
  Plus,
  Minus,
  Check,
  ArrowRight,
  Mail,
  Sun,
  Moon,
} from "@yamada-ui/lucide"
import {
  Wrap,
  Button,
  IconButton,
  ButtonGroup,
  CloseButton,
} from "@yamada-ui/react"

type Story = StoryFn<typeof Button>

const meta: Meta<typeof Button> = {
  title: "Components / Forms / Button",
  component: Button,
}

export default meta

export const solid: Story = () => {
  return (
    <Wrap gap="md">
      <Button colorScheme="primary">Primary</Button>

      <Button colorScheme="secondary">Secondary</Button>

      <Button colorScheme="success">Success</Button>

      <Button colorScheme="warning">Warning</Button>

      <Button colorScheme="danger">Danger</Button>

      <Button colorScheme="link">Link</Button>

      <Button colorScheme="gray">Gray</Button>

      <Button colorScheme="neutral">Neutral</Button>

      <Button colorScheme="red">Red</Button>

      <Button colorScheme="rose">Rose</Button>

      <Button colorScheme="pink">Pink</Button>

      <Button colorScheme="orange">Orange</Button>

      <Button colorScheme="amber">Amber</Button>

      <Button colorScheme="yellow">Yellow</Button>

      <Button colorScheme="lime">Lime</Button>

      <Button colorScheme="green">Green</Button>

      <Button colorScheme="emerald">Emerald</Button>

      <Button colorScheme="teal">Teal</Button>

      <Button colorScheme="cyan">Cyan</Button>

      <Button colorScheme="sky">Sky</Button>

      <Button colorScheme="blue">Blue</Button>

      <Button colorScheme="indigo">Indigo</Button>

      <Button colorScheme="violet">Violet</Button>

      <Button colorScheme="purple">Purple</Button>

      <Button colorScheme="fuchsia">Fuchsia</Button>
    </Wrap>
  )
}

export const outline: Story = () => {
  return (
    <Wrap gap="md">
      <Button variant="outline" colorScheme="primary">
        Primary
      </Button>

      <Button variant="outline" colorScheme="secondary">
        Secondary
      </Button>

      <Button variant="outline" colorScheme="success">
        Success
      </Button>

      <Button variant="outline" colorScheme="warning">
        Warning
      </Button>

      <Button variant="outline" colorScheme="danger">
        Danger
      </Button>

      <Button variant="outline" colorScheme="link">
        Link
      </Button>

      <Button variant="outline" colorScheme="gray">
        Gray
      </Button>

      <Button variant="outline" colorScheme="neutral">
        Neutral
      </Button>

      <Button variant="outline" colorScheme="red">
        Red
      </Button>

      <Button variant="outline" colorScheme="rose">
        Rose
      </Button>

      <Button variant="outline" colorScheme="pink">
        Pink
      </Button>

      <Button variant="outline" colorScheme="orange">
        Orange
      </Button>

      <Button variant="outline" colorScheme="amber">
        Amber
      </Button>

      <Button variant="outline" colorScheme="yellow">
        Yellow
      </Button>

      <Button variant="outline" colorScheme="lime">
        Lime
      </Button>

      <Button variant="outline" colorScheme="green">
        Green
      </Button>

      <Button variant="outline" colorScheme="emerald">
        Emerald
      </Button>

      <Button variant="outline" colorScheme="teal">
        Teal
      </Button>

      <Button variant="outline" colorScheme="cyan">
        Cyan
      </Button>

      <Button variant="outline" colorScheme="sky">
        Sky
      </Button>

      <Button variant="outline" colorScheme="blue">
        Blue
      </Button>

      <Button variant="outline" colorScheme="indigo">
        Indigo
      </Button>

      <Button variant="outline" colorScheme="violet">
        Violet
      </Button>

      <Button variant="outline" colorScheme="purple">
        Purple
      </Button>

      <Button variant="outline" colorScheme="fuchsia">
        Fuchsia
      </Button>
    </Wrap>
  )
}

export const ghost: Story = () => {
  return (
    <Wrap gap="md">
      <Button variant="ghost" colorScheme="primary">
        Primary
      </Button>

      <Button variant="ghost" colorScheme="secondary">
        Secondary
      </Button>

      <Button variant="ghost" colorScheme="success">
        Success
      </Button>

      <Button variant="ghost" colorScheme="warning">
        Warning
      </Button>

      <Button variant="ghost" colorScheme="danger">
        Danger
      </Button>

      <Button variant="ghost" colorScheme="link">
        Link
      </Button>

      <Button variant="ghost" colorScheme="gray">
        Gray
      </Button>

      <Button variant="ghost" colorScheme="neutral">
        Neutral
      </Button>

      <Button variant="ghost" colorScheme="red">
        Red
      </Button>

      <Button variant="ghost" colorScheme="rose">
        Rose
      </Button>

      <Button variant="ghost" colorScheme="pink">
        Pink
      </Button>

      <Button variant="ghost" colorScheme="orange">
        Orange
      </Button>

      <Button variant="ghost" colorScheme="amber">
        Amber
      </Button>

      <Button variant="ghost" colorScheme="yellow">
        Yellow
      </Button>

      <Button variant="ghost" colorScheme="lime">
        Lime
      </Button>

      <Button variant="ghost" colorScheme="green">
        Green
      </Button>

      <Button variant="ghost" colorScheme="emerald">
        Emerald
      </Button>

      <Button variant="ghost" colorScheme="teal">
        Teal
      </Button>

      <Button variant="ghost" colorScheme="cyan">
        Cyan
      </Button>

      <Button variant="ghost" colorScheme="sky">
        Sky
      </Button>

      <Button variant="ghost" colorScheme="blue">
        Blue
      </Button>

      <Button variant="ghost" colorScheme="indigo">
        Indigo
      </Button>

      <Button variant="ghost" colorScheme="violet">
        Violet
      </Button>

      <Button variant="ghost" colorScheme="purple">
        Purple
      </Button>

      <Button variant="ghost" colorScheme="fuchsia">
        Fuchsia
      </Button>
    </Wrap>
  )
}

export const withSize: Story = () => {
  return (
    <Wrap gap="md">
      <Button colorScheme="primary" size="xs">
        X Small
      </Button>

      <Button colorScheme="secondary" size="sm">
        Small
      </Button>

      <Button colorScheme="warning" size="md">
        Medium
      </Button>

      <Button colorScheme="danger" size="lg">
        Large
      </Button>
    </Wrap>
  )
}

export const withVariant: Story = () => {
  return (
    <Wrap gap="md">
      <Button colorScheme="primary" variant="solid">
        Solid
      </Button>

      <Button colorScheme="secondary" variant="outline">
        Outline
      </Button>

      <Button colorScheme="warning" variant="ghost">
        Ghost
      </Button>

      <Button colorScheme="danger" variant="link">
        Link
      </Button>

      <Button variant="unstyled">Unstyle</Button>
    </Wrap>
  )
}

export const withDisabled: Story = () => {
  return (
    <Wrap gap="md">
      <Button colorScheme="primary" variant="solid" isDisabled>
        Solid
      </Button>

      <Button colorScheme="secondary" variant="outline" isDisabled>
        Outline
      </Button>

      <Button colorScheme="warning" variant="ghost" isDisabled>
        Ghost
      </Button>

      <Button colorScheme="danger" variant="link" isDisabled>
        Link
      </Button>

      <Button variant="unstyled" isDisabled>
        Unstyle
      </Button>
    </Wrap>
  )
}

export const withIcon: Story = () => {
  return (
    <Wrap gap="md">
      <Button colorScheme="primary" variant="solid" leftIcon={<Plus />}>
        Button
      </Button>

      <Button
        colorScheme="secondary"
        variant="outline"
        rightIcon={<ArrowRight />}
      >
        Button
      </Button>

      <Button colorScheme="warning" variant="ghost" leftIcon={<Mail />}>
        Button
      </Button>

      <Button colorScheme="danger" variant="link" leftIcon={<Check />}>
        Button
      </Button>
    </Wrap>
  )
}

export const iconButton: Story = () => {
  return (
    <Wrap gap="md">
      <IconButton
        colorScheme="primary"
        icon={<Plus fontSize="2xl" />}
        aria-label="Plus"
      />

      <IconButton
        colorScheme="secondary"
        icon={<Minus fontSize="2xl" />}
        aria-label="Minus"
      />

      <IconButton
        colorScheme="warning"
        size="lg"
        icon={<Sun fontSize="2xl" />}
        aria-label="Light"
      />

      <IconButton
        colorScheme="danger"
        size="lg"
        icon={<Moon fontSize="2xl" />}
        aria-label="Dark"
      />
    </Wrap>
  )
}

export const closeButton: Story = () => {
  return (
    <Wrap gap="md">
      <CloseButton size="sm" />

      <CloseButton size="md" />

      <CloseButton size="lg" />
    </Wrap>
  )
}

export const withLoading: Story = () => {
  return (
    <Wrap gap="md">
      <Button isLoading colorScheme="primary">
        Button
      </Button>

      <Button isLoading colorScheme="secondary" loadingIcon="dots">
        Button
      </Button>

      <Button isLoading colorScheme="warning" variant="outline">
        Button
      </Button>

      <Button isLoading colorScheme="danger" variant="ghost">
        Button
      </Button>

      <Button isLoading loadingText="Loading..." colorScheme="primary">
        Button
      </Button>

      <Button
        isLoading
        loadingText="Loading..."
        loadingPlacement="end"
        loadingIcon="grid"
        colorScheme="secondary"
        variant="outline"
      >
        Button
      </Button>
    </Wrap>
  )
}

export const buttonGroup: Story = () => {
  return (
    <>
      <ButtonGroup isAttached variant="outline">
        <Button>Button</Button>
        <IconButton icon={<Plus />} aria-label="Add" />
      </ButtonGroup>

      <ButtonGroup gap="sm">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>

      <ButtonGroup isAttached isDisabled variant="outline">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>

      <ButtonGroup direction="column" gap="sm">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>

      <ButtonGroup direction="column" isAttached variant="outline">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>

      <ButtonGroup isAttached variant="outline">
        <Button>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>
    </>
  )
}
