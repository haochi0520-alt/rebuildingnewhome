import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: '部落格 - 都市更新整合',
  description: '閱讀關於都市更新與社區整合的所有文章',
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-12 text-gray-900">部落格</h1>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg mb-4">還沒有文章發佈</p>
          <p className="text-gray-500">敬請期待...</p>
        </div>
      ) : (
        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-gray-200 pb-8"
            >
              <h2 className="text-2xl font-bold mb-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-gray-900 hover:text-blue-600 transition"
                >
                  {post.frontmatter.title}
                </Link>
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-600 text-sm mb-4">
                <time dateTime={post.frontmatter.date}>
                  {new Date(post.frontmatter.date).toLocaleDateString('zh-TW')}
                </time>
                {post.frontmatter.author && (
                  <span>作者：{post.frontmatter.author}</span>
                )}
              </div>
              <p className="text-gray-700 mb-4">{post.frontmatter.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                閱讀更多 →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
