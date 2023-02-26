import {defineType} from 'sanity'
import {FiLink} from 'react-icons/fi'

export default defineType({
  name: 'navLink',
  title: 'Navigation Link',
  type: 'object',
  description: 'Link can either be external or reference an internal document',
  fields: [
    {
      type: 'string',
      name: 'linkText',
      title: 'Link Text',
    },
    {
      name: 'external',
      type: 'url',
      placeholder: 'https://www.example.com',
      title: 'External',
      hidden: ({parent, value}) => !value && !!parent?.internal,
    },
    {
      name: 'newTab',
      type: 'boolean',
      title: 'Open in new tab',
      hidden: ({parent}) => !parent?.external,
    },
    {
      name: 'internal',
      type: 'reference',
      title: 'Internal',
      to: [{type: 'homepage'}, {type: 'contact'}, {type: 'page'}],
      hidden: ({parent, value}) => !value && !!parent?.external,
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
