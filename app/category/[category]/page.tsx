import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostsByCategory, toPost } from "@/lib/sanity";
import { categories, getCategoryName } from "@/lib/categories";
import ArticleCard from "@/components/ArticleCard";
import AdUnit from "@/components/AdUnit";

export const revalidate = 60;

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: cat.name,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  const sanityPosts = await getPostsByCategory(category);
  const categoryPosts = sanityPosts.map(toPost);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <AdUnit slot="leaderboard" className="mb-8 hidden md:flex" />
      <AdUnit slot="mobile-banner" className="mb-6 md:hidden" />

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="inline-block bg-pink-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            {getCategoryName(category)}
          </span>
          <span className="text-sm text-gray-500">{categoryPosts.length} stories</span>
        </div>
        <h1 className="text-3xl font-extrabold text-gray-900">{cat.name}</h1>
        <p className="text-gray-600 mt-2">{cat.description}</p>
      </div>

      {categoryPosts.length === 0 ? (
        <p className="text-gray-500">No stories in this category yet. Check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryPosts.map((post, i) => (
            <>
              <ArticleCard key={post.slug} post={post} />
              {i === 5 && (
                <div key="ad" className="sm:col-span-2 lg:col-span-3">
                  <AdUnit slot="leaderboard" className="hidden md:flex" />
                  <AdUnit slot="rectangle" className="md:hidden" />
                </div>
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
}
