import React from 'react'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import Page from '../components/Page'
import { useSiteMetadata } from '../hooks'
import { getRandom404Image } from '../utils'
import type { NoProps } from '../types'

const NotFoundTemplate: React.FC<NoProps> = () => {
  const { title, subtitle } = useSiteMetadata()

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="NOT FOUND">
        <img src={getRandom404Image()} alt="404" />
      </Page>
    </Layout>
  )
}

export default NotFoundTemplate
