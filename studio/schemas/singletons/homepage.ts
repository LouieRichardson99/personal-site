import {defineType} from 'sanity'
import {RiArticleLine} from 'react-icons/ri'
import {SiGooglesearchconsole} from 'react-icons/si'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
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
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      group: 'pageContent',
    },
    {
      name: 'description',
      type: 'portableText',
      title: 'Description',
      group: 'pageContent',
    },
    {
      type: 'object',
      name: 'cta',
      title: 'Call To Action',
      group: 'pageContent',
      fields: [
        {
          name: 'link',
          title: 'Link',
          type: 'link',
        },
        {
          name: 'linkText',
          title: 'Link Text',
          type: 'string',
        },
      ],
    },

    // SEO
    {
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      group: 'seo',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Homepage',
      }
    },
  },
})
