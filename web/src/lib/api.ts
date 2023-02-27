import { groq, useSanityClient } from 'astro-sanity'
import { richText, seo } from './queries'

export async function getHomepage() {
  const query = groq`*[_type == "homepage"][0] {
      title,
      description[] {
        ${richText}
      },
      cta {link {external, internal->{_type, slug}, newTab}, linkText},
      seo {
       ${seo}
      },
   }`

  const data = await useSanityClient().fetch(query)
  return data
}

export async function getAllPages() {
  const query = groq`*[_type == "page"]`

  const data = await useSanityClient().fetch(query)
  return data
}
