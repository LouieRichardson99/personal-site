import type { FC } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark as style } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const CodeBlock: FC<{ code: string; language: string }> = ({
  code,
  language
}) => {
  return (
    <SyntaxHighlighter language={language} style={style} showLineNumbers={true}>
      {code}
    </SyntaxHighlighter>
  )
}

export default CodeBlock
