import { incmix } from '@incmix-ui/react'
import * as React from 'react'

export const Table = props => (
  <incmix.div overflowX="auto">
    <incmix.table textAlign="left" mt="32px" width="full" {...props} />
  </incmix.div>
)

export const THead = props => (
  <incmix.th bg="gray.50" _dark={{ bg: 'whiteAlpha.100' }} fontWeight="semibold" p={2} fontSize="sm" {...props} />
)

export const TData = props => (
  <incmix.td p={2} borderTopWidth="1px" borderColor="inherit" fontSize="sm" whiteSpace="normal" {...props} />
)
