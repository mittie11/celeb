import { getAllPosts, toPost } from "@/lib/sanity";
import { categories } from "@/lib/categories";
import ArticleCard from "@/components/ArticleCard";
import AdUnit from "@/components/AdUnit";
import Link from "next/link";

export const revalidate = 60;

export default async function HomePage() {
  const sanityPosts = await getAllPosts();
  const posts = sanityPosts.map(toPost);

  const featured = posts[0];
  const recent = posts.slice(1, 7);
  const sidebarPosts = posts.slice(7, 12);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top leaderboard ad */}
      <AdUnit slot="leaderboard" className="mb-8 hidden md:flex" />
      <AdUnit slot="mobile-banner" className="mb-6 md:hidden" />

      {/* Categories bar */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-hide">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/category/${cat.slug}`}
            className="flex-shrink-0 px-4 py-1.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-pink-600 hover:text-white hover:border-pink-600 transition-colors"
          >
            {cat.name}
          </Link>
        ))}
      </div>

      {/* Hero section */}
      {featured && (
        <div className="mb-10">
          <ArticleCard post={featured} variant="featured" />
        </div>
      )}

      {/* Main content + sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Article grid */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-gray-900">Latest Stories</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {recent.slice(0, 2).map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>

          <AdUnit slot="rectangle" className="my-6" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {recent.slice(2).map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>

          {posts.length > 7 && (
            <div className="mt-8 text-center">
              <Link
                href="/category/celebrity-news"
                className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-full hover:bg-pink-700 transition-colors text-sm"
              >
                See All Stories →
              </Link>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <AdUnit slot="rectangle" />

          <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
            <h3 className="text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              Trending Now
            </h3>
            <div className="space-y-4">
              {(sidebarPosts.length > 0 ? sidebarPosts : posts.slice(0, 5)).map((post) => (
                <ArticleCard key={post.slug} post={post} variant="compact" />
              ))}
            </div>
          </div>

          <AdUnit slot="sidebar" />

          <div className="bg-pink-50 border border-pink-100 rounded-xl p-5">
            <h3 className="text-base font-bold text-pink-800 mb-2">Browse By Category</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="flex items-center justify-between text-sm text-gray-700 hover:text-pink-700 font-medium group"
                  >
                    <span>{cat.name}</span>
                    <span className="text-gray-400 group-hover:text-pink-600">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
