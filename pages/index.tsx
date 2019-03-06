import * as React from 'react'
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

const PostLink: React.FC<{ post: Post }> = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

const Index: React.FC = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {getPosts().map(post => (
        <PostLink key={post.id} post={post} />
      ))}
    </ul>
    <style jsx>{`
      h1,
      a {
        font-family: 'Arial';
      }

      ul {
        padding: 0;
      }
    `}</style>
  </Layout>
)

export default Index
