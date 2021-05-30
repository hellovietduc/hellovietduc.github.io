import React from 'react'
import { withPrefix, Link } from 'gatsby'
import Contacts from '../../Sidebar/Contacts'
import { useSiteMetadata } from '../../../hooks'
import type { NoProps } from '../../../types'
import styles from './Author.module.scss'

const Author: React.FC<NoProps> = () => {
  const { author } = useSiteMetadata()

  return (
    <div className={styles['author']}>
      <div className={styles['author__card']}>
        <div className={styles['author__card-profile']}>
          <Link className={styles['author__card-profile']} to="/pages/about">
            <img
              src={withPrefix(author.photo)}
              className={styles['author__card-profile-photo']}
              width="50"
              height="50"
              alt={author.name}
            />
          </Link>
          <div className={styles['author__card-profile-name']}>{author.name}</div>
        </div>
        <Contacts styles={{ marginBottom: 0 }} contacts={author.contacts} />
      </div>
    </div>
  )
}

export default Author
