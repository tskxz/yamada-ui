import { Box, StackProps, VStack, forwardRef } from '@yamada-ui/react'
import { memo } from 'react'
import { DocTree } from 'components/navigation'
import { DocWithChildren } from 'contentlayer/generated'

export type SidebarProps = StackProps & { tree: DocWithChildren[] }

export const Sidebar = memo(
  forwardRef<SidebarProps, 'aside'>(({ tree, ...rest }, ref) => {
    return (
      <VStack
        ref={ref}
        as='aside'
        position='sticky'
        top='4rem'
        w='sm'
        maxH='calc(100dvh - 4rem)'
        {...rest}
      >
        <VStack as='nav' overflowY='scroll' overscrollBehavior='contain'>
          <DocTree pt='lg' pb='16' pr='lg' tree={tree} />
        </VStack>

        <Box
          position='absolute'
          top='0'
          left='0'
          right='0'
          w='full'
          h='4'
          bgGradient={[
            'linear(to-t, rgba(255, 255, 255, 0), white)',
            'linear(to-t, rgba(0, 0, 0, 0), black)',
          ]}
        />
        <Box
          position='absolute'
          bottom='0'
          left='0'
          right='0'
          w='full'
          h='4'
          bgGradient={[
            'linear(to-b, rgba(255, 255, 255, 0), white)',
            'linear(to-b, rgba(0, 0, 0, 0), black)',
          ]}
        />
      </VStack>
    )
  }),
)
