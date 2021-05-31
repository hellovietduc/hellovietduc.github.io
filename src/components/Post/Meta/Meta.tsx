import React from 'react'
import { Link } from 'gatsby'
import { getReadableDate } from '../../../utils'
import styles from './Meta.module.scss'

interface Props {
  category: string
  seriesSlug?: string
  date: string
}

const dateFormat: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' }

const Meta: React.FC<Props> = ({ category, seriesSlug, date }) => (
  <div className={styles['meta']}>
    <p>
      <span>Published {getReadableDate(date, dateFormat)}</span>
      {category && seriesSlug ? (
        <span>
          <span className={styles['meta__divider']} />
          <span>in</span>
          <span className={styles['meta__divider']} />
          <span className={styles['meta__category']}>
            <Link to={seriesSlug} className={styles['meta__category-link']}>
              {category}
            </Link>
          </span>
        </span>
      ) : null}
    </p>
  </div>
)

export default Meta
