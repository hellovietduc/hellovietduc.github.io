import React from 'react'
import { withPrefix, Link } from 'gatsby'
import type { Author as AuthorProps } from '../../../types'
import styles from './Author.module.scss'

interface Props {
  siteName: string
  author: AuthorProps
  isIndex?: boolean
}

const Author: React.FC<Props> = ({ siteName, author, isIndex }) => (
  <div className={styles['author']}>
    <Link to="/">
      <img
        src={withPrefix(author.photo)}
        className={styles['author__photo']}
        width="75"
        height="75"
        alt={author.name}
      />
    </Link>

    {isIndex === true ? (
      <h1 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">
          {siteName}
        </Link>
      </h1>
    ) : (
      <h2 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">
          {siteName}
        </Link>
      </h2>
    )}
    <p className={styles['author__subtitle']}>{author.bio}</p>
  </div>
)

export default Author
