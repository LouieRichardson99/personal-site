import {defineType} from 'sanity'
import {FaLinkedin, FaTwitter, FaGithub} from 'react-icons/fa'

export default defineType({
  name: 'socials',
  title: 'Socials',
  type: 'document',
  description: 'Links to social networking profiles.',
  preview: {
    prepare() {
      return {
        title: 'Links to Socials',
      }
    },
  },
  fields: [
    {
      type: 'string',
      name: 'email',
      title: 'Email Address',
      description: "Work email address you'd like to be contacted on.",
    },
    {
      type: 'array',
      name: 'socialLinks',
      title: 'Social Links',

      of: [
        {
          name: 'linkedIn',
          title: 'LinkedIn',
          type: 'object',
          icon: FaLinkedin,
          preview: {
            prepare() {
              return {
                title: 'LinkedIn',
                media: FaLinkedin,
              }
            },
          },
          fields: [
            {
              title: 'LinkedIn Link',
              name: 'link',
              type: 'url',
              description: 'Enter the link to your LinkedIn profile.',
            },
          ],
        },
        {
          name: 'github',
          title: 'GitHub',
          type: 'object',
          icon: FaGithub,
          preview: {
            prepare() {
              return {
                title: 'GitHub',
                media: FaGithub,
              }
            },
          },
          fields: [
            {
              title: 'GitHub Link',
              name: 'link',
              type: 'url',
              description: 'Enter the link to your GitHub profile.',
            },
          ],
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'object',
          icon: FaTwitter,
          preview: {
            prepare() {
              return {
                title: 'Twitter',
                media: FaTwitter,
              }
            },
          },
          fields: [
            {
              title: 'Twitter Link',
              name: 'link',
              type: 'url',
              description: 'Enter the link to your Twitter profile.',
            },
          ],
        },
      ],
    },
  ],
})
