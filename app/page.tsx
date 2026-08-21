import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default function Home() {
  const posts = getAllPosts().slice(0, 5);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          都市更新整合
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          探討城市永續發展、社區改造與都市更新的相關議題
        </p>
        <Link
          href="/blog"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          瀏覽所有文章
        </Link>
      </section>

      {/* Latest Posts */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-gray-900">最新文章</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-gray-900 hover:text-blue-600"
                  >
                    {post.frontmatter.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {post.frontmatter.date}
                </p>
                <p className="text-gray-700 mb-4">
                  {post.frontmatter.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  閱讀更多 →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
