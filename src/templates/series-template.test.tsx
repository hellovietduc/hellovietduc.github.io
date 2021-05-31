import React from 'react'
import renderer from 'react-test-renderer'
import { useStaticQuery, StaticQuery } from 'gatsby'
import SeriesTemplate from './series-template'
import siteMetadata from '../../jest/__fixtures__/site-metadata'
import allMarkdownRemark from '../../jest/__fixtures__/all-markdown-remark'
import pageContext from '../../jest/__fixtures__/page-context'
import type { RenderCallback } from '../types'

describe('SeriesTemplate', () => {
  const props = {
    data: {
      ...allMarkdownRemark,
    },
    ...pageContext,
  }

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(siteMetadata),
      useStaticQuery.mockReturnValue(siteMetadata),
    )
  })

  it('renders correctly', () => {
    const tree = renderer.create(<SeriesTemplate {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
