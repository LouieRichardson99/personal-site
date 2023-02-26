import { groq, useSanityClient } from 'astro-sanity'
import { markDefs } from './queries'

export async function getHomepage() {
  const query = groq`*[_type == "homepage"][0] {
      title,
      description[] {
        ...,
        ${markDefs}
      },
      cta {link {external, internal->{_type, slug}, newTab}, linkText},
      seo {
        metaTitle, metaImage{alt, asset->{url}}, metaDescription
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
