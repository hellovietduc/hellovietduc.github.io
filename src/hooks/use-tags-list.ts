import { useStaticQuery, graphql } from 'gatsby'
import type { Group } from '../types'

type Tags = Group[]

const useTagsList = (): Tags => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query TagsListQuery {
        allMarkdownRemark(filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }) {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `,
  )

  return allMarkdownRemark.group
}

export default useTagsList
