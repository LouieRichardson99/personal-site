import {defineType} from 'sanity'
import {BiImageAdd} from 'react-icons/bi'

export default defineType({
  title: 'Rich Text',
  name: 'richText',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',

      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],

      lists: [{title: 'Bullet', value: 'bullet'}],

      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],

        annotations: [
          {
            name: 'link',
            type: 'link',
            title: 'Link',
          },
        ],
      },
    },
    {
      title: 'Image',
      type: 'image',
      icon: BiImageAdd,
      fields: [{title: 'Alternative Text', name: 'alt', type: 'string'}],
    },
    {
      type: 'code',
      options: {
        withFilename: true,
      },
    },
  ],
})
