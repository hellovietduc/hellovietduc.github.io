import React from 'react'
import renderer from 'react-test-renderer'
import { useStaticQuery, StaticQuery } from 'gatsby'
import NotFoundTemplate from './not-found-template'
import siteMetadata from '../../jest/__fixtures__/site-metadata'
import * as utils from '../utils'
import type { RenderCallback } from '../types'

describe('NotFoundTemplate', () => {
  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(siteMetadata),
      useStaticQuery.mockReturnValue(siteMetadata),
    )
  })

  it('renders correctly', () => {
    utils.getRandom404Image = jest.fn().mockReturnValue('/media/404/1.png')

    const tree = renderer.create(<NotFoundTemplate />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
