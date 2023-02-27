import { groq } from 'astro-sanity'

export const richText = groq`
  ...,
  markDefs[] {
      ...,
      _type == "link" && defined(internal) => {
        _type,
        internal->{slug, _type}
      }
  }
`

export const seo = groq`
  metaTitle, metaImage{alt, asset}, metaDescription
`
