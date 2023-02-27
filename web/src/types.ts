interface InternalLink {
  _type: string
  slug: { _type: string; current: string }
}

interface Link {
  external?: string | null
  internal?: InternalLink
  newTab?: boolean | null
}

interface NavLink {
  external: string | null
  internal: InternalLink
  linkText: string
  newTab: boolean | null
}

interface Slug {
  _type: string
  current: string
}

interface Page {
  title: string
  slug: Slug
}

interface Image {
  _type: string
  alt: string
  asset: {
    _ref: string
    _type: string
  }
}

export type { InternalLink, Link, NavLink, Slug, Page, Image }
