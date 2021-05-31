const _ = require('lodash')
const path = require('path')
const siteConfig = require('../../config.js')

module.exports = async (graphql, actions) => {
  const { createPage } = actions
  const { postsPerPage } = siteConfig

  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }) {
        group(field: frontmatter___series) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  _.each(result.data.allMarkdownRemark.group, (series) => {
    const numPages = Math.ceil(series.totalCount / postsPerPage)
    const seriesSlug = `/series/${_.kebabCase(series.fieldValue)}`

    for (let i = 0; i < numPages; i += 1) {
      createPage({
        path: i === 0 ? seriesSlug : `${seriesSlug}/page/${i}`,
        component: path.resolve('./src/templates/category-template.tsx'),
        context: {
          series: series.fieldValue,
          currentPage: i,
          postsLimit: postsPerPage,
          postsOffset: i * postsPerPage,
          prevPagePath: i <= 1 ? seriesSlug : `${seriesSlug}/page/${i - 1}`,
          nextPagePath: `${seriesSlug}/page/${i + 1}`,
          hasPrevPage: i !== 0,
          hasNextPage: i !== numPages - 1,
        },
      })
    }
  })
}
