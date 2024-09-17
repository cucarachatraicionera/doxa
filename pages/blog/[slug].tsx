import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { getPostData, getAllPostSlugs } from '../../lib/mdx'

interface PostProps {
  mdxSource: MDXRemoteSerializeResult
  title: string
  date: string
}

const Post = ({ mdxSource, title, date }: PostProps) => {
  return (
    <article>
      <h1>{title}</h1> {/* Usamos title directamente */}
      <p>{date}</p> {/* Usamos date directamente */}
      <MDXRemote {...mdxSource} />
    </article>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.slug as string)
  return {
    props: {
      ...postData, // Asegúrate de pasar los datos correctamente
    },
  }
}

export default Post
