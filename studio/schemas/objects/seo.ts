import {defineType} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'The page title that shows up in search results.',
      validation: (Rule) => [
        Rule.required().error('Meta Title is required'),
        Rule.max(65).warning('Meta Title should be no more than 65 characters'),
      ],
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 4,
      description: 'The page description that shows up in search results.',
      validation: (Rule) => [
        Rule.required().error('Meta Description is required'),
        Rule.max(160).warning('Meta Description should be no more than 160 characters'),
      ],
    },
    {
      name: 'metaImage',
      title: 'Meta Image',
      type: 'image',
      fields: [{title: 'Alternative Text', name: 'alt', type: 'string'}],
      description:
        'The Open Graph image that appears when the page is shared to social networking sites.',
    },
  ],
})
