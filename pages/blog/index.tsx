import { GetStaticProps } from 'next'
import Link from 'next/link'
import { getSortedPostsData } from '../../lib/mdx'

type Post = {
  slug: string
  title: string
  date: string
}

interface BlogProps {
  posts: Post[]
}

const Blog = ({ posts }: BlogProps) => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            {/* Elimina el <a> y usa solo el <Link> */}
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPostsData()
  return {
    props: {
      posts,
    },
  }
}

export default Blog
