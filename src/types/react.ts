import type { ReactNode } from 'react'

export type RenderCallback = {
  render: (data: any) => ReactNode
}

export type NoProps = Record<string, never>

export type Styles = Record<string, string | number>

export interface Icon {
  path?: string
  viewBox?: string
}
