import page from './documents/page'

import homepage from './singletons/homepage'
import header from './singletons/header'
import socials from './singletons/socials'

import seo from './objects/seo'
import link from './objects/link'
import navLink from './objects/navLink'
import richText from './objects/richText'
import blogPost from './documents/blog-post'
import blog from './singletons/blog'

export const schemaTypes = [
  // Documents
  page,
  blogPost,

  // Singletons
  homepage,
  header,
  socials,
  blog,

  // Objects
  seo,
  link,
  navLink,
  richText,
]
