import { useStaticQuery, graphql } from 'gatsby'
import type { SiteMetadata } from '../types'

const useSiteMetadata = (): SiteMetadata => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            author {
              name
              bio
              photo
              contacts {
                linkedin
                github
                email
              }
            }
            menu {
              label
              path
            }
            url
            title
            subtitle
            copyright
          }
        }
      }
    `,
  )

  return site.siteMetadata
}

export default useSiteMetadata
