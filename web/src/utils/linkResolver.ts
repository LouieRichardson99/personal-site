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
    default:
      return null
  }
}

export default linkResolver
