import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const postsDirectory = path.join(process.cwd(), 'posts')

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Asegúrate de obtener 'data' y 'content' correctamente desde matter
  const { data, content } = matter(fileContents)

  // Verifica que 'data' tenga los valores de 'title' y 'date'
  if (!data.title || !data.date) {
    throw new Error(`Missing title or date in the frontmatter of ${slug}.mdx`)
  }

  const mdxSource = await serialize(content)

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    mdxSource,
  }
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.mdx$/, ''),
    },
  }))
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '')

    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const { data } = matter(fileContents)

    // Validar que cada post tenga un 'title' y 'date'
    if (!data.title || !data.date) {
      throw new Error(`Missing title or date in the frontmatter of ${fileName}`)
    }

    return {
      slug,
      title: data.title as string,
      date: data.date as string,
    }
  })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}
