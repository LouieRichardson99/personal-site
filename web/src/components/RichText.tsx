import type { FC } from 'react'
import type { PortableTextBlock } from '@portabletext/types'
import type { Image, InternalLink } from '@types'
import linkResolver from '@utils/linkResolver'
import PortableTextReact from 'react-portable-text'
import CodeBlock from './CodeBlock'
import urlFor from '@utils/urlFor'

const RichText: FC<{ richText: PortableTextBlock[] }> = ({ richText }) => {
  interface Link {
    children: string[]
    newTab?: boolean
    internal?: InternalLink
    external: string
  }

  interface Code {
    code: string
    filename: string
    language: string
  }

  return (
    <PortableTextReact
      content={richText}
      serializers={{
        link: ({ children, newTab, external, internal }: Link) => {
          const href = linkResolver({ newTab, internal, external })

          if (href == null) {
            return <span>{children}</span>
          }

          const rel = href?.startsWith('/') ? undefined : 'noreferrer noopener'

          return (
            <a href={href} rel={rel} target={newTab ? '_blank' : '_self'}>
              {children}
            </a>
          )
        },
        codeField: ({ language, code }: Code) => (
          <CodeBlock language={language} code={code} />
        ),
        image: (image: Image) => (
          <img src={urlFor(image).url()} alt={image.alt} />
        )
      }}
    />
  )
}

export default RichText
