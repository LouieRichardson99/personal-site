import {defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons'
import {RiArticleLine} from 'react-icons/ri'
import {SiGooglesearchconsole} from 'react-icons/si'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  icon: DocumentIcon,
  groups: [
    {
      name: 'pageContent',
      title: 'Page content',
      default: true,
      icon: RiArticleLine,
    },
    {
      name: 'seo',
      title: 'SEO',
      icon: SiGooglesearchconsole,
    },
  ],
  fields: [
    // Page Content
    {name: 'title', type: 'string', title: 'Title', group: 'pageContent'},
    // SEO
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
})
