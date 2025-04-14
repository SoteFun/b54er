import { Callout } from '@/components/Callout'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'
import { CSSProperties } from 'react';
import { CodeBlock } from '@/components/CodeBlock'

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  'quick-links': {
    render: QuickLinks,
  },
  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
  iframe: {
    render: 'iframe',
    attributes: {
      src: { type: String },
      frameborder: { type: String },
      scrolling: { type: String },
      style: { type: CSSProperties },
      allow: { type: String },
      width: { type: String },
      height: { type: String }
    }
  },
  'code-block': {
    selfClosing: true,
    render: CodeBlock,
    attributes: {
      rawUrl: { type: String },
      language: { type: String },
      code: { type: String }
    }
  }
}

export default tags
