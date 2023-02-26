import {defineType} from 'sanity'

export default defineType({
  name: 'portableText',
  type: 'array',
  title: 'Portable Text',
  of: [
    {
      type: 'block',
      marks: {
        annotations: [
          {
            name: 'link',
            type: 'link',
            title: 'Link',
          },
        ],
      },
    },
  ],
})
