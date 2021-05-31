import React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import Page from '../components/Page'
import { useSiteMetadata, useCategoriesList } from '../hooks'
import type { NoProps } from '../types'

const CategoriesListTemplate: React.FC<NoProps> = () => {
  const { title, subtitle } = useSiteMetadata()
  const seriesList = useCategoriesList()

  return (
    <Layout title={`Series - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Series">
        <ul>
          {seriesList.map((series) => (
            <li key={series.fieldValue}>
              <Link to={`/series/${kebabCase(series.fieldValue)}/`}>
                {series.fieldValue} ({series.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  )
}

export default CategoriesListTemplate
