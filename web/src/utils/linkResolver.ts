import type { Link } from '@types'

const linkResolver = (link: Link) => {
  if (link?.external) {
    return link.external
  }

  switch (link?.internal?._type) {
    case 'homepage':
      return '/'
    case 'page':
      return `/${link?.internal.slug.current}`
    case 'contact':
      return '/contact'
    case 'blog':
      return '/blog'
    case 'blogPost':
      return `/blog/${link?.internal.slug.current}`
    default:
      return null
  }
}

export default linkResolver
