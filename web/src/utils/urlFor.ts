import { useSanityClient } from 'astro-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { Image } from '@types'
import type { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder'

const builder = imageUrlBuilder(useSanityClient())

const urlFor = (source: Image): ImageUrlBuilder => {
  return builder.image(source)
}

export default urlFor
