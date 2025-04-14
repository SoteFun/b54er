'use client'

import { Fragment, useState, useEffect } from 'react'
import { Highlight } from 'prism-react-renderer'
import clsx from 'clsx'

interface CodeBlockProps {
  rawUrl: string
  language?: string
  code?: string
}

export function CodeBlock({ rawUrl, language = 'typescript', code: initialCode }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [code, setCode] = useState(initialCode || '')
  
  useEffect(() => {
    if (!initialCode && rawUrl) {
      fetch(rawUrl)
        .then(response => response.text())
        .then(text => setCode(text))
        .catch(error => console.error('Error fetching code:', error))
    }
  }, [rawUrl, initialCode])
  
  // Convert raw URL to GitHub repo URL
  const githubUrl = rawUrl.replace('raw.githubusercontent.com', 'github.com')
                         .replace('/main/', '/blob/main/')
  
  const copyCode = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="my-6 overflow-hidden rounded-xl bg-slate-900 shadow-lg dark:ring-1 dark:ring-slate-300/10">
      <div className="flex items-center justify-between border-b border-slate-300/10 px-4 py-2">
        <div className="flex items-center space-x-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer" 
            className="text-sm text-slate-400 hover:text-slate-300"
          >
            在 GitHub 上查看
          </a>
        </div>
        <button
          onClick={copyCode}
          className="text-sm text-slate-400 hover:text-slate-300"
        >
          {copied ? '已复制!' : '复制代码'}
        </button>
      </div>
      
      <div className="relative">
        <Highlight
          code={code.trimEnd()}
          language={language}
          theme={{ plain: {}, styles: [] }}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre 
              className={clsx(
                className,
                'overflow-x-auto p-4 text-sm text-slate-50'
              )}
              style={style}
            >
              <code>
                {tokens.map((line, lineIndex) => (
                  <Fragment key={lineIndex}>
                    <div {...getLineProps({ line })}>
                      {line.map((token, tokenIndex) => (
                        <span key={tokenIndex} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  </Fragment>
                ))}
              </code>
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}
