/** @jsx jsx */
import * as React from 'react'
import { jsx, css } from '@emotion/core'
import Layout from '../components/MyLayout'
import Link from 'next/link'

interface Post {
  id: string
  title: string
}

function getPosts(): Post[] {
  return [
    { id: 'hello-nextjs', title: 'Hello, Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ]
}

const PostLinkStyle = css({
  listStyle: 'none',
  margin: '5px 0',
  a: {
    textDecoration: 'none',
    color: 'blue'
  },
  'a:hover': {
    opacity: 0.6
  }
})

const PostLink: React.FC<{ post: Post }> = ({ post }) => (
  <li css={PostLinkStyle}>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
  </li>
)

const IndexStyle = css({
  'h1, a': {
    fontFamily: 'Arial'
  },
  ul: {
    padding: 0
  }
})

const Index: React.FC = () => (
  <Layout css={IndexStyle}>
    <h1>My Blog</h1>
    <ul>
      {getPosts().map(post => (
        <PostLink key={post.id} post={post} />
      ))}
    </ul>
  </Layout>
)

export default Index
