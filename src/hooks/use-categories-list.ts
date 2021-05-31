import { useStaticQuery, graphql } from 'gatsby'
import type { Group } from '../types'

type SeriesList = Group[]

const useSeriesList = (): SeriesList => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query SeriesListQuery {
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

export default useSeriesList
