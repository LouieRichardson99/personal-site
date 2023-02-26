import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {singletonPlugin} from './plugins/settings'

// Icons
import {IoShareSocial} from 'react-icons/io5'
import {TbDirections} from 'react-icons/tb'
import {RiLayoutTop2Line, RiLayoutBottom2Line} from 'react-icons/ri'
import {AiOutlineHome, AiOutlinePhone} from 'react-icons/ai'
import {MdQuestionAnswer, MdRateReview} from 'react-icons/md'
import {TfiWorld} from 'react-icons/tfi'
import {CgWebsite} from 'react-icons/cg'

export default defineConfig({
  name: 'default',
  title: 'Personal Site',

  projectId: 'zxttarpe',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Base')
          .items([
            S.listItem()
              .title('Pages')
              .icon(CgWebsite)
              .child(
                S.list()
                  .title('Pages')
                  .items([
                    S.documentListItem()
                      .title('Homepage')
                      .id('homepage')
                      .schemaType('homepage')
                      .icon(AiOutlineHome),
                    S.documentListItem()
                      .title('Contact')
                      .id('contact')
                      .schemaType('contact')
                      .icon(AiOutlinePhone),
                    S.listItem()
                      .title('Other Pages')
                      .id('other-pages')
                      .child(
                        S.documentTypeList('page').title('Other Pages').filter('_type == "page"')
                      ),
                  ])
              ),

            S.listItem()
              .title('Global Content')
              .icon(TfiWorld)
              .child(
                S.list()
                  .title('Global Content')
                  .items([
                    S.listItem()
                      .title('Navigation')
                      .icon(TbDirections)
                      .child(
                        S.list()
                          .title('Navigation Types')
                          .items([
                            S.documentListItem()
                              .title('Header')
                              .id('header')
                              .schemaType('header')
                              .icon(RiLayoutTop2Line),
                          ])
                      ),
                    S.documentListItem()
                      .title('Socials')
                      .id('socials')
                      .schemaType('socials')
                      .icon(IoShareSocial),
                  ])
              ),
          ]),
    }),
    visionTool(),
    singletonPlugin({types: ['homepage', 'header', 'footer', 'socials', 'contact']}), // Add all singleton document types to the array
  ],

  schema: {
    types: schemaTypes,
  },
})
