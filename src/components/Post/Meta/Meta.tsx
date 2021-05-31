import React from 'react'
import { Link } from 'gatsby'
import { getReadableDate } from '../../../utils'
import styles from './Meta.module.scss'

interface Props {
  series?: string
  seriesSlug?: string
  date: string
}

const dateFormat: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' }

const Meta: React.FC<Props> = ({ series, seriesSlug, date }) => (
  <div className={styles['meta']}>
    <p>
      <span>Published {getReadableDate(date, dateFormat)}</span>
      {series && seriesSlug ? (
        <span>
          <span className={styles['meta__divider']} />
          <span>in</span>
          <span className={styles['meta__divider']} />
          <span className={styles['meta__series']}>
            <Link to={seriesSlug} className={styles['meta__series-link']}>
              {series}
            </Link>
          </span>
        </span>
      ) : null}
    </p>
  </div>
)

export default Meta
