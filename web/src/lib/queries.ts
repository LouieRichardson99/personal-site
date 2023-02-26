import { groq } from 'astro-sanity'

export const markDefs = groq`
  markDefs[] {
      ...,
      _type == "link" && defined(internal) => {
        internal->{slug, _type}
      }
  }
`
