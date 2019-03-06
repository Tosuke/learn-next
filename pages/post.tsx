import * as React from 'react'
import { Global, css } from '@emotion/core'
import Layout from '../components/MyLayout'
import { withRouter } from 'next/router'
const Markdown = require('react-markdown')

const MarkdownStyle = css({
  '.markdown': {
    fontFamily: 'Arial',
    a: {
      textDecoration: 'none',
      color: 'blue'
    },
    'a:hover': {
      opacity: 0.6
    }
  },
})

export default withRouter(props => (
  <Layout>
    <h1>{props.router!.query!.title}</h1>
    <div className="markdown">
      <Markdown css={MarkdownStyle} source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
      `} />
    </div>
    <style jsx global>{`
    .markdown {
      font-family: 'Arial';
    }

    .markdown a {
      text-decoration: none;
      color: blue;
    }

    .markdown a:hover {
      opacity: 0.6;
    }

    .markdown h3 {
      margin: 0;
      padding: 0;
      text-transform: uppercase;
    }
    `}</style>
  </Layout>
))