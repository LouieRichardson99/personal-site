import { groq, useSanityClient } from 'astro-sanity'
import { richText, seo } from './queries'
import type { BlogPost, Header, Link, Seo } from '@types'
import type { PortableTextBlock } from '@portabletext/types'

interface Homepage {
  title: string
  description: PortableTextBlock[]
  cta: {
    link: Link
    linkText: string
  }
  seo: Seo
}

interface Socials {
  email: string
  socialLinks: { _key: string; _type: string; link: string }[]
}

export async function getHomepage(): Promise<Homepage> {
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

export async function getSocials(): Promise<Socials> {
  const query = groq`*[_type == "socials"][0] {
    email,
    socialLinks
  }`

  const data = await useSanityClient().fetch(query)
  return data
}

export async function getAllPages() {
  const query = groq`*[_type == "page"]`

  const data = await useSanityClient().fetch(query)
  return data
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const query = groq`*[_type == "blogPost"]`

  const data = await useSanityClient().fetch(query)
  return data
}

export async function getBlogPage() {
  const query = groq`*[_type == "blog"][0] {
    title,
    seo {
      ${seo}
    }
  }`

  const data = await useSanityClient().fetch(query)
  return data
}

export async function getHeader(): Promise<Header> {
  const query = groq`*[_type == "header"][0] {
    title,
    portraitImage {
      asset,
      alt
    },
    navLinks[] {
      linkText, external, internal->{_type, slug}, newTab
    }
  }`

  const data = await useSanityClient().fetch(query)
  return data
}
