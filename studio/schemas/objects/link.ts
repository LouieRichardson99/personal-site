import {defineType} from 'sanity'
import {FiLink} from 'react-icons/fi'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  description: 'Link can either be external or reference an internal document',
  fields: [
    {
      name: 'external',
      type: 'url',
      placeholder: 'https://www.example.com',
      title: 'External',
      hidden: ({parent, value}) => !value && !!parent?.internal,
    },
    {
      name: 'internal',
      type: 'reference',
      title: 'Internal',
      to: [{type: 'homepage'}, {type: 'contact'}, {type: 'page'}],
      hidden: ({parent, value}) => !value && !!parent?.external,
    },
    {
      name: 'newTab',
      type: 'boolean',
      title: 'Open in new tab',
      hidden: ({parent}) => !parent?.external,
    },
  ],
  preview: {
    select: {title: 'linkText'},

    prepare(selection) {
      const {title} = selection

      return {
        title: title,
        media: FiLink,
      }
    },
  },
})
