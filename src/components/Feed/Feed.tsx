import React from 'react'
import { Link } from 'gatsby'
import { getReadableDate } from '../../utils'
import type { Edges } from '../../types'
import styles from './Feed.module.scss'

interface Props {
  edges: Edges
}

const dateFormat: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

const Feed: React.FC<Props> = ({ edges }) => (
  <div className={styles['feed']}>
    {edges.map((edge) => {
      const publishedDate = getReadableDate(edge.node.frontmatter.date, dateFormat)
      return (
        <div className={styles['feed__item']} key={edge.node.fields.slug}>
          <div className={styles['feed__item-meta']}>
            <time className={styles['feed__item-meta-time']} dateTime={publishedDate}>
              {publishedDate}
            </time>
            {edge.node.fields.seriesSlug ? (
              <span>
                <span className={styles['feed__item-meta-divider']} />
                <span className={styles['feed__item-meta-category']}>
                  <Link to={edge.node.fields.seriesSlug} className={styles['feed__item-meta-category-link']}>
                    {edge.node.frontmatter.category}
                  </Link>
                </span>
              </span>
            ) : null}
          </div>
          <h2 className={styles['feed__item-title']}>
            <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>
              {edge.node.frontmatter.title}
            </Link>
          </h2>
          <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p>
          <Link className={styles['feed__item-readmore']} to={edge.node.fields.slug}>
            Read
          </Link>
        </div>
      )
    })}
  </div>
)

export default Feed
