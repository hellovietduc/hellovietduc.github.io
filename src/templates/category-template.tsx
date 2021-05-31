import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Page from '../components/Page'
import Pagination from '../components/Pagination'
import { useSiteMetadata } from '../hooks'
import type { PageContext, AllMarkdownRemark } from '../types'

interface Props {
  data: AllMarkdownRemark
  pageContext: PageContext
}

const CategoryTemplate: React.FC<Props> = ({ data, pageContext }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata()

  const { series, currentPage, prevPagePath, nextPagePath, hasPrevPage, hasNextPage } = pageContext

  const { edges } = data.allMarkdownRemark
  const pageTitle = currentPage > 0 ? `${series} - Page ${currentPage} - ${siteTitle}` : `${series} - ${siteTitle}`

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar />
      <Page title={`Series: ${series}`}>
        <Feed edges={edges} />
        <Link to="/all-series">View all series</Link>
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  )
}

export const query = graphql`
  query CategoryPage($series: String, $postsLimit: Int!, $postsOffset: Int!) {
    allMarkdownRemark(
      limit: $postsLimit
      skip: $postsOffset
      filter: { frontmatter: { series: { eq: $series }, template: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            seriesSlug
            slug
          }
          frontmatter {
            date
            description
            series
            title
          }
        }
      }
    }
  }
`

export default CategoryTemplate
