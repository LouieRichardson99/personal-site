import {defineField} from 'sanity'

export default defineField({
  type: 'code',
  name: 'codeField',
  title: 'Code',
  options: {
    withFilename: true,
  },
})
