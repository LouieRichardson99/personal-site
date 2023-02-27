import page from './documents/page'

import homepage from './singletons/homepage'
import header from './singletons/header'
import socials from './singletons/socials'
import contact from './singletons/contact'

import seo from './objects/seo'
import link from './objects/link'
import navLink from './objects/navLink'
import richText from './objects/richText'
import code from './objects/code'

export const schemaTypes = [
  // Documents
  page,

  // Singletons
  homepage,
  header,
  socials,
  contact,

  // Objects
  seo,
  link,
  navLink,
  richText,
  code,
]
