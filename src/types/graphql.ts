export interface Node {
  fields: {
    slug: string
    seriesSlug?: string
    tagSlugs?: string[]
  }
  frontmatter: {
    date: string
    description?: string
    category: string
    tags?: string[]
    title: string
    socialImage?: {
      publicURL: string
    }
  }
  html: string
  id: string
}

export interface Edge {
  node: Node
}

export type Edges = Edge[]

export interface Group {
  fieldValue: string
  totalCount: number
}

export interface AllMarkdownRemark {
  allMarkdownRemark: {
    edges: Edges
  }
  group: Group[]
}

export type MarkdownRemark = Node

export interface Menu {
  label: string
  path: string
}

export type Contacts = Record<string, string>

export interface Author {
  name: string
  photo: string
  bio: string
  contacts: Contacts
}

export interface SiteMetadata {
  url: string
  pathPrefix: string
  name: string
  title: string
  subtitle: string
  author: Author
  copyright: string
  postsPerPage: number
  menu: Menu[]
  googleAnalyticsId?: string
}
