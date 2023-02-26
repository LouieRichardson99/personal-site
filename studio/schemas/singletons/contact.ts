import {defineType} from 'sanity'
import {RiArticleLine} from 'react-icons/ri'
import {SiGooglesearchconsole} from 'react-icons/si'
import {FaPaperPlane} from 'react-icons/fa'
import {BsInputCursorText} from 'react-icons/bs'

export default defineType({
  name: 'contact',
  title: 'Contact',
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
      type: 'object',
      title: 'Form',
      name: 'form',
      fields: [
        {
          title: 'Form Builder',
          name: 'formBuilder',
          type: 'array',
          description: "Select the form inputs. Must have only one 'Submit Button' per form.",
          of: [
            {
              type: 'object',
              title: 'Input Field',
              name: 'input',
              icon: BsInputCursorText,

              fields: [
                {title: 'Field Label', name: 'fieldLabel', type: 'string'},
                {
                  title: 'Field Type',
                  name: 'fieldType',
                  type: 'string',
                  options: {
                    list: ['text', 'email', 'textarea'],
                  },
                },
                {
                  title: 'Required',
                  name: 'required',
                  type: 'boolean',
                },
              ],
              preview: {
                select: {
                  title: 'fieldLabel',
                },
                prepare(selection) {
                  const {title} = selection
                  return {
                    title: title,
                    media: BsInputCursorText,
                  }
                },
              },
            },
            {
              type: 'object',
              title: 'Submit Button',
              name: 'submitButton',
              icon: FaPaperPlane,
              preview: {
                prepare() {
                  return {
                    title: 'Submit Button',
                    media: FaPaperPlane,
                  }
                },
              },
              fields: [
                {
                  title: 'Button Text',
                  name: 'buttonText',
                  type: 'string',
                },
              ],
            },
          ],
        },
        {
          name: 'asideContent',
          title: 'Aside Content',
          type: 'object',
          description: 'The content that will be displayed to the side of the form.',
          fields: [
            {name: 'formDescription', title: 'Form Description', type: 'text', rows: 2},
            {
              name: 'location',
              title: 'Location',
              type: 'string',
              placeholder: 'Bristol, United Kingdom',
            },
          ],
        },
      ],
      group: 'pageContent',
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
        title: 'Contact',
      }
    },
  },
})
