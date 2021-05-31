import { useStaticQuery, graphql } from 'gatsby'
import type { Group } from '../types'

type Categories = Group[]

const useCategoriesList = (): Categories => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query CategoriesListQuery {
        allMarkdownRemark(filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }) {
          group(field: frontmatter___series) {
            fieldValue
            totalCount
          }
        }
      }
    `,
  )

  return allMarkdownRemark.group
}

export default useCategoriesList
