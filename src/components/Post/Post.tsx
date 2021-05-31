import React from 'react'
import { Link } from 'gatsby'
import Author from './Author'
import Comments from './Comments'
import Content from './Content'
import Meta from './Meta'
import Tags from './Tags'
import type { MarkdownRemark } from '../../types'
import styles from './Post.module.scss'

interface Props {
  post: MarkdownRemark
}

const Post: React.FC<Props> = ({ post }) => {
  const { html } = post
  const { slug, seriesSlug, tagSlugs } = post.fields
  const { title, category, date, tags } = post.frontmatter

  return (
    <div className={styles['post']}>
      <Link className={styles['post__home-button']} to="/">
        All Posts
      </Link>

      <div className={styles['post__content']}>
        <Content body={html} title={title} />
      </div>

      <div className={styles['post__footer']}>
        <Meta category={category} seriesSlug={seriesSlug} date={date} />
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs} />}
        <Author />
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title} />
      </div>
    </div>
  )
}

export default Post
