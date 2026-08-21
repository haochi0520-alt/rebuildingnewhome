import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ReactMarkdown } from 'react-markdown';

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return {};
  }

  return {
    title: `${post.frontmatter.title} - 都市更新整合`,
    description: post.frontmatter.excerpt,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/blog"
        className="text-blue-600 hover:text-blue-800 mb-8 inline-block"
      >
        ← 返回部落格
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          {post.frontmatter.title}
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600">
          <time dateTime={post.frontmatter.date}>
            {new Date(post.frontmatter.date).toLocaleDateString('zh-TW', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          {post.frontmatter.author && (
            <span>作者：{post.frontmatter.author}</span>
          )}
        </div>
        {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="prose prose-lg max-w-none text-gray-700">
        {post.content}
      </div>
    </article>
  );
}
