import page from './documents/page'

import homepage from './singletons/homepage'
import header from './singletons/header'
import socials from './singletons/socials'

import seo from './objects/seo'
import link from './objects/link'
import navLink from './objects/navLink'
import richText from './objects/richText'

export const schemaTypes = [
  // Documents
  page,

  // Singletons
  homepage,
  header,
  socials,

  // Objects
  seo,
  link,
  navLink,
  richText,
]
