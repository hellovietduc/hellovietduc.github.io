import React from 'react'
import type { Icon as IconProps } from '../../types'
import styles from './Icon.module.scss'

interface Props {
  name: string
  icon: IconProps
}

const Icon: React.FC<Props> = ({ name, icon }) => (
  <svg className={styles['icon']} viewBox={icon.viewBox}>
    <title>{name}</title>
    <path d={icon.path} />
  </svg>
)

export default Icon
