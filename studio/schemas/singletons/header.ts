import {defineType} from 'sanity'

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Header',
      }
    },
  },
  fields: [
    {
      name: 'portraitImage',
      title: 'Portrait Image',
      type: 'image',
      fields: [{title: 'Alternative Text', name: 'alt', type: 'string'}],
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [{type: 'navLink', title: 'Navigation Link', name: 'navLink'}],
    },
  ],
})
